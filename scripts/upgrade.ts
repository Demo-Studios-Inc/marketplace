const  { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0xD418fb20987F9bB7143e1A6f5092847Ea7E0069d";

async function main() {
  // TO DO: Place upgraded contract here
  const DimoV1 = await ethers.getContractFactory("Marketplace"); 
  const upgraded = await upgrades.upgradeProxy(proxyAddress,DimoV1,  {gasLimit:50000,unsafeAllow: ['delegatecall']});
  console.log(upgraded)
  // const receipt = await upgraded.addAllowList("0x0C45EAdccFd44AbCC3Aa287e15C11a04F529f28b", {gasLimit:10000});
  // console.log(receipt)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });