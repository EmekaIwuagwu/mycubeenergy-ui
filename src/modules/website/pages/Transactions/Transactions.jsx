import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Transactions.module.css';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [error, setError] = useState('');
  const email = sessionStorage.getItem('userinfo');
  const token = sessionStorage.getItem('token');

  // Fetch transactions based on date range
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://mycubeenergy.onrender.com/api/User/transactions-by-date?email=${email}&from=${from}&to=${to}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
      
      if (!response.ok) throw new Error('Failed to fetch transactions.');

      const data = await response.json();
      setTransactions(data); // Set transactions data
    } catch (error) {
      console.error('Error fetching transactions data:', error);
      setError('Unable to fetch transactions. Please try again later.');
    }
  };

  // Currency format
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(value);
  };

  // Date format
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div>
      <Sidebar />
      <div className={styles.transactionsContainer}>
        <div className={styles.searchHeader}>
          <h4>Search Transactions</h4>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.inputLabel}>Reference Email</label>
            <input
              type="text"
              id="email"
              className={styles.dateInput}
              value={email || ''}
              readOnly
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="from-date" className={styles.inputLabel}>From Date</label>
            <input
              type="date"
              id="from-date"
              className={styles.dateInput}
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="to-date" className={styles.inputLabel}>To Date</label>
            <input
              type="date"
              id="to-date"
              className={styles.dateInput}
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.searchButtonContainer}>
          <button className={styles.searchButton} onClick={handleSearch}>
            Search
          </button>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.transactions}>
          <div className={styles.searchHeader}>
            <h4>Transactions</h4>
          </div>
          <table className={styles.tabletrans}>
            <thead>
              <tr>
                <th>Biller Name</th>
                <th>Amount</th>
                <th>Narration</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td>{transaction.transactionType}</td>
                    <td>{formatCurrency(transaction.amount)}</td>
                    <td>{transaction.description}</td>
                    <td>{formatDate(transaction.createdAt)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No transactions found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
