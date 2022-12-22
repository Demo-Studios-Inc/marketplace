const { ethers } = require ( "hardhat");
const { expect } = require  ("chai");
const { exSignerWithAddresspect } = require  ("@nomiclabs/hardhat-ethers/signers");

describe("Create Collection with a supply of 3", function () {
    let minter, user1, user2;
    let dimoNFT;
    before(async () =>{
        this.timeout(20000);
        [minter, user1, user2] = await ethers.getSigners();
        const factory = await ethers.getContractFactory("Marketplace");
         dimoNFT = await factory.deploy();
        await dimoNFT.deployed()
        console.log("hre")

    })
    describe("Create Collesdction with a supply of 0",  function () {
        it("Error thrown", async function () {
        //     await dimoNFT.createListing({
        //         assetContract:"0x022f8FD0BDD8e2E6b169AbB86e89b7AE03760Aa3",
        //         tokenId:2,
        //         startTime: Date.now(),
        //         secondsUntilEndTime:10000000,
        //         quantityToList:1,
        //         currencyToAccept: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        //         reservePricePerToken:0,
        //         buyoutPricePerToken:1,
        //         listingType:0,
        //         payee: minter.address
        // })
        console.log(await dimoNFT.getAllActiveListings([1,2,3,4]))
            
        //   await expect(dimoNFT.createCollection(10001, "")).to.be.revertedWith("The initial supply must be less than 1000");
        });})
        describe("poop",  function () {
            it("poop", async function () {
            //     await dimoNFT.createListing({
            //         assetContract:"0x022f8FD0BDD8e2E6b169AbB86e89b7AE03760Aa3",
            //         tokenId:2,
            //         startTime: Date.now(),
            //         secondsUntilEndTime:10000000,
            //         quantityToList:1,
            //         currencyToAccept: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
            //         reservePricePerToken:0,
            //         buyoutPricePerToken:1,
            //         listingType:0,
            //         payee: minter.address
            // })
            console.log(await dimoNFT.poop())
                
            //   await expect(dimoNFT.createCollection(10001, "")).to.be.revertedWith("The initial supply must be less than 1000");
            });})
})
    
    
