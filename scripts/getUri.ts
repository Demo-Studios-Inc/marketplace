
// TO DO: Place the address of your proxy here!
const addy = "0xD418fb20987F9bB7143e1A6f5092847Ea7E0069d";
const NFTMarket = require( '../artifacts/contracts/marketplace/Marketplace.json');


async function main() {
  // TO DO: Place upgraded contract here
  const DimoV1 = await ethers.getContractFactory(NFTMarket); 
  console.log(DimoV1)
  const receipt = await DimoV1.cool();
  console.log(receipt)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });