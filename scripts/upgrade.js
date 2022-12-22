const  { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0xD137833E527466bac7D18002aeeF187A6e7f929d";

async function main() {
  // TO DO: Place upgraded contract here

  const DimoV1 = await ethers.getContractFactory("Marketplace"); 
  const upgraded = await upgrades.upgradeProxy(proxyAddress,DimoV1,  {gasLimit:50000,unsafeAllow: ['delegatecall']}, {gasLimit:50000,unsafeAllow: ['delegatecall']});
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