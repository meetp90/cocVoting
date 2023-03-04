import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Election = () => {
  return (
    <Link
      to={`/requests/${"1"}`}
      className="w-full px-6 py-4 grid grid-cols-12 border rounded hover:shadow-lg mt-2"
    >
      <h1 className="text-gray-400 col-span-1">1</h1>
      <h1 className="text-xl font-semibold col-span-10 text-black">Name</h1>
      <h1 className="text-xl font-semibold col-span-1 text-end text-black">
        >
      </h1>
    </Link>
  );
};

const Requests = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="w-full px-36 py-16 flex flex-col gap-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-semibold text-black">
              Hosted Elections
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
            <h1 className="text-xl text-gray-400 col-span-11">Election</h1>
          </div>
          <Election />
          <Election />
          <Election />
        </div>
      </div>
    </div>
  );
};

export default Requests;
