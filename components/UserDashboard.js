import { useAuth } from '@/context/AuthContext';
import FetchData from '@/hooks/FetchData';
import React, { useState, useEffect } from 'react';
import DataCard from './DataCard';
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

function UserDashboard() {
  const { data, setData, loading} = FetchData();
  const [activeTab, setActiveTab] = useState('ECC');
  const { currentUser } = useAuth()
  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState('')
  const [edittedValue, setEdittedValue] = useState('')

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  async function handleEditData() {
    if (!edittedValue) { return }
    const newKey = edit
    const newData = { ...data, [activeTab]: { ...data[activeTab], [newKey]: edittedValue } };
    setData(newData)
    const userRef = doc(db, 'users', currentUser.uid)
    await setDoc(userRef, {
       [activeTab]: {
            [newKey]: edittedValue
        }
    }, { merge: true })
    setEdit(null)
    setEdittedValue('')
}

function handleAddEdit(dataKey) {
  return () => {
      setEdit(dataKey)
      setEdittedValue(data[activeTab][dataKey])
  }
}

  return (
    <div className='fixed w-screen flex flex-col p-2'>
      <div className='flex items-center justify-around text-lg sm:text-xl'>
        <button
          className={`px-4 py-2 flex-grow font-bold focus:outline-none hover:text-3xl transition-all ${activeTab === 'ECC' ? 'bg-darkBG text-lightBG text-4xl rounded-lg' : 'bg-lightBG'}`}
          onClick={() => handleTabChange('ECC')}
        >
          ECC
        </button>
        <button
          className={`px-4 py-2 flex-grow font-bold focus:outline-none hover:text-3xl transition-all ${activeTab === 'PTO' ? 'bg-darkBG text-lightBG text-4xl rounded-lg' : 'bg-lightBG'}`}
          onClick={() => handleTabChange('PTO')}
        >
          PTO
        </button>
        <button
          className={`px-4 py-2 flex-grow font-bold focus:outline-none hover:text-3xl transition-all ${activeTab === 'DP' ? 'bg-darkBG text-lightBG text-4xl rounded-lg' : 'bg-lightBG'}`}
          onClick={() => handleTabChange('DP')}
        >
          DP
        </button>
        <button
          className={`px-4 py-2 flex-grow font-bold focus:outline-none hover:text-3xl transition-all ${activeTab === 'SMR' ? 'bg-darkBG text-lightBG text-4xl rounded-lg' : 'bg-lightBG'}`}
          onClick={() => handleTabChange('SMR')}
        >
          SMR
        </button>
        <button
          className={`px-4 py-2 flex-grow font-bold focus:outline-none hover:text-3xl transition-all ${activeTab === 'CMR' ? 'bg-darkBG text-lightBG text-4xl rounded-lg' : 'bg-lightBG'}`}
          onClick={() => handleTabChange('CMR')}
        >
          CMR
        </button>
      </div>
      
      {(loading) && (<div className='flex-1 grid place-items-center'><i class="fa-solid fa-spinner fa-spin-pulse text-6xl"></i></div>)}
      {(!loading) && (
       <div className='flex-1 flex flex-col justify-center items-center gap-2 sm:gap-4 text-lg sm:text-2xl p-10'>
       {activeTab === 'ECC' && (
       <>
       <h3 className='font-semibold text-xl sm:text-3xl'>Environmental Compliance Certificate</h3>
            <DataCard
            dataKey='ECC No.'
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
           <p><b>ECC No.:</b> {data.ECC['ECC No.']}</p>
           </DataCard>
           
           <DataCard
           dataKey = 'Status'
           edit={edit}
           handleAddEdit={handleAddEdit}
           edittedValue={edittedValue}
           setEdittedValue={setEdittedValue}
           handleEditData={handleEditData}
         >
         <p><b>Status:</b> {data.ECC.Status}</p> 

         </DataCard>
           
           <DataCard
           dataKey='Date Issued'
           edit={edit}
           handleAddEdit={handleAddEdit}
           edittedValue={edittedValue}
           setEdittedValue={setEdittedValue}
           handleEditData={handleEditData}
         >
         <p><b>Date Issued:</b> {data.ECC['Date Issued']}</p>

         </DataCard>
         
         </>
             
       )}
 
       {activeTab === 'PTO' && (
         <>
           <h3 className='font-semibold text-xl sm:text-3xl'>Permit to Operate</h3>
           <DataCard
            dataKey='Permit No.'
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
           <p><b>Permit No.:</b> {data.PTO['Permit No.']}</p>
           </DataCard>
           
           <DataCard
            dataKey='Status'
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
           <p><b>Status:</b> {data.PTO.Status}</p>
           </DataCard>
           <DataCard
            dataKey='Date Issued'
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
           <p><b>Date Issued:</b> {data.PTO['Date Issued']}</p>
           </DataCard>
           
           <DataCard
            dataKey='Expiry Date'
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
           <p><b>Expiry Date:</b> {data.PTO['Expiry Date']}</p>
           </DataCard>
          
         </>
       )}
       
       {activeTab === 'DP' && (
         <>
          <h3 className='font-semibold text-xl sm:text-3xl'>Discharge Permit</h3>
          
          <DataCard
            dataKey='Permit No.'
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
           <p><b>Permit No.:</b> {data.DP['Permit No.']}</p>
           </DataCard>
           
           <DataCard
            dataKey='Status'
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
           <p><b>Status:</b> {data.DP.Status}</p>
           </DataCard>
          
          <DataCard
            dataKey='Date Issued'
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
           <p><b>Date Issued:</b> {data.DP['Date Issued']}</p>
           </DataCard>
           
           <DataCard
            dataKey='Expiry Date'
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
           <p><b>Expiry Date:</b> {data.DP['Expiry Date']}</p>
           </DataCard>
           
         </>
       )}
       
       {activeTab === 'SMR' && (
         <>
           <h3 className='font-semibold text-xl sm:text-3xl'>Self Monitoring Report</h3>
           
           <DataCard
            dataKey='Next Monitoring Period - Date'
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
           <p><b>Next Monitoring Period:</b> {data.SMR['Next Monitoring Period - Date']}</p>
           </DataCard>
           <DataCard
            dataKey="Next Monitoring Period - Status"
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
           <p><b>Status:</b> {data.SMR['Next Monitoring Period - Status']}</p>
           </DataCard>
           
           <p> </p>
           <p> </p>
           
           <DataCard
            dataKey='Prev Monitoring Period - Date'
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
           <p><b>Previous Monitoring Period:</b> {data.SMR['Prev Monitoring Period - Date']}</p>
           </DataCard>
           <DataCard
            dataKey='Prev Monitoring Period - Status'
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
          <p><b>Status:</b> {data.SMR['Prev Monitoring Period - Status']}</p>
           </DataCard>
          
         </>
       )}
       
       {activeTab === 'CMR' && (
         <>
           <h3 className='font-semibold text-xl sm:text-3xl'>Compliance Monitoring Report</h3>
           
           <DataCard
            dataKey='Next Monitoring Period - Date'
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
           <p><b>Next Monitoring Period:</b> {data.CMR['Next Monitoring Period - Date']}</p>
           </DataCard>
           
           <DataCard
            dataKey='Next Monitoring Period - Status'
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
           <p><b>Status:</b> {data.CMR['Next Monitoring Period - Status']}</p>
           </DataCard>
           
           <p> </p>
           <p> </p>
           
           <DataCard
            dataKey='Prev Monitoring Period - Date'
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
           <p><b>Previous Monitoring Period:</b> {data.CMR['Prev Monitoring Period - Date']}</p>
           </DataCard>
           
           <DataCard
            dataKey='Prev Monitoring Period - Status'
            edit={edit}
            handleAddEdit={handleAddEdit}
            edittedValue={edittedValue}
            setEdittedValue={setEdittedValue}
            handleEditData={handleEditData}
          >
           <p><b>Status:</b> {data.CMR['Prev Monitoring Period - Status']}</p>
           </DataCard>
           
         </>
       )}
       </div>
      )}
    </div>
  );
}

export default UserDashboard;
