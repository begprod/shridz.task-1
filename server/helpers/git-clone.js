const { exec } = require('child_process');

async function gitClone(repoName, branch) {
	await exec('rm -rf clone-repo');

	console.log(`https://github.com/${ repoName }`);

	await exec(`git clone https://github.com/${ repoName } clone-repo/${ repoName }`);

	await exec(`cd clone-repo/${ repoName } && git checkout ${branch}`);
}

module.exports = gitClone;