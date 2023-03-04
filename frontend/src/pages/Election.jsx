import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { VotingContext } from "../context";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
const Election = () => {
  const { account, setTheAccount, connectingWithContract } =
    useContext(VotingContext);
  const [allCandidates, setAllCandidates] = useState([]);
  const [voters, setVoters] = useState([]);
  const [electionDetails, setElectionDetails] = useState([]);
  const [panNumber, setPanNumber] = useState("");
  const [candidate, setCandidate] = useState("");
  const [checked, setChecked] = useState(false);
  const [modal, setModal] = useState(false);
  const [canVote, setCanVote] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    getElectionDetails();
    // getVotes();
  }, []);
  const getElectionDetails = async () => {
    setTheAccount();
    const url = window.location.href;
    const urlArray = url.split("/");
    const unique_id = urlArray[urlArray.length - 1];
    setId(unique_id);
    const contract = await connectingWithContract();
    const response = await contract.systems(unique_id);
    console.log(response);
    const candidates = await contract.getCandidates(unique_id);
    const voters = await contract.getVoters(unique_id);
    console.log(candidates);
    console.log(voters);
    setAllCandidates(candidates);
    setVoters(voters);
    setElectionDetails(response);
    console.log(parseInt(response.numberOfCandidates._hex));
  };

  const voteKaro = async () => {
    const url = window.location.href;
    const urlArray = url.split("/");
    const unique_id = urlArray[urlArray.length - 1];
    try {
      const contract = await connectingWithContract();
      const response = await contract.voteKarteRaho(
        unique_id,
        candidate,
        panNumber
      );
      console.log(response);
    } catch (e) {
      console.log(e);
      toast.error("You have already voted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const verifyPan = async () => {
    if (!voters.includes(panNumber)) {
      console.log("Not Authorized");
      toast.error("Not Authorized to vote", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    console.log(panNumber);
    const options = {
      method: "POST",
      url: "https://pan-card-verification1.p.rapidapi.com/v3/tasks/sync/verify_with_source/ind_pan",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "aeeaf0c4ffmsh8d2e448618a749cp1497acjsnf52c97a559d3",
        "X-RapidAPI-Host": "pan-card-verification1.p.rapidapi.com",
      },
      data: `{"task_id":"74f4c926-250c-43ca-9c53-453e87ceacd1","group_id":"8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e","data":{"id_number":"${panNumber}"}}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCanVote(true);
        toast.success("Pan number verified", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch(function (error) {
        console.error(error);
        toast.error("Pan number not verified", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="w-full px-36 py-16 flex flex-col gap-6">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-3xl font-bold text-black">Voting panel</h1>
          <Link
            to={`/results/${id}`}
            className="text-white bg-[#015FC7] p-2 mt-8"
          >
            View Results
          </Link>
        </div>

        <h1 className="text-2xl font-semibold">{electionDetails.systemName}</h1>
        <div className="flex flex-row justify-between">
          <h1 className="text-black">
            Number of Candidates:{" "}
            {parseInt(electionDetails.numberOfCandidates?._hex)}
          </h1>
          <h1 className="text-black">
            Election Held By: {electionDetails.electionHelderName}
          </h1>
          <h1 className="text-black">
            Time Till:{" "}
            {new Date(
              parseInt(electionDetails?.votingPeriod?._hex) * 1000
            ).getDate() +
              "-" +
              parseInt(
                new Date(
                  parseInt(electionDetails?.votingPeriod?._hex) * 1000
                ).getUTCMonth() + 1
              ) +
              "-" +
              new Date(
                parseInt(electionDetails?.votingPeriod?._hex) * 1000
              ).getFullYear()}
          </h1>
        </div>
        <div>
          <input
            placeholder="Enter PAN number"
            value={panNumber}
            onChange={(e) => {
              setPanNumber(e.target.value);
            }}
          />
          <button onClick={() => verifyPan()}>Verify Pan</button>
        </div>
        {electionDetails?.length > 0 ? (
          allCandidates.map((c) => {
            return (
              <div className="flex flex-col items-center">
                <div className="w-full grid grid-cols-12 px-6 py-4 bg-gray-50 border rounded">
                  <input
                    className="cols-span-1"
                    type="radio"
                    name="candidate"
                    id=""
                    checked={candidate === c}
                    onChange={() => setCandidate(c)}
                  />
                  <h1 className="text-lg col-span-5 text-black">{c}</h1>
                  <h1 className="text-lg col-span-6 text-end">></h1>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Loading</h1>
        )}

        <div className="flex gap-4">
          {candidate ? (
            <>
              <input
                type="checkbox"
                name=""
                id=""
                checked={checked}
                onClick={() => setChecked((prev) => !prev)}
              />
              <h1 className="text-black">
                I have selected {candidate} as my candidate
              </h1>
            </>
          ) : (
            <h1 className="text-red-500 ">Please select a candidate</h1>
          )}
        </div>
        <button
          className={`${
            checked && canVote ? "bg-blue-500" : "bg-gray-500"
          } text-white px-4 py-2 rounded`}
          disabled={!(checked && canVote)}
          onClick={() => setModal(true)}
        >
          Vote
        </button>
        <Modal
          isOpen={modal}
          onRequestClose={() => setModal(false)}
          shouldCloseOnOverlayClick={false}
          className="w-screen h-screen flex items-center justify-center"
        >
          <div className="w-1/3 h-1/3 m-auto bg-white rounded border flex flex-col items-center justify-center">
            <h1 className="text-2xl font-semibold">Are you sure?</h1>
            <div className="flex gap-4 mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => {
                  voteKaro();
                  setModal(false);
                }}
              >
                Yes
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setModal(false)}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
  {
    /* const voteKaro = async () => {
    if (!voters.includes(panNumber)) {
      console.log("Not Authorized");
      toast.error("Not Authorized to vote", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    const contract = await connectingWithContract();
    const response = await contract.voteKarteRaho(8, selected, panNumber);
    console.log(response);
  };

  const getVotes = async () => {
    const contract = await connectingWithContract();
    const response = await contract.differentSystemVotes(8, "Yuvraj");
    console.log(response);
  };
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div>
        {electionDetails?.length > 0 ? (
          <div>
            <h1>{electionDetails.systemName}</h1>
            <h1>
              Number of Candidates:{" "}
              {parseInt(electionDetails.numberOfCandidates._hex)}
            </h1>
            <h1>Election Held By: {electionDetails.electionHelderName}</h1>
            <h1>
              Time Till:{" "}
              {new Date(
                parseInt(electionDetails?.votingPeriod?._hex) * 1000
              ).getDate() +
                "-" +
                parseInt(
                  new Date(
                    parseInt(electionDetails?.votingPeriod?._hex) * 1000
                  ).getUTCMonth() + 1
                ) +
                "-" +
                new Date(
                  parseInt(electionDetails?.votingPeriod?._hex) * 1000
                ).getFullYear()}
            </h1>
            <div>
              <input
                placeholder="Enter PAN number"
                value={panNumber}
                onChange={(e) => {
                  setPanNumber(e.target.value);
                }}
              />
            </div>
            <div onChange={(e) => setSelected(e.target.value)}>
              {allCandidates?.map((c) => {
                return (
                  <div key={c}>
                    <input type="radio" value={c} name="candidate" />
                    {c}
                  </div>
                );
              })}
            </div>
            <button
              className="text-white bg-[#015FC7] p-2 mt-4"
              onClick={() => voteKaro()}
            >
              Vote
            </button>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div> */
  }
};

export default Election;
