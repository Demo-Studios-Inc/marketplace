async function main() {
    const DimoNFT =require("../artifacts/contracts/DimoNFT.sol/DimoNFT.json")
    console.log(DimoNFT.abi)
  }
  
main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});