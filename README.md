# Capture The Ether Solutions

CTETH solutions, and writeup. 

**note:** project setup modified from [mrToph](https://github.com/MrToph/capture-the-ether)

## Node-Hardhat Setup

1. Clone repo or pull the `packge.json` file
2. Create a [infura.io](https://infura.io/) account and project and copy the API key
3. Create a `.env` file with the following contents

```
ARCHIVE_URL=https://ropsten.infura.io/v3/<your-infura-api-key>
MNEMONIC=<from-meta-mask>
```

4. Install packages 

```
npm i
```

5. Check everythings working

```
npx hardhat test test/health.ts
```


## Challenges

### Warmup

#### Call Me

**goal**: Call a function `callme` in the body of a contract 'CallMeChallenge'.


Run the solution test with:

`npx hardhat test test/callme.ts --network ropsten`

**Hardhat Test Solution**

```ts
// [DEPS]
// ...
//<snip>

// [CONFIG]
let contract: Contract; // challenge contract
const contractAddr = "<your-contract-address>"
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
```