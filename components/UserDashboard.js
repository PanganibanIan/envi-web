import { useAuth } from '@/context/AuthContext';
import FetchData from '@/hooks/FetchData';
import React, { useState, useEffect } from 'react';

function UserDashboard() {
  const { data, loading } = FetchData();
  const [activeTab, setActiveTab] = useState('ECC');
  const { currentUser } = useAuth()


  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString('en-US');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
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
       <div className='flex flex-col items-center'>
       {activeTab === 'ECC' && (
         <div>
           <h3 className='font-semibold text-lg'>Environmental Compliance Certificate</h3>
           <p>Date Issued: {formatDate(data.ECC['Date Issued'])}</p>
           <p>ECC No.: {data.ECC['ECC No.']}</p>
           <p>Status: {data.ECC.Status}</p>
         </div>
       )}
 
       {activeTab === 'PTO' && (
         <div>
           <h3 className='font-semibold text-lg'>Permit to Operate</h3>
           <p>Date Issued: {formatDate(data.PTO['Date Issued'])}</p>
           <p>Expiry Date: {formatDate(data.PTO['Expiry Date'])}</p>
           <p>Permit No.: {data.PTO['Permit No.']}</p>
           <p>Status: {data.PTO.Status}</p>
         </div>
       )}
       
       {activeTab === 'DP' && (
         <div>
           <h3 className='font-semibold text-lg'>Discharge Permit</h3>
           <p>Date Issued: {formatDate(data.DP['Date Issued'])}</p>
           <p>Expiry Date: {formatDate(data.DP['Expiry Date'])}</p>
           <p>Permit No.: {data.DP['Permit No.']}</p>
           <p>Status: {data.DP.Status}</p>
         </div>
       )}
       
       {activeTab === 'SMR' && (
         <div>
           <h3 className='font-semibold text-lg'>Self Monitoring Report</h3>
           <p>Next Monitoring Period: {formatDate(data.SMR['Next Monitoring Period'].Date)}</p>
           <p>Status: {data.SMR['Next Monitoring Period'].Status}</p>
           <p>Previous Monitoring Period: {formatDate(data.SMR['Prev Monitoring Period'].Date)}</p>
           <p>Status: {data.SMR['Prev Monitoring Period'].Status}</p>
         </div>
       )}
       
       {activeTab === 'CMR' && (
         <div>
           <h3 className='font-semibold text-lg'>Compliance Monitoring Report</h3>
           <p>Next Monitoring Period: {formatDate(data.CMR['Next Monitoring Period'].Date)}</p>
           <p>Status: {data.CMR['Next Monitoring Period'].Status}</p>
           <p>Previous Monitoring Period: {formatDate(data.CMR['Prev Monitoring Period'].Date)}</p>
           <p>Status: {data.CMR['Prev Monitoring Period'].Status}</p>
         </div>
       )}
       </div>
      )}
    </div>
  );
}

export default UserDashboard;
