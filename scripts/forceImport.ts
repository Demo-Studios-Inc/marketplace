const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0xD137833E527466bac7D18002aeeF187A6e7f929d";

async function main() {
  // TO DO: Place upgraded contract here
  const DimoV1 = await ethers.getContractFactory("Marketplace"); 
  const contractA = await upgrades.forceImport(proxyAddress, DimoV1);
  console.log(contractA)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });