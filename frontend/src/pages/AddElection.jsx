import React from 'react';
import Navbar from '../components/Navbar';
import electionholder from '../assets/voting.svg';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useContext } from 'react';
import { VotingContext } from '../context';

const AddElection = () => {
  const { typeOfElection, setTypeOfElection } = useState('');
  const { setTheAccount, connectingWithContract } = useContext(VotingContext);
  const [electionName, setElectionName] = useState('');
  const [noOfCandidates, setNoOfCandidates] = useState('');
  const [candidates, setCandidates] = useState('');
  const [noOfDays, setNoOfDays] = useState('');
  const [aadharNumbers, setAadharNumbers] = useState('');
  const [name, setName] = useState('');
  const [id, setId] = useState(1);
  const generateUniqueId = async () => {
    const response = await axios.post(
      'http://127.0.0.1:8000/openelection/',

      {
        election_name: electionName,
      }
    );
    if (response.data.id >= 1) {
      setId(response.data.id);
      toast.success('Unique ID generated', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      toast.error('Not able to generate an unique id', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };
  const addAnElection = async () => {
    setTheAccount();
    const contract = await connectingWithContract();
    const allCandidates = candidates.split(',');
    const aadhars = aadharNumbers.split(',');
    const response = await contract.createSystem(
      id,
      electionName,
      parseInt(noOfCandidates),
      allCandidates,
      parseInt(noOfDays),
      aadhars,
      name
    );
    console.log(response);
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="bg-[#121113] p-8 px-16 flex flex-row justify-around">
        <img src={electionholder} className="max-h-[500px]" />
        <div className="ml-[200px] flex flex-col border-2 p-4 rounded-t-lg border-[#6bcadb]">
          <h1 className="text-3xl text-white font-bold mb-4">
            Add an Election
          </h1>
          <div>
            <input
              type="text"
              placeholder="Election Name"
              className="p-2 rounded mt-4"
              value={electionName}
              onChange={(e) => setElectionName(e.target.value)}
            />
            <button
              onClick={() => generateUniqueId()}
              className="text-white bg-[#244663] p-2 ml-8">
              Generate Unique ID
            </button>
          </div>
          <input
            type="number"
            placeholder="Number of Candidates"
            className="p-2 rounded mt-4"
            value={noOfCandidates}
            onChange={(e) => setNoOfCandidates(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter candidates with ,"
            className="p-2 rounded mt-4"
            value={candidates}
            onChange={(e) => setCandidates(e.target.value)}
          />
          <input
            type="number"
            placeholder="Number of days for election period"
            className="p-2 rounded mt-4"
            value={noOfDays}
            onChange={(e) => setNoOfDays(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter aadhar card of voters"
            className="p-2 rounded mt-4"
            value={aadharNumbers}
            onChange={(e) => setAadharNumbers(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 rounded mt-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="p-1 rounded mt-4 relative w-full">
            <select
              placeholder="Choose election type"
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
              <option
                value={typeOfElection}
                onChange={(e) => setTypeOfElection(e.target.value)}>
                Approval Voting
              </option>
              <option
                value={typeOfElection}
                onChange={(e) => setTypeOfElection(e.target.value)}>
                Ranked-Choice Voting
              </option>
              <option
                value={typeOfElection}
                onChange={(e) => setTypeOfElection(e.target.value)}>
                Quadratic Voting
              </option>
            </select>
          </div>
          <button
            onClick={() => addAnElection()}
            className="text-white bg-[#244663] p-2 mt-8">
            Add Election
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddElection;
