import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { VotingContext } from "../context";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Results = () => {
  const { account, setTheAccount, connectingWithContract } =
    useContext(VotingContext);
  const [id, setId] = useState();
  const [system, setSystem] = useState();
  const [votes, setVotes] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Election Results",
      },
    },
  };
  const data = {
    labels: candidates,
    datasets: [
      {
        label: "Dataset 1",
        data: votes,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  useEffect(() => {
    fetchResults();
    console.log(votes);
  }, []);
  const fetchResults = async () => {
    setTheAccount();
    const url = window.location.href;
    const urlArray = url.split("/");
    const unique_id = urlArray[urlArray.length - 1];
    setId(unique_id);
    const contract = await connectingWithContract();
    const response = await contract.systems(unique_id);
    console.log(response);
    setSystem(response);
    const candidates = await contract.getCandidates(unique_id);
    setCandidates(candidates);
    const allVotes = await Promise.all(
      candidates.map(async (c) => {
        const response = await contract.differentSystemVotes(unique_id, c);
        return parseInt(response._hex);
      })
    );
    setVotes(allVotes);
  };
  return (
    <div>
      <Navbar />
      <div className="w-full px-36 py-16">
        <h1 className="text-3xl font-bold text-black">Poll Results:</h1>
        {votes?.length > 0 ? (
          <div>
            {votes.map((v, index) => (
              <div key={index} className="flex flex-row mt-2">
                <h1 className="text-xl text-black">{candidates[index]}: </h1>
                <h1 className="text-xl font-semibold text-black"> {v}</h1>
              </div>
            ))}
            <Bar options={options} data={data} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Results;
