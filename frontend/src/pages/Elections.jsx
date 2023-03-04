import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { VotingContext } from "../context";

const Election = ({ election }) => {
  const { account, setTheAccount, connectingWithContract } =
    useContext(VotingContext);
  const [status, setStatus] = useState("ended");
  useEffect(() => {
    getElectionDetails();
  }, []);
  const getElectionDetails = async () => {
    setTheAccount();
    const unique_id = election?.id;
    const contract = await connectingWithContract();
    const response = await contract.systems(unique_id);
    console.log(response);
    if (new Date(parseInt(response?.votingPeriod?._hex) * 1000) >= new Date()) {
      setStatus("live");
    }
  };
  return (
    <Link
      to={`/elections/${election.id}`}
      className="w-full px-6 py-4 grid grid-cols-12 border rounded hover:shadow-lg mt-2"
    >
      <h1 className="text-gray-400 col-span-1">{election.id}</h1>
      <h1 className="text-xl font-semibold col-span-6 text-black">
        {election.election_name}
      </h1>
      {status === "live" ? (
        <h1 className="text-lg font-semibold col-span-4 text-[#00FF00]">
          Live
        </h1>
      ) : (
        <h1 className="text-lg font-semibold col-span-4 text-[#FF0000]">
          Ended
        </h1>
      )}
      <h1 className="text-xl font-semibold col-span-1 text-end text-black">
        >
      </h1>
    </Link>
  );
};

const Elections = () => {
  const [elections, setElections] = useState([]);
  useEffect(() => {
    fetchElections();
  }, []);

  const fetchElections = async () => {
    const response = await axios.get(
      "http://vismay9.pythonanywhere.com/election/"
    );
    console.log(response.data);
    setElections(response.data);
  };

  return (
    <div>
      <Navbar />
      <div className="w-full px-36 py-16 flex flex-col gap-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-semibold text-black">Close Elections</h1>
          {localStorage.getItem("status")?.length > 0 ? (
            localStorage.getItem("status") === "helder" ? (
              <Link to="/add-election">
                <button className="text-white text-lg  font-semibold uppercase rounded-full px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-800 hover:to-cyan-600">
                  + Add Election
                </button>
              </Link>
            ) : null
          ) : null}
        </div>
        <div className="w-full px-6 py-4 grid grid-cols-12 bg-gray-200 border rounded">
          <h1 className="text-xl text-gray-400 col-span-1">ID</h1>
          <h1 className="text-xl text-gray-400 col-span-6">Election</h1>
          <h1 className="text-xl text-gray-400 col-span-2">Status</h1>
        </div>
        {elections?.length > 0 ? (
          <div>
            {elections.map((election) => (
              <Election key={election.id} election={election} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Elections;
