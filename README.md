# Smart Contracts
## Compiling our smart contracts with Hardhat

You can compile it using the command below 
```bash
npx hardhat compile
```

Once you run the command, you should see a new file in your src folder called artifacts.

Artifacts contain the compiled version of our smart contract in JSON format. This JSON file contains an array called abi. ABI or Application Binary Interface is what we need to connect our client (React app) with our compiled smart contract.

<hr>

## Deploying smart contract on a local blockchain
Now, we can deploy our smart contract on a local blockchain using Hardhat. To do that first, we need a local network. To start a local network, run the below code in your terminal.

```bash
npx hardhat node
```
This command also generates 20 test accounts and addresses, that can be used to deploy and test our smart contracts.

> Don't close this terminal as we need it to deploy our smart contract

Now, simply rename sample-script.js to deploy.js in your scripts folder. And then run the below code to deploy your smart contract on a local network.

```bash
npx hardhat run scripts/deploy.js --network localhost
```
connect your metamask to the local network.
