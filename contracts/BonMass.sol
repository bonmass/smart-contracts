// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract BonMass {
    event DbEvent(uint64 indexed userId, bytes32 indexed dataHash, string label, uint64 ts);
    address private admin;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin {
        require(msg.sender == admin, "Only the admin can call this function");
        _;
    }

    function emitDbEvent(uint64 userId, bytes32 dataHash, string calldata label)
        external
        onlyAdmin
    {
        emit DbEvent(userId, dataHash, label, uint64(block.timestamp));
    }
}
