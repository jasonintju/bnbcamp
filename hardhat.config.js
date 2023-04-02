require('@openzeppelin/hardhat-upgrades');
require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

const { PRIVATE_KEY, INFURA_API_KEY, BSCSCAN_API_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.18',
	networks: {
		consensyszkevmgoerli: {
			url: `https://consensys-zkevm-goerli-prealpha.infura.io/v3/${INFURA_API_KEY}`,
			accounts: [PRIVATE_KEY],
		},
		bsctest: {
			url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
			accounts: [PRIVATE_KEY],
		},
	},
	etherscan: {
		apiKey: BSCSCAN_API_KEY,
	},
};
