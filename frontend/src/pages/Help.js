import React, { useEffect, useState } from 'react';
import { doc, onSnapshot, collection, query, where } from 'firebase/firestore';
import db from './firebase';
import { Video } from './Video';
import './Help.css';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
  listAll,
} from 'firebase/storage';
import { storage } from './firebase';
import { v4 } from 'uuid';
const videolistRef = ref(storage, 'videos/');

export const Help = () => {
  const [reels, setReels] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const q = query(collection(db, 'reels'));
    onSnapshot(q, (snapshot) => {
      setReels(snapshot.docs.map((doc) => doc.data()));
      console.log(snapshot.docs);
    });
    // console.log(reels);
  }, []);

  return (
    <>
      <div className="trauma">
        {/* <h1>Lets build A ig reels clone</h1> */}
        <div
          style={{ margin: '20px', paddingTop: '20px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '4em' }}>CAMPAIGNS</h1>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
          maxWidth: '80%',
          margin: 'auto',
        }}>
        <div style={{ maxWidth: '50%' }}>
          <h2 style={{ fontSize: '3em' }}>
            Deliver your message with{' '}
            <span
              style={{
                fontSize: '1.5em',
                fontWeight: '600',
                color: '#00e78d ',
              }}>
              POWER.
            </span>{' '}
            <br></br> Show your strengths and{' '}
            <span
              style={{ fontSize: '1em', fontWeight: '600', marginTop: '10px' }}>
              empower the future.
            </span>
          </h2>
        </div>
        <div className="app_videos">
          {reels.map(({ url }) => (
            <Video url={url} />
          ))}
        </div>
      </div>
    </>
  );
};
