import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { VotingContext } from "../context";
import homeImage from "../assets/homevoting.svg";
import Card from "./Card";
import homebg from "../assets/home-bg.jpg";
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
    <div>
      <Navbar />
      <div className="flex flex-row items-center p-20" style={{ backgroundImage: `url(${homebg})` }}>
        <div>
          <img className="w-[70vw]" src={homeImage} />
        </div>
        <div className="flex items-center justify-center w-full">
          {account.length > 0 ? (
            <div className="flex flex-col items-between">
              <h1 className="text-white text-3xl font-semibold mt-4">
               The future is in your hands,
               <br/>
                Choose wisely
              </h1>
              <h1 className="text-[#6bcadb] text-5xl font-bold mt-4">
                Vote Today.
              </h1>
              <br/>
              <div className="flex flex-row justify-around  ">
                <Link
                  onClick={() => {
                    localStorage.setItem("status", "helder");
                  }}
                  to="/add-election"
                  className="text-black bg-[#ffffff] hover:bg-[#6bcadb] font-bold p-2 mt-4 w-[180px] text-center rounded-lg"
                >
                  <h1 className="text-black font-bold ">Hold an Election</h1>
                </Link>
                <Link
                  onClick={() => {
                    localStorage.setItem("status", "voter");
                  }}
                  to="/elections"
                  className="text-black hover:bg-[#6bcadb] bg-[#ffffff] font-bold p-2 mt-4 w-[180px] text-center rounded-lg"
                >
                  Vote
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-between">
              <h1 className="text-white text-3xl font-semibold mt-4">
              Your Vote, Your Power
              </h1>
              <h1 className="text-[#6bcadb] text-5xl font-bold mt-4">
                Vote Today
              </h1>
              <br/>
              <button
                onClick={() => {
                  setTheAccount();
                }}
                className="text-black rounded-lg border-solid border-4 border-[#6bcadb] drop-shadow-md hover:bg-[#6bcadb] bg-[#F5F5F5] p-2 mt-4"
              >
                Connect Wallet
              </button>
            </div>
          )}
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
      <Card />
    </div>
  );
};

export default Home;
