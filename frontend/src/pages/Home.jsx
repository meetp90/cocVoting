import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { VotingContext } from "../context";
import homeImage from "../assets/home.svg";
import axios from "axios";
const Home = () => {
  const { account, setTheAccount } = useContext(VotingContext);
  const options = {
    method: "POST",
    url: "https://pan-card-verification1.p.rapidapi.com/v3/tasks/sync/verify_with_source/ind_pan",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "618b6ec4abmsh228074d51b65ea4p1f72d8jsn8883234e6b85",
      "X-RapidAPI-Host": "pan-card-verification1.p.rapidapi.com",
    },
    data: '{"task_id":"74f4c926-250c-43ca-9c53-453e87ceacd1","group_id":"8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e","data":{"id_number":"NNDPS4508E"}}',
  };
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    console.log(account);
  }, [account]);
  return (
    <div className="bg-[#000000]">
      <Navbar />
      <div className="flex flex-row items-center">
        <div>
          <img className="w-[60vw]" src={homeImage} />
        </div>
        <div className="flex items-center justify-center w-full">
          {account.length > 0 ? (
            <div className="flex flex-col items-between">
              <h1 className="text-white text-3xl font-semibold mt-4">
                Be a part of the Decision
              </h1>
              <h1 className="text-[#015FC7] text-5xl font-bold mt-4">
                Vote Today
              </h1>
              <div className="flex flex-row justify-evenly">
                <Link
                  onClick={() => {
                    localStorage.setItem("status", "helder");
                  }}
                  to="/add-election"
                  className="text-white bg-[#015FC7] p-2 mt-4 w-[150px] text-center"
                >
                  <h1 className="text-black">Hold an Election</h1>
                </Link>
                <Link
                  onClick={() => {
                    localStorage.setItem("status", "voter");
                  }}
                  to="/elections"
                  className="text-white bg-[#015FC7] p-2 mt-4 w-[150px] text-center"
                >
                  Vote
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-between">
              <h1 className="text-white text-3xl font-semibold mt-4">
                Be a part of the Decision
              </h1>
              <h1 className="text-[#015FC7] text-5xl font-bold mt-4">
                Vote Today
              </h1>
              <button
                onClick={() => {
                  setTheAccount();
                }}
                className="text-white bg-[#015FC7] p-2 mt-4"
              >
                Connect Wallet
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full px-36 py-24 bg-white">
        <h1 className="text-5xl font-semibold -rotate-90 text-black">
          Features
        </h1>
        <div className="border-l-4 border-blue-700 ml-[-160px] flex flex-col gap-4 pl-12">
          <h1 className="text-xl font-semibold text-black">
            Secured by 256 bit encryption
          </h1>
          <h1 className="text-xl font-semibold text-black">
            Backed by ethereum based technology
          </h1>
          <h1 className="text-xl font-semibold text-black">
            Verifiable transactions
          </h1>
          <h1 className="text-xl font-semibold text-black">Easy to use</h1>
          <h1 className="text-xl font-semibold text-black ">
            Cheaper than ballot voting system
          </h1>
          <h1 className="text-xl font-semibold text-black">
            Faster voting process
          </h1>
        </div>
      </div>
      <div className="flex w-full px-36 py-24 text-white">
        <h1 className="text-5xl font-semibold -rotate-90">About</h1>
        <div className="border-l-4 border-blue-700 ml-[-80px] flex flex-col gap-4 pl-12">
          <h1 className="text-xl font-semibold w-3/4">
            An online voting system that will replace the old ballot sytem or
            paper system. Over the time we have utilized the required technology
            in every sector to improve efficiency and save the extra resources.
            But the voting system is still very expensive and requires a bigger
            workforce. The system is slower and still not completely tamper
            proof. We bring the system that is safe, reliable and solve the
            modern issues like higher reachability of the booth, crowd free
            voting, inexpensive, faster results and others.
          </h1>
        </div>
      </div>
      <div className="w-full px-36 py-24 bg-white">
        <h1 className="text-5xl font-semibold underline decoration-blue-500 mb-12 text-black">
          Follow these easy steps
        </h1>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold text-black">
            Register yourself by filling the required details
          </h1>
          <h1 className="text-xl font-semibold text-black">Signin as user</h1>
          <h1 className="text-xl font-semibold text-black">
            Go to vote option on dashboard
          </h1>
          <h1 className="text-xl font-semibold text-black">
            Give security key
          </h1>
          <h1 className="text-xl font-semibold text-black">
            Vote your candidate and submit
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
