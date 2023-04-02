async function main() {
	const [deployer] = await ethers.getSigners();

	console.log('Deploying contracts with the account:', deployer.address);

	console.log('Account balance:', (await deployer.getBalance()).toString());

	const Token = await ethers.getContractFactory('Staking');
	const token = await Token.deploy(
		'0x744c722905cc7F8330f0481CE3E7D527Ceae1469',
		'0xBb5226A8e4C29d8Eb7E375ae4eCFDC0FE0CCbB95',
		10
	);
	// const Token = await ethers.getContractFactory('LPToken');
	// const token = await Token.deploy();

	console.log('Contract address:', token.address);
}

main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error);
		process.exit(1);
	});
