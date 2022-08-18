/***
 * :::::::::::: Choose a Nickname ::::::::::::
 * 
 * */

// [DEPS]
import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import { expect } from "chai";


 
// [CONFIG]

// contract object
let contract: Contract; 
// hex address of the contract
const contractAddr = "0x71c46Ed333C35e4E6c62D32dc7C8F00D125b4fee"
// contract name according to solidity code
const contractName = "CaptureTheEther" 


 /**
  * Spawn an refrence to the contract object
  * and assign it globally before we use it
  * in solutions.
  * */
 before(async () => {
  // pull the contract and store a reference to it
  const factory = await ethers.getContractFactory(contractName)
  contract = factory.attach(contractAddr)
});


/**
 * SOLUTION
 **/
it("solves choose a nickname", async function () {
    const tx = await contract.setNickname(
        ethers.utils.formatBytes32String(`http-418`)
    );
    const txHash = tx.hash
    expect(txHash).to.not.be.undefined
});