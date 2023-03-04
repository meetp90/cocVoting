import React from "react";
import "./HowToUse.css";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";

function HowToUse() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Step 1",
      description: "If an election holder, press held and election button",
    },
    {
      id: 2,
      title: "Step 2",
      description: "Enter details of the election and submit!",
    },
    {
      id: 3,
      title: "Step 3",
      description: "Congrats! now people can vote for your election",
    },
    {
      id: 4,
      title: "Step 4",
      description: "You can view the results after the election is over",
    },
  ]);

  const [voter, setVoter] = useState([
    {
      id: 1,
      title: "Step 1",
      description: "If a voter, press vote button",
    },
    {
      id: 2,
      title: "Step 2",
      description: "Select which election you have to vote.",
    },
    {
      id: 3,
      title: "Step 3",
      description: "Verify your age by entering your PAN Number",
    },
    {
      id: 4,
      title: "Step 4",
      description: "If eligible caste your vote!",
    },
    {
      id: 5,
      title: "Step 5",
      description: "You can view the results after the election is over",
    },
  ]);

  return (
    <div className="bg-[#040404]">
      <Navbar />
      <div>
        <h1 className="etimetitle">
          <b className="text-3xl">For Election Holder</b>
        </h1>
        {events.map((event) => (
          <div class="timeline">
            {event.id % 2 === 0 ? (
              <>
                <div class="econtainer left">
                  <div class="econtent">
                    <h1 className="timetitle">{event.title}</h1>
                    {/* <h4 className='timedate'>{event.date}</h4> */}
                    <p className="timedesc">{event.description}</p>
                    {/* <img src={imgurl2 + event.images[0]} alt='' className='etimeimg img-fluid' ></img> */}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div class="econtainer right">
                  <div class="econtent">
                    <h1 className="timetitle">{event.title}</h1>
                    {/* <h4 className='timedate'>{event.date}</h4> */}
                    <p className="timedesc">{event.description}</p>
                    {/* <img src={imgurl2 + event.images[0]} alt='' className='etimeimg img-fluid' ></img> */}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <div>
        <h1 className="etimetitle mt-16">
          <b className="text-3xl">For Voter</b>
        </h1>
        {voter.map((event) => (
          <div class="timeline">
            {event.id % 2 === 0 ? (
              <>
                <div class="econtainer left">
                  <div class="econtent">
                    <h1 className="timetitle">{event.title}</h1>
                    {/* <h4 className='timedate'>{event.date}</h4> */}
                    <p className="timedesc">{event.description}</p>
                    {/* <img src={imgurl2 + event.images[0]} alt='' className='etimeimg img-fluid' ></img> */}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div class="econtainer right">
                  <div class="econtent">
                    <h1 className="timetitle">{event.title}</h1>
                    {/* <h4 className='timedate'>{event.date}</h4> */}
                    <p className="timedesc">{event.description}</p>
                    {/* <img src={imgurl2 + event.images[0]} alt='' className='etimeimg img-fluid' ></img> */}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowToUse;
