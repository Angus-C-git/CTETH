/***
 * :::::::::::: Guess The Number ::::::::::::
 * 
 * */

// [DEPS]
import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import { expect } from "chai";


 
// [CONFIG]

// contract object
let contract: Contract
// hex address of the contract
const contractAddr = "0x54E1eCeB74f0219fb1eb78788C115c3F93cba336"
// contract name according to solidity code
const contractName = "GuessTheNumberChallenge" 


 /**
  * Spawn an reference to the contract object
  * and assign it globally before we use it
  * in solutions.
  * */
 before(async () => {
  // pull the contract and store a reference to it
  const factory =  await ethers.getContractFactory(contractName)
  contract = factory.attach(contractAddr)
});


/**
 * SOLUTION
 **/
it("solves guess the number", async function () {
    const tx = await contract.guess(42, {
        value: ethers.utils.parseEther("1.0"),
        gasLimit: 1,
    });
    const txHash = tx.hash
    expect(txHash).to.not.be.undefined
});

