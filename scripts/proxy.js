const { ethers, upgrades } = require("hardhat");

async function main() {
  const Dimo = await ethers.getContractFactory("Marketplace");
  const dimo = await upgrades.deployProxy(Dimo, [1500],
    {gasLimit:50000,unsafeAllow: ['delegatecall']});

  await dimo.deployed();
  console.log("Dimo deployed to:", dimo.address);
}

main();