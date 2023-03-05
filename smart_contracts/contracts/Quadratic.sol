// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

contract Quadratic{
    struct VotingSystem{
        uint uniqueId;
        string systemName;
        uint numberOfCandidates;
        string[] candidates;
        uint votingPeriod;
        string electionHelderName;
        uint[] votes;
    }
    mapping (uint => VotingSystem) public systems;
    mapping (uint256 => mapping (address => bool)) public checkIfVoteDone;
    function createSystem(uint _uniqueId, string memory _systemName, uint _numberOfCandidates, string[] memory _candidates,uint numberOfDays, string memory _electionHelderName) public   {
        uint _votingPeriod = block.timestamp + (numberOfDays * 1 days);
        uint[] memory _votes;        
        VotingSystem memory system =  VotingSystem(_uniqueId,_systemName,_numberOfCandidates,_candidates,_votingPeriod,_electionHelderName,_votes);
        systems[_uniqueId] = system;
        for(uint i=0; i<_numberOfCandidates ; i++){
            systems[_uniqueId].votes.push(0);
        }
    }

    function voteKaro(uint _uniqueid,uint[] memory votes) public {
        require(checkIfVoteDone[_uniqueid][msg.sender] == false, "User has already voted");
        uint len = votes.length;
        for(uint i=0; i<len ; i++){
            systems[_uniqueid].votes[i]  = systems[_uniqueid].votes[i] + votes[i];
        }
        checkIfVoteDone[_uniqueid][msg.sender] = true;
    }
    function getCandidates(uint _uniqueId) public view returns (string[] memory)  {
        return systems[_uniqueId].candidates;
    }

    function getVotes(uint _uniqueId) public view returns (uint[] memory)  {
        return systems[_uniqueId].votes;
    }

}