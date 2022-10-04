// const { ethers, upgrades } = require("hardhat");

// // TO DO: Place the address of your proxy here!
// const proxyAddress = "0x0CA9E00A3FBd3556A35A1fe7Ed75016AcD35c2F5";

// async function main() {
//   // TO DO: Place upgraded contract here
//   const DimoV1 = await ethers.getContractFactory("Marketplace"); 
//   const contractA = await upgrades.forceImport(proxyAddress, DimoV1);
//   console.log(contractA)
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });