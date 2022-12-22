// require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-etherscan");
// require('@openzeppelin/hardhat-upgrades');
// require("dotenv").config();

// module.exports = {

//     matic: {
//       url: "https://polygon-mainnet.g.alchemy.com/v2/d0WGNg0eb-NDGYCKTD-u4cUlWbV_MVR9",
//       accounts: ["c1affb878acda74983bfde7d936ad04171edab19c8dc158b6b3a99dd84e1614c"],
//     },
//     mumbai: {
//       url: "https://polygon-mumbai.g.alchemy.com/v2/w0klqunFSwmtTsZqcz9wjBFm7hBFIL_t",
//       accounts: ["0x47d4f1f0736280edadd729112082bad726de4c32ace2d2f9b57b8c0cd08ba2cf"],
//     },
//     rinkeby: {
//       url: "https://eth-rinkeby.alchemyapi.io/v2/BgLvQX9PGHrpaZ3w78vyYShRy7CYh_0i",
//       accounts: ["0x9e510297dd5694cdf932f4f92ce043829aa89d35a2594575d258a32061d53a28"]
//     }
//   };



import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import dotenv from "dotenv";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
import "hardhat-gas-reporter";
import "@primitivefi/hardhat-dodoc";
import { HardhatUserConfig } from "hardhat/config";
import { NetworkUserConfig } from "hardhat/types";
require('@openzeppelin/hardhat-upgrades');
dotenv.config();



const config: HardhatUserConfig = {
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.12",
    settings: {
      metadata: {
        bytecodeHash: "ipfs",
      },
      // You should disable the optimizer when debugging
      // https://hardhat.org/hardhat-network/#solidity-optimizer-support
      optimizer: {
        enabled: true,
        runs: 490,
      },
    },
  },
  abiExporter: {
    flat: true,
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY || process.env.SCAN_API_KEY,
      ropsten: process.env.ETHERSCAN_API_KEY || process.env.SCAN_API_KEY,
      rinkeby: process.env.ETHERSCAN_API_KEY || process.env.SCAN_API_KEY,
      goerli: process.env.ETHERSCAN_API_KEY || process.env.SCAN_API_KEY,
      kovan: process.env.ETHERSCAN_API_KEY || process.env.SCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY || process.env.SCAN_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || process.env.SCAN_API_KEY,
      opera: process.env.FANTOMSCAN_API_KEY || process.env.SCAN_API_KEY,
      ftmTestnet: process.env.FANTOMSCAN_API_KEY || process.env.SCAN_API_KEY,
      avalanche: process.env.SNOWTRACE_API_KEY || process.env.SCAN_API_KEY,
      avalancheFujiTestnet: process.env.SNOWTRACE_API_KEY || process.env.SCAN_API_KEY,
      optimisticEthereum: process.env.OPTIMISM_SCAN_API_KEY || process.env.SCAN_API_KEY,
      optimisticKovan: process.env.OPTIMISM_SCAN_API_KEY || process.env.SCAN_API_KEY,
      arbitrumOne: process.env.ARBITRUM_SCAN_API_KEY || process.env.SCAN_API_KEY,
      arbitrumTestnet: process.env.ARBITRUM_SCAN_API_KEY || process.env.SCAN_API_KEY,
      bsc: process.env.BINANCE_SCAN_API_KEY || process.env.SCAN_API_KEY,
      bscTestnet: process.env.BINANCE_SCAN_API_KEY || process.env.SCAN_API_KEY,
    },
  },
  gasReporter: {
    coinmarketcap: process.env.REPORT_GAS_COINMARKETCAP_API_KEY,
    currency: "USD",
    enabled: process.env.REPORT_GAS ? true : false,
  },
  dodoc: {
    runOnCompile: true,
    exclude: ["**/node_modules/**"],
    keepFileStructure: false,
  },
};

  config.networks = {
    matic: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/d0WGNg0eb-NDGYCKTD-u4cUlWbV_MVR9",
      accounts: ["c1affb878acda74983bfde7d936ad04171edab19c8dc158b6b3a99dd84e1614c"],
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/w0klqunFSwmtTsZqcz9wjBFm7hBFIL_t",
      accounts: ["0x47d4f1f0736280edadd729112082bad726de4c32ace2d2f9b57b8c0cd08ba2cf"],
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/BgLvQX9PGHrpaZ3w78vyYShRy7CYh_0i",
      accounts: ["0x9e510297dd5694cdf932f4f92ce043829aa89d35a2594575d258a32061d53a28"]
    }
  };


config.networks = {
  ...config.networks,
  hardhat: {
    chainId: 137,
  },
};

export default config;


