pragma solidity ^0.4.11;

contract Lottery {
 
    mapping(address => uint) usersBet;
    mapping(uint => address) users;
    uint numUsers = 0;
    uint checker = 97911583900907;
    bytes32 true_key;


    function Initializer(string key) public {
        true_key = sha256(key);
    }

    function Priviliage(string key) constant returns (uint x) {
        x = 0;
        bytes32 hash = sha256(key);
        if(hash == true_key) {
            x = checker;
        }
        return x;
    }
    
    function Bet() public payable  {
        if (msg.value > 0) {
            if (usersBet[msg.sender] == 0) {
                users[numUsers] = msg.sender;
                numUsers += 1;
            }
            usersBet[msg.sender] += msg.value;
        }
    }
    
    function EndLottery() payable public {
        if (usersBet[msg.sender] > 0) {
            // uint sum = 0;
            // for (uint i=0; i < numUsers; i++) {
            //     sum += usersBet[users[i]];
            // }
            msg.sender.transfer(usersBet[msg.sender]);
            usersBet[msg.sender] = 0;
        }
    }
    
    function CheckBalance() constant returns (uint) {
        return address(this).balance;
    }
    
}