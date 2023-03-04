import React from "react";
import "./HowToUse.css";
import { useState } from "react";
import Navbar from "../components/Navbar";


function HowToUse() {
  let [vote, setVote] = useState(false);
  let [election, setElection] = useState(true);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Step 1',
      description: 'If an election holder, press held and election button',
    },
    {
      id: 2,
      title: 'Step 2',
      description: 'Enter details of the election and submit!',
    },
    {
      id: 3,
      title: 'Step 3',
      description: 'Congrats! now people can vote for your election',
    },
    {
      id: 4,
      title: 'Step 4',
      description: 'You can view the results after the election is over',
    },
  ]);

  const [voter, setVoter] = useState([
    {
      id: 1,
      title: 'Step 1',
      description: 'If a voter, press vote button',
    },
    {
      id: 2,
      title: 'Step 2',
      description: 'Select which election you have to vote.',
    },
    {
      id: 3,
      title: 'Step 3',
      description: 'Verify your age by entering your PAN Number',
    },
    {
      id: 4,
      title: 'Step 4',
      description: 'If eligible caste your vote!',
    },
    {
      id: 5,
      title: 'Step 5',
      description: 'You can view the results after the election is over',
    },
  ]);

  const handleClick = () => {
    setElection(true);
    setVote(false);
    console.log(election);
  };

  const handleClick2 = () => {
    setVote(true);
    setElection(false);
  };
  // useEffect(() => {
  // 	return () => {};
  // }, [setVote, setElection]);

  return (
    <div className="bg-[#121113]">
      <Navbar />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',

          padding: '5px',

          margin: '25px',
        }}>
        <h1
          style={{
            fontWeight: '700',
            fontSize: '50px',
          }}>
          <span
            style={{
              color: '#00e78d',
            }}>
            I am{' '}
          </span>
          a/an
        </h1>

        <div className="toggle_button">
          <button
            className={'hover_button ' + (election ? 'button_selected' : ' ')}
            onClick={handleClick}>
            <span>Election Holder</span>
          </button>
          <button
            onClick={handleClick2}
            className={'hover_button ' + (vote ? 'button_selected' : ' ')}>
            <span>Voter</span>
          </button>
        </div>
      </div>

      {election ? (
        <div>
          <h1 className="etimetitle">
            <b className="text-3xl" style={{ paddingTop: '20px' }}>
              Election Holder
            </b>
          </h1>
          {events.map((event) => (
            <div className="timeline">
              {event.id % 2 === 0 ? (
                <>
                  <div className="econtainer left">
                    <div className="econtent">
                      <h1 className="timetitle">{event.title}</h1>
                      {/* <h4 className='timedate'>{event.date}</h4> */}
                      <p className="timedesc">{event.description}</p>
                      {/* <img src={imgurl2 + event.images[0]} alt='' className='etimeimg img-fluid' ></img> */}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="econtainer right">
                    <div className="econtent">
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
      ) : (
        <div>
          <h1 className="etimetitle mt-16">
            <b style={{ paddingTop: '20px' }} className="text-3xl">
              Voter
            </b>
          </h1>
          {voter.map((event) => (
            <div className="timeline">
              {event.id % 2 === 0 ? (
                <>
                  <div className="econtainer left">
                    <div className="econtent">
                      <h1 className="timetitle">{event.title}</h1>
                      {/* <h4 className='timedate'>{event.date}</h4> */}
                      <p className="timedesc">{event.description}</p>
                      {/* <img src={imgurl2 + event.images[0]} alt='' className='etimeimg img-fluid' ></img> */}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="econtainer right">
                    <div className="econtent">
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
      )}
    </div>
  );
}

export default HowToUse;
