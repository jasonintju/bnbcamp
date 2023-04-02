pragma solidity 0.8.18;

// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract LPToken is ERC20("VSCODE", "VC"), Ownable {
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
