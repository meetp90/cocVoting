import React, { useEffect, useState } from 'react';
import { doc, onSnapshot, collection, query, where } from 'firebase/firestore';
import db from './firebase';
import { Video } from './Video';
import './HelpMe.css';
import Faq from 'react-faq-component';
import Navbar from '../components/Navbar';

const data = {
  title: 'FAQS',
  rows: [
    {
      title: 'What is the app about?',
      content: `A blockchainbased
      platform for decentralized governance that enables stakeholders to vote and
      make decisions in a secure and transparent manner can address these issues and
      promote trust and accountability in the voting process.`,
    },
    {
      title: 'Is it free?',
      content:
        'Our services will be free for government services and government use while for personal and businness plans we actively have a freemium model that will be ',
    },
    {
      title: 'Where is blockchain being used in the app?',
      content: `Blockchain here is used to  `,
    },
  ],
};

const styles = {
  bgColor: '#121113',
  titleTextColor: '#6bcadb',
  rowTitleColor: '#6bcadb',
  rowContentColor: '#6bcadb',
  arrowColor: '#6bcadb',
  rowContentPaddingRight: '150px',
  rowContentPaddingLeft: '10px',
  rowContentPaddingTop: '10px',
  rowContentPaddingBottom: '10px',
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

export const HelpMe = () => {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'learn'));
    onSnapshot(q, (snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()));
      console.log(snapshot.docs);
    });
    // console.log(reels);
  }, []);

  return (
    <div style={{ backgroundColor: '#121113' }}>
      <Navbar />
      <div className="card" style={{ backgroundColor: '#121113' }}>
        {/* <h1>Lets build A ig reels clone</h1> */}
        <div
          style={{ margin: '20px', paddingTop: '20px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '4em' }}>Quick overview </h1>
          <p style={{ color: 'white' }}>
            To give you an idea of what the app is about.
          </p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#121113',
          height: '100vh',
        }}>
        <div className="videos">
          {reels.map(({ url }) => (
            <Video url={url} />
          ))}
        </div>
      </div>
      <div style={{ width: '80%', margin: '-6em auto' }}>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
};
