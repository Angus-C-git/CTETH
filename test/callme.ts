/**
  ____    _    _     _       __  __ _____ 
 / ___|  / \  | |   | |     |  \/  | ____|
| |     / _ \ | |   | |     | |\/| |  _|  
| |___ / ___ \| |___| |___  | |  | | |___ 
 \____/_/   \_\_____|_____| |_|  |_|_____|


 > npx hardhat test tests/callme.ts
* */


// [DEPS]
import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import { expect } from "chai";

// [CONFIG]
let contract: Contract; // challenge contract
const contractAddr = "0x37c9C2abec4E0188E9Bb5126049795f5064fae35"
const contractName = "CallMeChallenge"

/**
 * Pre-test hook
 * */
before(async () => {
  // pull the contract and store a refrence to it
  const factory =  await ethers.getContractFactory(contractName)
  contract = factory.attach(contractAddr)
});


/**
 * TEST RUNNER  
 **/
it("solves call-me", async function () {
  const tx = await contract.callme();
  const txHash = tx.hash
  expect(txHash).to.not.be.undefined
});
