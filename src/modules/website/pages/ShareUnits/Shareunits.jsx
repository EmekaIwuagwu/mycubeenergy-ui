import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Shareunits.module.css';
import vector from './Vector.png';  // Adjust the path to your vector icon
import axios from 'axios';

const Shareunits = () => {
  const [originAccountId, setOriginAccountId] = useState('');
  const [destinationAccountId, setDestinationAccountId] = useState('');
  const [amount, setAmount] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const token = sessionStorage.getItem('token'); // Get token from session storage

  const handleShareUnits = async () => {
    if (!originAccountId || !destinationAccountId || !amount) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await axios.post(
        'https://mycubeenergy.onrender.com/api/User/share-units',
        {
          originAccountId,
          destinationAccountId,
          amount: parseFloat(amount),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      
      setSuccessMessage('Units shared successfully!');
      setShowSuccess(true);

      // Clear input fields after successful share
      setOriginAccountId('');
      setDestinationAccountId('');
      setAmount('');

      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Error sharing units:', error);
      alert('Failed to share units');
    }
  };

  return (
    <div>
      <Sidebar />
      <div className={styles.shareunits}>
        <div className={styles.textHeaderTopUp}>
          <h4>Share Units</h4>
        </div>

        <div className={styles.dropdownContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="originAccountId">Origin Account Id</label>
            <input
              type="text"
              id="originAccountId"
              className={styles.dateInput}
              placeholder="Origin Account Id"
              value={originAccountId}
              onChange={(e) => setOriginAccountId(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="destinationAccountId">Destination Account ID</label>
            <input
              type="text"
              id="destinationAccountId"
              className={styles.dateInput}
              placeholder="Destination Account ID"
              value={destinationAccountId}
              onChange={(e) => setDestinationAccountId(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              className={styles.dateInput}
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <button className={styles.btnshare} onClick={handleShareUnits}>Share</button>

        {showSuccess && (
          <div className={styles.successMessage}>
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shareunits;
