// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Voting{
    
    struct VotingSystem{
        uint uniqueId;
        string systemName;
        uint numberOfCandidates;
        string[] candidates;
        uint votingPeriod;       
        string[] votersForElection;
        string electionHelderName;
    }

    mapping (uint => mapping (string => uint)) public differentSystemVotes; 
    mapping (uint => mapping (address => bool)) differentSystemVotingDone;
    mapping (uint => mapping (string => bool)) differentPanCardsVoting;
    mapping (uint => VotingSystem) public systems; 

    function createSystem(uint _uniqueId, string memory _systemName, uint _numberOfCandidates, string[] memory _candidates,uint numberOfDays,string[] memory _votersForElection, string memory _electionHelderName) public   {
        uint _votingPeriod = block.timestamp + (numberOfDays * 1 days);
        VotingSystem memory system =  VotingSystem(_uniqueId,_systemName,_numberOfCandidates,_candidates,_votingPeriod,_votersForElection,_electionHelderName);
        systems[_uniqueId] = system;
    }

    address payable owner;
    mapping (address => uint) votingDone;
  
    constructor() {
        owner = payable(msg.sender);
    }


    function showBalance() public view returns(uint) {
        return address(this).balance;
    }

    function voteKarteRaho(uint _uniqueId,string memory _candidateName,string memory _candidateAadhar) public  {
        voteKaro(_uniqueId,_candidateName,_candidateAadhar);
    }

    function checkIfUserExists(uint _uniqueId,string memory _candidateAadhar) internal view returns(bool){
        for(uint i=0;i<systems[_uniqueId].votersForElection.length;i++){
            if (keccak256(bytes(systems[_uniqueId].votersForElection[i])) == keccak256(bytes(_candidateAadhar))){
                return true;
            }
        }
        return false;
    }

    function voteKaro(uint _uniqueId,string memory _candidateName,string memory _candidateAadhar) internal{
        require(checkIfUserExists(_uniqueId, _candidateAadhar),"You are not Authorized to Vote");
        require(differentSystemVotingDone[_uniqueId][msg.sender]==false,"You have already Voted");
        require(differentPanCardsVoting[_uniqueId][_candidateAadhar]==false,"You have already Voted");
        require(systems[_uniqueId].votingPeriod >= block.timestamp, "The voting time is Over!");
        differentSystemVotes[_uniqueId][_candidateName] +=1;
        differentSystemVotingDone[_uniqueId][msg.sender] = true;
        differentPanCardsVoting[_uniqueId][_candidateAadhar]=true;
    }

    function getCandidates(uint _uniqueId) public view returns (string[] memory)  {
        return systems[_uniqueId].candidates;
    }

    function getVoters(uint _uniqueId) public view returns (string[] memory)  {
        return systems[_uniqueId].votersForElection;
    }

    function addMoneyToOwner() public payable{
        require(msg.sender == owner, "Not Authorized");
        payable(msg.sender).transfer(1 ether);
    }

}
