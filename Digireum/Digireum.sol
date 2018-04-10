pragma solidity ^0.4.21; 
 
contract Digimon {
    uint storedData;
 
    struct digivice {
        bytes32 name;
        bytes32 digimon_id;
        uint8 flag;
    }
 
    mapping(address => digivice) adrs_digivice;
    
    function get (string in_name) constant returns (uint) {
        if(adrs_digivice[msg.sender].name == keccak256(in_name)){
            return 0;
        } else {
            if(adrs_digivice[msg.sender].flag == 1){
                return 2;
            } else {
                return 1;
            }
            
        }
    }

    function login (string in_name) payable {
        if(adrs_digivice[msg.sender].flag != 1){
            adrs_digivice[msg.sender].flag = 1;
            adrs_digivice[msg.sender].name = keccak256(in_name);
            adrs_digivice[msg.sender].digimon_id = keccak256(block.number);
        }
    }
 
    function saying(string say) {
        adrs_digivice[msg.sender].digimon_id = keccak256(say);
    }
    
}
