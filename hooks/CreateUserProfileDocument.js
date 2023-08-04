// firebase.js
import { db } from './firebase'; // Import your Firebase configuration

export const createUserProfileDocument = async (user) => {
  if (!user) return;

  const userRef = db.collection('users').doc(user.uid);
  
  // Check if the user's data already exists
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    // Create the initial user data using your template
    const templateData = {
        ECC: {
            'Date Issued': null,
            'ECC No.': '',
            Status: '',
          },
        PTO: {
            'Date Issued': null,
            'Expiry Date': null,
            'Permit No.': '',
            Status: '',
          },
        DP: {
            'Date Issued': null,
            'Expiry Date': null,
            'Permit No.': '',
            Status: '',
          },
        SMR: {
            'Next Monitoring Period': {
              Date: null,
              Status: '',
            },
            'Prev Monitoring Period': {
              Date: null,
              Status: '',
            },
        },
        CMR: {
            'Next Monitoring Period': {
              Date: null,
              Status: '',
            },
            'Prev Monitoring Period': {
              Date: null,
              Status: '',
            },
        }
        }     
    await userRef.set(templateData);
  }
};
