import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { VotingContext } from "../context";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
function Electionfour() {
  return (
    <>
    <div>  
     <Navbar />
     <ToastContainer />
     <div className="w-full px-36 py-16 flex flex-col gap-6">
       <div className="flex flex-row items-center justify-between">
         <h1 className="text-3xl font-bold text-black">Voting panel</h1>
         <Link
           to={``}
           className="text-white bg-[#015FC7] p-2 mt-8"
         >
            View Results
         </Link>
       </div>

       <h1 className="text-2xl font-semibold"></h1>
       <div className="flex flex-row justify-between">
         <h1 className="text-black">
           Number of Candidates:
           
         </h1>

         <h1 className="text-black">
           Election Held By: 
         </h1>
         <h1 className="text-black">
           Time Till:
         </h1>
       </div>
       <div>
         <input
           placeholder="Enter PAN number"
         />
         <button>Verify Pan</button>
       </div>
       <div className="flex flex-col items-center">
               <div className="w-full grid grid-cols-12 px-6 py-4 bg-gray-50 border rounded">
                 Candidate
                 <h1 className="text-lg col-span-5 text-black"></h1>
                 <h1 className="text-lg col-span-6 text-end text-black">
                 </h1>
               </div>
       </div>
       
       <div className="flex gap-4">
       <input
               type="checkbox"
               name=""
               id=""
               value=""
             />
             <h1 className="text-black">
               I have selected as my candidate
             </h1>

             <h1 className="text-red-500 ">Please select a candidate</h1>
             </div>
             <button>Vote</button>
             </div>
   </div>

   </>
  )
}

export default Electionfour