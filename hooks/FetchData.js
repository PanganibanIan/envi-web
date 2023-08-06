// FetchData.js
import React, { useState, useEffect, useRef } from 'react'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext'
import { db } from '../firebase'

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const { currentUser } = useAuth()
  
  const createUserProfileDocument = async (userId) => {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      const templateData = {
        ECC: {
          'Date Issued': '',
          'ECC No.': '',
          Status: '',
        },
        PTO: {
          'Date Issued': '',
          'Expiry Date': '',
          'Permit No.': '',
          Status: '',
        },
        DP: {
          'Date Issued': '',
          'Expiry Date': '',
          'Permit No.': '',
          Status: '',
        },
        SMR: {
          'Next Monitoring Period - Date': '',
          'Next Monitoring Period - Status': '',
          'Prev Monitoring Period - Date': '',
          'Prev Monitoring Period - Status': '',
        },
        CMR: {
          'Next Monitoring Period - Date': '',
          'Next Monitoring Period - Status': '',
          'Prev Monitoring Period - Date': '',
          'Prev Monitoring Period - Status': '',
        },
      };

      await setDoc(docRef, templateData);
    }
  };
  
  useEffect(() => {
    async function fetchData() {
        try {
            const docRef = doc(db, 'users', currentUser.uid)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
              setData(docSnap.data())
            } else {
              await createUserProfileDocument(currentUser.uid)
              const updatedDocSnap = await getDoc(docRef);
              setData(updatedDocSnap.data());
            }
        } catch (err) {
            setError('Failed to load todos')
            console.log(err)
        } finally {
          setLoading(false)
      }
    }
    fetchData()
}, [])


  return {data, setData, loading}

};

export default FetchData;
