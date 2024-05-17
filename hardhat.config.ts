import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { CONTRACT_ADDRESS } from "./scripts/utils";


task("dbEvent", "Prints the list of accounts")
  .addParam('params', "The parameters used in the GET request")
  .addParam('dataHash', "hash of the database record")
  .addParam('label', "API path or label of the record")
  .setAction(async (taskArgs, hre) => {
  const bonMass = await hre.ethers.getContractAt('BonMass', CONTRACT_ADDRESS);
  const tx = await bonMass.emitDbEvent(taskArgs.label, taskArgs.dataHash, taskArgs.params);

  console.log('DbEvent was emitted with txId', tx.hash);
});

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    fdpPlay: {
      url: process.env.BLOCKCHAIN_URL || 'http://localhost:9545',
      accounts: [
        '0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d', 
        '0x6cbed15c793ce57650b9877cf6fa156fbef513c4e6134f022a85b1ffdd59b2a1'
      ],
    },
  }
};

export default config;
