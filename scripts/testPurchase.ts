  const ADDRESS = "0xD137833E527466bac7D18002aeeF187A6e7f929d";

  async function main() {
    const contract = await ethers.getContractAt("Marketplace", ADDRESS);
  
    // const tx = await contract.setOwnerToCollectionIds();
    // const receipt = await tx.wait();
    const purchase = await contract.buy(
        984, '0xdc53c46ceD506851525bBC57900FA568Cefd88a3', 1, '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', 59000000        , {gasLimit:3000000}
    )
    console.log(purchase)
    console.log(purchase)
  //   const receipt = await _ownerToCollectionIds.wait();
  //   console.log(receipt)//, receipt2);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });