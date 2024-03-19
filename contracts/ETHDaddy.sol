// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ETHDaddy is ERC721{

    uint256 public maxSupply;

    struct Domain{
        string name;
        uint256 cost;
        bool isOwned;
    }

    mapping(uint256 => Domain) domains;

    modifier onlyOwner(){
        require(msg.sender == owner);
        _;
    }

    address public owner;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol){
        owner = msg.sender;
    }

    function list(string memory _name,uint256 _cost) public onlyOwner{
        maxSupply = maxSupply + 1;
        domains[maxSupply] = Domain(_name, _cost, false);
    }

    function mint(uint256 _id)public payable {
        _safeMint(msg.sender,_id);
    }

    function getDomains(uint256 _id) public view returns(Domain memory) {
        return domains[_id];
    }

    function getBalance() public view returns(uint256){
        return address(this).balance;
    }
}