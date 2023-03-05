import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div
      className="w-full flex px-36 py-4 justify-between items-center
      bg-[#121113]">
      <div className="flex">
        <h1 className="text-2xl font-bold text-white">DecentVote.</h1>
      </div>
      <div className="flex gap-10 items-center">
        <Link to="/">
          <h1 className="text-gray-400 font-semibold hover:text-cyan-600">
            Home
          </h1>
        </Link>
        <Link to="/elections">
          <h1 className="text-gray-400 font-semibold hover:text-cyan-600">
            Elections
          </h1>
        </Link>
        <Link to="/contact">
          <h1 className="text-gray-400 font-semibold hover:text-cyan-600">
            Campaign
          </h1>
        </Link>
        <Link to="/how-to-use">
          <h1 className="text-gray-400 font-semibold hover:text-cyan-600">
            How To Use
          </h1>
        </Link>
        <Link to="/news">
          <h1 className="text-gray-400 font-semibold hover:text-cyan-600">
            News
          </h1>
        </Link>
        <Link to="/help">
          <h1 className="text-gray-400 font-semibold hover:text-cyan-600">
            Help
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
