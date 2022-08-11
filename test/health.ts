/***
 * :::::::::::: HEALTH CHECK ::::::::::::
 * 
 * - Make sure hardhat and web3 are 
 * configured correctly
 * */
 
// [DEPS]
import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import { expect } from "chai";


let accounts: Signer[];
let eoa: Signer;

before(async () => {
	accounts = await ethers.getSigners();
	eoa = accounts[0];
});


/**
 * SOLUTION
 **/
it("we can authenticate!", async function () {
	expect(eoa).to.not.be.undefined
});
