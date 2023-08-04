// FetchData.js
import React, { useState, useEffect, useRef } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext'
import { db } from '../firebase'

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const { currentUser } = useAuth()
  
  useEffect(() => {
    async function fetchData() {
        try {
            const docRef = doc(db, 'users', currentUser.uid)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                setData(docSnap.data())
                // setTodos('todos' in docSnap.data() ? docSnap.data().todos : {})
            } else {
                setData({})
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


  return {data, loading}
    // <div>
    //   <h2>Fetched Data from Firestore</h2>
    //   <pre>{JSON.stringify(data, null, 2)}</pre>
    // </div>

};

export default FetchData;
