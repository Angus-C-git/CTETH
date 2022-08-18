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
const contractAddr = "0xe1bE69811F80107df3846e51B0Fb0C2cF6919481"
// contract name according to solidity code
const contractName = "GuessTheSecretNumberChallenge" 

const targetHash = "0xdb81b4d58595fbbbb592d3661a34cdca14d7ab379441400cbfa1b78bc447c365"

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
 * 
 * @param goalHash 
 * @returns the found number needed
 * to prove the goalHash or false if 
 * no number succeeded
 */
const guessNumber = (goalHash: string) => {
    for (let x = 0; x <= 256; x++) {
        let candidateHash = ethers.utils.keccak256([x])
        if (candidateHash === goalHash) return x;
    }

    return false;
}


/**
 * SOLUTION
 * 
 * - Since the secret number n is of type uint8 we know
 *  that the range of possible values is 0 to 255.
 * 
 * - This means that it is trivial to brute force the 
 *   secret number by iterating through all possible
 *   values and comparing the hash of the value to the
 *   target hash.
 **/
it("solves guess the number", async function () {
    const secretNumber = guessNumber(targetHash)
    if (!secretNumber) 
        throw new Error("Could not find the secret number");
    
    const tx = await contract.guess(secretNumber, {
        value: ethers.utils.parseEther("1")
    });
    const txHash = tx.hash
    expect(txHash).to.not.be.undefined
});

