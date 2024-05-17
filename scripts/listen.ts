import { ethers } from "hardhat"
import { CONTRACT_ADDRESS } from "./utils"

export default async function listen() {
    const myContractFactory = await ethers.getContractFactory("BonMass")
    const myContract = myContractFactory.attach(CONTRACT_ADDRESS)

    console.log(`Listening to events from contract: ${CONTRACT_ADDRESS}`)
    myContract.on("DbEvent", (label, dataHash, params, ts) => {
        const date = new Date(Number(ts)*1000)
        const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
        console.log(`DbEvent: \n\tlabel: ${label} \n\tparams ${params} \n\tdataHash: ${dataHash};\n\tat time: ${dateString}`)
    })
}

listen()
