# BonMass Smart Contracts

This project demonstrates a basic Hardhat use case with event handling. 
It comes with the BonMass contract and a Hardhat Ignition module that deploys that contract to [FDP-Play](https://github.com/fairDataSociety/fdp-play).

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
# TEST ENVIRONMENT
npx hardhat node
npm run fdp-play:start
npm run fdp-play:stop
# DEPLOYMENT
npm run fdp-play:deploy
# EVENTS
npm run db-event:listen
npx hardhat dbEvent --label "bloodPressure" --params "userId=1&sex=female" --data-hash 0xb0baf37700000000000000000000000000000000000000000000000000000000  --network fdpPlay
```
