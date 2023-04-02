pragma solidity 0.8.18;

// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract KiteToken is ERC20 {
    uint constant _initial_supply = 1000000000000 * (10 ** 18);

    constructor() ERC20("KiteToken", "Kite") {
        _mint(msg.sender, _initial_supply);
    }
}
