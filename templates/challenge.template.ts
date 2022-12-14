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
const contractAddr = "0x<contract-address>"
// contract name according to solidity code
const contractName = "ChallengeName" 


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
it("solves <challenge-name>", async function () {
	// sol body
});

