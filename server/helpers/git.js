const fs = require('fs');
const { exec } = require('child_process');

async function gitClone({ repoName, buildCommand, mainBranch }) {
	if (fs.existsSync('./clone-repo')) {
		console.log('> Repository already exist.');
		await exec(`cd clone-repo && git checkout ${ mainBranch }`);
	} else {
		console.log(`> Clone https://github.com/${ repoName }`);
		await exec(`git clone https://github.com/${ repoName } clone-repo/${ repoName }`);

		console.log(`> cd clone-repo/${ repoName }`);
		await exec(`cd clone-repo/${ repoName } && git checkout ${ mainBranch }`);
	}
}


async function gitFirstCommit() {

}

module.exports = { gitClone, gitFirstCommit };