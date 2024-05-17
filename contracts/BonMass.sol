// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract BonMass {
    event DbEvent(string indexed label, bytes32 indexed dataHash, string params, uint64 ts);
    address private admin;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin {
        require(msg.sender == admin, "Only the admin can call this function");
        _;
    }

    function emitDbEvent(string calldata label, bytes32 dataHash, string calldata params)
        external
        onlyAdmin
    {
        emit DbEvent(label, dataHash, params, uint64(block.timestamp));
    }
}
