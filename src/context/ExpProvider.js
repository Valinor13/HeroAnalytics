import React, { useState, useContext, useEffect } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import app from '../firebase';

const db = getFirestore(app);

const ExpContext = React.createContext();

export function useExp() {
  return useContext(ExpContext);
}

export function ExpProvider({ children }) {
  const [userExperiences, setUserExperiences] = useState([]);
  const [firestoreError, setFirestoreError] = useState();
  const expName = 'testExperience1';

  async function getExperiences() {
    if (userExperiences.length === 0) {
      try {
        const querySnapshot = await getDocs(collection(db, expName));
        querySnapshot.forEach((doc) => {
          setUserExperiences([...userExperiences, doc.data()]);
        });
      } catch (e) {
        console.log(e);
        setFirestoreError(e.message);
      }
    }
  }

  useEffect(() => {
    getExperiences();
  });

  const value = { expName, userExperiences, firestoreError };

  return <ExpContext.Provider value={value}>{children}</ExpContext.Provider>;
}
