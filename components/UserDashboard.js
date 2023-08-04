import FetchData from '@/hooks/FetchData';
import React, { useState, useEffect } from 'react';

function UserDashboard() {
  const { data, loading } = FetchData();
  const [activeTab, setActiveTab] = useState('ECC');

  const formatDate = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000); // Convert from seconds to milliseconds
    return date.toLocaleDateString('en-US');
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (loading) {
    return <div className='flex-1 grid place-items-center'><i className="fa-solid fa-spinner animate-spin text-6xl"></i></div>;
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='flex gap-2'>
        <button
          className={`px-4 py-2 rounded-lg font-bold focus:outline-none ${activeTab === 'ECC' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange('ECC')}
        >
          ECC
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-bold focus:outline-none ${activeTab === 'PTO' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange('PTO')}
        >
          PTO
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-bold focus:outline-none ${activeTab === 'DP' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange('DP')}
        >
          DP
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-bold focus:outline-none ${activeTab === 'SMR' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange('SMR')}
        >
          SMR
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-bold focus:outline-none ${activeTab === 'CMR' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabChange('CMR')}
        >
          CMR
        </button>
      </div>

      <div className='flex flex-col items-center'>
      {activeTab === 'ECC' && (
        <div>
          <h3 className='font-semibold text-lg'>Environmental Compliance Certificate</h3>
          <p>Date Issued: {formatDate(data.ECC['Date Issued'])}</p>
          <p>ECC No.: {data.ECC['ECC No. ']}</p>
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
    </div>
  );
}

export default UserDashboard;
