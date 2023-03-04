import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Request = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="w-full px-36 py-16 flex flex-col gap-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-semibold text-black">
              Candidates Selected
            </h1>
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
            <h1 className="text-xl text-gray-400 col-span-2">Name</h1>
            <h1 className="text-xl text-gray-400 col-span-2">Party</h1>
            <h1 className="text-xl text-gray-400 col-span-2">Age</h1>
            <h1 className="text-xl text-gray-400 col-span-3">PAN Number</h1>
            <h1 className="text-xl text-gray-400 col-span-2 text-center">Action</h1>
          </div>
          <div className="w-full px-6 py-4 grid grid-cols-12 border rounded hover:shadow-lg mt-2">
            <h1 className="text-gray-400 col-span-1 flex items-center">1</h1>
            <h1 className="text-xl font-semibold col-span-2 text-black flex items-center">
              Dishant
            </h1>
            <h1 className="text-xl font-semibold col-span-2 text-black flex items-center">
              AAP
            </h1>
            <h1 className="text-xl font-semibold col-span-2 text-black flex items-center">
              50
            </h1>
            <h1 className="text-xl font-semibold col-span-3 text-black flex items-center">
              AAAAA1234A
            </h1>
            <button className="col-span-2 text-white text-lg font-semibold uppercase rounded-full px-6 py-2 bg-red-600">
              Remove
            </button>
          </div>
          <div className="flex justify-between items-center my-4">
            <h1 className="text-3xl font-semibold text-black">
              Candidates Request
            </h1>
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
            <h1 className="text-xl text-gray-400 col-span-2">Name</h1>
            <h1 className="text-xl text-gray-400 col-span-2">Party</h1>
            <h1 className="text-xl text-gray-400 col-span-2">Age</h1>
            <h1 className="text-xl text-gray-400 col-span-2">PAN Number</h1>
            <h1 className="text-xl text-gray-400 col-span-3 text-center">Actions</h1>
          </div>
          <div className="w-full px-6 py-4 grid grid-cols-12 border rounded hover:shadow-lg mt-2">
            <h1 className="text-gray-400 col-span-1 flex items-center">1</h1>
            <h1 className="text-xl font-semibold col-span-2 text-black flex items-center">
              Dishant
            </h1>
            <h1 className="text-xl font-semibold col-span-2 text-black flex items-center">
              AAP
            </h1>
            <h1 className="text-xl font-semibold col-span-2 text-black flex items-center">
              50
            </h1>
            <h1 className="text-xl font-semibold col-span-2 text-black flex items-center">
              AAAAA1234A
            </h1>
            <div className="flex col-span-3 justify-evenly gap-4">
              <button className="text-white text-lg  font-semibold uppercase rounded-full px-6 py-2 bg-green-600">
                Approve
              </button>
              <button className="text-white text-lg  font-semibold uppercase rounded-full px-6 py-2 bg-red-600">
                Reject
              </button>
            </div>
          </div>
          <div className="w-full px-6 py-4 grid grid-cols-12 border rounded hover:shadow-lg mt-2">
            <h1 className="text-gray-400 col-span-1 flex items-center">1</h1>
            <h1 className="text-xl font-semibold col-span-2 text-black flex items-center">
              Dishant
            </h1>
            <h1 className="text-xl font-semibold col-span-2 text-black flex items-center">
              AAP
            </h1>
            <h1 className="text-xl font-semibold col-span-2 text-black flex items-center">
              50
            </h1>
            <h1 className="text-xl font-semibold col-span-2 text-black flex items-center">
              AAAAA1234A
            </h1>
            <div className="flex col-span-3 justify-evenly gap-4">
              <button className="text-white text-lg  font-semibold uppercase rounded-full px-6 py-2 bg-green-600">
                Approve
              </button>
              <button className="text-white text-lg  font-semibold uppercase rounded-full px-6 py-2 bg-red-600">
                Reject
              </button>
            </div>
          </div>
          <div className="w-full px-6 py-4 grid grid-cols-12 border rounded hover:shadow-lg mt-2">
            <h1 className="text-gray-400 col-span-1 flex items-center">1</h1>
            <h1 className="text-xl font-semibold col-span-2 text-black flex items-center">
              Dishant
            </h1>
            <h1 className="text-xl font-semibold col-span-2 text-black flex items-center">
              AAP
            </h1>
            <h1 className="text-xl font-semibold col-span-2 text-black flex items-center">
              50
            </h1>
            <h1 className="text-xl font-semibold col-span-2 text-black flex items-center">
              AAAAA1234A
            </h1>
            <div className="flex col-span-3 justify-evenly gap-4">
              <button className="text-white text-lg  font-semibold uppercase rounded-full px-6 py-2 bg-green-600">
                Approve
              </button>
              <button className="text-white text-lg  font-semibold uppercase rounded-full px-6 py-2 bg-red-600">
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
