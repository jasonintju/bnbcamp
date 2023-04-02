const { ethers, upgrades } = require('hardhat');

async function main() {
	// TODO Check this address is right before deploying.
	const deployedProxyAddress = '0x5f453c20875d0c1022BD822Cb7c9EF914be51E87';

	const PriceFeedTrackerV2 = await ethers.getContractFactory(
		'PriceFeedTrackerV2'
	);
	console.log('Upgrading PriceFeedTracker...');

	await upgrades.upgradeProxy(deployedProxyAddress, PriceFeedTrackerV2);
	console.log('PriceFeedTracker upgraded');
}

main();
