/***
 * :::::::::::: CHALLENGE TEMPLATE ::::::::::::
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
const contractAddr = "0x37c9C2abec4E0188E9Bb5126049795f5064fae35"
// contract name according to solidity code
const contractName = "CallMeChallenge" 


 /**
  * Spawn an refrence to the contract object
  * and assign it globally before we use it
  * in solutions.
  * */
 before(async () => {
  // pull the contract and store a refrence to it
  const factory =  await ethers.getContractFactory(contractName)
  contract = factory.attach(contractAddr)
});


/**
 * SOLUTION
 **/
it("solves <challenge-name>", async function () {
	// sol body
});

