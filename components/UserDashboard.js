import FetchData from '@/hooks/FetchData';
import React, { useState, useEffect } from 'react';

function UserDashboard() {
// const [loading, setLoading] = useState(true);
const {data, loading} = FetchData()

const formatDate = (timestamp) => {
  const date = new Date(timestamp.seconds * 1000); // Convert from seconds to milliseconds
  return date.toLocaleDateString('en-US');
};

// useEffect(() => {
//   if (data) {
//     setLoading(false); // Set loading to false when data is available
//   }
// }, [data]);

if (loading) {
  return <div className='flex-1 grid place-items-center'><i className="fa-solid fa-spinner animate-spin text-6xl"></i></div>;
}

    return (
        <div className='w-full max-w-[65ch] mx-auto flex flex-col gap-3 sm:gap-5'>
      <div>
        <h3>ECC</h3>
        <p>Date Issued: {formatDate(data.ECC['Date Issued'])}</p>
        <p>ECC No.: {data.ECC['ECC No. ']}</p>
        <p>Status: {data.ECC.Status}</p>
      </div>
      <div>
        <h3>PTO</h3>
        <p>Date Issued: {formatDate(data.PTO['Date Issued'])}</p>
        <p>Expiry Date: {formatDate(data.PTO['Expiry Date'])}</p>
        <p>Permit No.: {data.PTO['Permit No.']}</p>
        <p>Status: {data.PTO['Status']}</p>
      </div>
      <div>
        <h3>DP</h3>
        <p>Date Issued: {formatDate(data.DP['Date Issued'])}</p>
        <p>Expiry Date: {formatDate(data.DP['Expiry Date'])}</p>
        <p>Permit No.: {data.DP['Permit No.']}</p>
        <p>Status: {data.DP['Status']}</p>
      </div>
      <div>
        <h3>SMR</h3>
        <p>Next Monitoring Period: {formatDate(data.SMR['Next Monitoring Period'].Date)}</p>
        <p>Status: {data.SMR['Next Monitoring Period'].Status}</p>
        <p>Previous Monitoring Period: {formatDate(data.SMR['Prev Monitoring Period'].Date)}</p>
        <p>Status: {data.SMR['Prev Monitoring Period'].Status}</p>
      </div>
      <div>
        <h3>CMR</h3>
        <p>Next Monitoring Period: {formatDate(data.CMR['Next Monitoring Period'].Date)}</p>
        <p>Status: {data.CMR['Next Monitoring Period'].Status}</p>
        <p>Previous Monitoring Period: {formatDate(data.CMR['Prev Monitoring Period'].Date)}</p>
        <p>Status: {data.CMR['Prev Monitoring Period'].Status}</p>
      </div>
      
        </div>
    )
}

export default UserDashboard;