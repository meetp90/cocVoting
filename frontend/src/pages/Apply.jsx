import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Apply = () => {
  const [candidate, setCandidate] = useState({
    name: "",
    age: "",
    party: "",
    pan: "",
  });
  const [isVerified, setIsVerified] = useState(false);
  const verify = () => {
    const options = {
      method: "POST",
      url: "https://pan-card-verification1.p.rapidapi.com/v3/tasks/sync/verify_with_source/ind_pan",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "15b6349dcemsh9d506902b260d0fp1b6792jsna64ed0116bd9",
        "X-RapidAPI-Host": "pan-card-verification1.p.rapidapi.com",
      },
      data: `{"task_id":"74f4c926-250c-43ca-9c53-453e87ceacd1","group_id":"8e16424a-58fc-4ba4-ab20-5bc8e7c3c41e","data":{"id_number":"${candidate.pan}"}}`,
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setIsVerified(true);
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
        toast.error("Pan number not valid", {
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
  const apply = () => {
    if (!isVerified) {
      toast.error("Please verify your PAN number", {
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
    // var data = new FormData();
    // data.append("name", user.name);
    // data.append("email", user.email);
    // data.append("phone_no", "+91" + user.number);
    // data.append("password", user.password);

    // var config = {
    //   method: "post",
    //   url:
    //     "http://vismayvora.pythonanywhere.com/account/" +
    //     (role ? "user" : "tour_operator") +
    //     "_register/",
    //   data: data,
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //     toast.success("User registered successfully", {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    //     setTimeout(() => {
    //       navigate('/')
    //     }, 2000);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     toast.error("User already exists", {
    //       position: "top-right",
    //       autoClose: 5000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    //   });
  };
  return (
    <div>
      <Navbar />
      <div className="w-full px-36 py-16 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-black">Election Name</h1>
          {/* {localStorage.getItem("status")?.length > 0 ? (
            localStorage.getItem("status") === "helder" ? (
              <Link to="/add-election">
                <button className="text-white text-lg  font-semibold uppercase rounded-full px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-800 hover:to-cyan-600">
                  + Add Election
                </button>
              </Link>
            ) : null
          ) : null} */}
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-6">
            <div className="">
              <h1 className="text-gray-800 font-semibold mb-3">
                Enter PAN number
              </h1>
              <input
                type="text"
                className="w-full focus:outline-none px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-500 font-semibold"
                placeholder="AAAAA1234A"
                value={candidate.pan}
                onChange={(e) =>
                  setCandidate({ ...candidate, pan: e.target.value })
                }
              />
            </div>
            <div className="flex items-end">
              <button
                disabled={isVerified}
                onClick={() => verify()}
                className={`w-full focus:outline-none px-4 py-3 ${
                  isVerified
                    ? "bg-gray-400"
                    : "bg-gradient-to-r from-cyan-400 to-blue-800 hover:to-cyan-600"
                } text-white rounded-lg text-sm font-semibold`}
              >
                {isVerified ? "Verified" : "Verify"}
              </button>
            </div>
            <div className="col-span-2">
              <h1 className="text-gray-800 font-semibold mb-3">Enter Name</h1>
              <input
                type="text"
                className="w-full focus:outline-none px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-500 font-semibold"
                placeholder="Dishant Zaveri"
                value={candidate.name}
                onChange={(e) =>
                  setCandidate({ ...candidate, name: e.target.value })
                }
              />
            </div>
            <div className="col-span-2">
              <h1 className="text-gray-800 font-semibold mb-3">
                Enter Party Name
              </h1>
              <input
                type="text"
                className="w-full focus:outline-none px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-500 font-semibold"
                placeholder="BJP"
                value={candidate.party}
                onChange={(e) =>
                  setCandidate({ ...candidate, party: e.target.value })
                }
              />
            </div>
            <div className="col-span-2">
              <h1 className="text-gray-800 font-semibold mb-3">Enter Age</h1>
              <input
                type="text"
                className="w-full focus:outline-none px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-500 font-semibold"
                placeholder="20"
                value={candidate.age}
                onChange={(e) =>
                  setCandidate({ ...candidate, age: e.target.value })
                }
              />
            </div>
          </div>
          <button
            onClick={() => apply()}
            className="w-full focus:outline-none px-4 py-3 bg-gradient-to-r from-cyan-400 to-blue-800 hover:to-cyan-600 text-white rounded-lg text-sm font-semibold mt-6"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apply;
