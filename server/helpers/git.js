const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const api = require('../api');

class Repository {
	constructor() {
		this.localFolderName = 'clone-repo';
		this.settings = {};
		this.periodTimeout = null;
		this.getSettings = this.getSettings.bind(this);
		this.updateSettings = this.updateSettings.bind(this);
		this.getRecentCommits = this.getRecentCommits.bind(this);
		this.checkCommits = this.checkCommits.bind(this);
		this.queue = [this.getSettings];
		this.processQueue();
	}

	async getSettings() {
		try {
			console.log(`> Get default settings`);

			const { data: { data } } = await api.getSettings();

			if (data && data.repoName) {
				console.log('> Settings found');

				this.settings = data;

				if (!this.checkLocalRepository()) {
					await this.cloneRepository(data.repoName);

					await this.checkout(data.mainBranch);
				}
			} else {
				console.log('> Settings not found');
			}
		} catch (error) {
			throw new Error(error);
		}
	}

	async updateSettings(settings) {
		try {
			console.log(`> Update settings`);

			const { repoName, mainBranch } = settings;

			if (repoName !== this.settings.repoName) {
				await this.cloneRepository(repoName);

				await this.checkout(mainBranch);

				await api.deleteSettings();
			} else if (mainBranch !== this.settings.mainBranch) {
				await this.checkout(mainBranch);
			}
			console.log(`> Save settings`);
			await api.saveSettings(settings);

			this.settings = settings;

			await this.checkCommits();
		} catch (error) {
			console.log(error);
		}
	}

	async cloneRepository(repoName) {
		await this.deleteRepository();

		console.log(`Clone repository ${repoName}`);

		const command = `git clone https://github.com/${repoName} ${this.localFolderName}`;

		return this.run(command);
	}

	async deleteRepository() {
		if (this.checkLocalRepository) {
			console.log('> Delete local repository');

			const command = `rm -rf ${this.localFolderName}`;

			await this.run(command);
		}

		return null;
	}

	async checkLocalRepository() {
		try {
			const stat = fs.statSync(`${this.localFolderName}`);
			console.log('> Local repository is exist');

			return stat.isDirectory();
		} catch (error) {
			console.log('> Local repository not found');
			const { data: { data } } = await api.getSettings();

			await this.cloneRepository(data.repoName);
			return false;
		}
	}

	async checkout(mainBranch) {
		console.log(`> Checkout to branch ${mainBranch}`);

		const command = `cd ${this.localFolderName} && git checkout ${mainBranch}`;

		return this.run(command);
	}

	async getRecentCommits() {
		await this.run(`cd ${this.localFolderName} && git pull origin ${this.settings.mainBranch}`);

		console.log('> Get recent commits');

		const command = 'git log -10 --pretty=format:"%H{SPLIT}"';

		const { stdout } = await this.run(`cd ${this.localFolderName} && ${command}`);
		const commitsList = await stdout.split('{SPLIT}').map(el => el.replace(/\s/g, ''));
		console.log(commitsList);

		try {
			const { data: { data } } = await api.getBuildList();
			const filteredCommits = commitsList.filter(hash => {
				const item = data.find(el => el.commitHash === hash);

				return !item;
			});

			console.log(`> Filtered recent commits: ${filteredCommits}`);

			return filteredCommits;
		} catch (error) {
			console.log(error);

			console.log(`> Recent commits: ${commitsList}`);

			return commitsList;
		}
	}

	async checkCommits() {
		clearTimeout(this.periodTimeout);

		const commits = await this.getRecentCommits();

		for (let i = 0; i < commits.length; i++) {
			const commitHash = commits[i];

			if (commitHash && commitHash.length > 0) await this.getCommitInfo(commitHash);
		}

		const period = Number(this.settings.period) || 10;

		console.log(`Next check commits after ${period} minutes`);

		this.periodTimeout = setTimeout(() => this.checkCommits, period * 60 * 1000);
	}

	async getCommitInfo(commitHash) {
		if (commitHash) {
			console.log(`Info commit ${commitHash}`);

			const { stdout } = await this.run(
				`cd ${this.localFolderName} && git log -1 --format="%s{SPLIT}%an{SPLIT}" ${commitHash}`,
			);

			const out = stdout.split('{SPLIT}');

			const [commitMessage, authorName] = out;

			try {
				await api.addBuild({
					commitHash: String(commitHash),
					commitMessage: String(commitMessage),
					branchName: String(this.settings.mainBranch),
					authorName: String(authorName),
				});

				console.log(`Add to queue ${commitHash}`);

				return {
					commitHash: String(commitHash),
					commitMessage: String(commitMessage),
					branchName: String(this.settings.mainBranch),
					authorName: String(authorName),
				};
			} catch (error) {
				console.log(error);
				console.log(
					`error in setrequest commitHash: ${commitHash} commitMessage: ${commitMessage} authorName: ${authorName} mainBranch: ${this.settings.mainBranch}`,
				);
			}
		}

		return null;
	}

	async run(command) {
		try {
			return exec(command);
		} catch (error) {
			return false;
		}
	}

	async processQueue() {
		if (this.queue[0]) {
			const action = this.queue.shift();

			await action();

			this.processQueue();
		} else {
			setTimeout(() => {
				this.processQueue();
			}, 1000);
		}
	}
}

const gitRepository = new Repository();

module.exports = gitRepository;