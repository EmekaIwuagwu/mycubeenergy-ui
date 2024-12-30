import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Dashboard.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [cashWalletBalance, setCashWalletBalance] = useState(null); // New state for cash wallet balance
    const [transactions, setTransactions] = useState([]); // New state for transactions
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const transactionsPerPage = 5; // Transactions per page

    const email = sessionStorage.getItem('userinfo');
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        // Fetch User Data (profile and balance)
        const fetchUserData = async () => {
            try {
                const response = await fetch(`https://mycubeenergy.onrender.com/api/User/Kyc/profile?email=${email}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();
                setUserData(data.user); // Set user data
                setCashWalletBalance(data.cashWalletBalance); // Set cash wallet balance separately
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        // Fetch Transactions Data
        const fetchTransactions = async () => {
            try {
                const response = await fetch(`https://mycubeenergy.onrender.com/api/User/transactions?email=${email}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();
                setTransactions(data); // Set transactions data
            } catch (error) {
                console.error('Error fetching transactions data:', error);
            }
        };

        if (email && token) {
            fetchUserData();
            fetchTransactions();
        }
    }, [email, token]);

    // Function to format number as currency (e.g., NGN)
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
        }).format(value);
    };

    // Function to format date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString();
    };

    // Pagination logic
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
    const totalPages = Math.ceil(transactions.length / transactionsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <Sidebar />
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardHeader}>
                    <h4>Dashboard</h4>
                    <p>Welcome Back {userData ? userData.fullname : 'User'}!</p> {/* Display the user's fullname */}
                </div>

                <div className={styles.dashboardCards}>
                    <div className={styles.dashboardCard}>
                        <h4>Units Balance</h4>
                        <p>{userData ? userData.unitBalance : 'Loading...'}</p>
                        <div className={styles.flowchartPlaceholder}>
                            Flowchart or Image here
                        </div>
                    </div>
                    <div className={styles.dashboardCard}>
                        <h4>Wallet Balance</h4>
                        {/* Display cash wallet balance formatted as currency */}
                        <p>{cashWalletBalance !== null ? formatCurrency(cashWalletBalance) : 'Loading...'}</p>
                        <div className={styles.flowchartPlaceholder}>
                            Flowchart or Image here
                        </div>
                    </div>
                    <div className={styles.dashboardCard}>
                        <h4>Usage Stats</h4>
                        <p>Stats content here</p>
                        <div className={styles.flowchartPlaceholder}>
                            Flowchart or Image here
                        </div>
                    </div>
                </div>

                <div className={styles.transactionsSection}>
                    <div className={styles.transactionsHeader}>
                        <h4>Transactions</h4>
                    </div>
                    <div className={styles.transactionsTableWrapper}>
                        <table className={styles.transactionsTable}>
                            <thead>
                                <tr>
                                    <th>Biller Name</th>
                                    <th>Amount</th>
                                    <th>Narration</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentTransactions.length > 0 ? (
                                    currentTransactions.map((transaction) => (
                                        <tr key={transaction.id}>
                                            <td>MyCube</td>
                                            <td>{formatCurrency(transaction.amount)}</td>
                                            <td>{transaction.description}</td>
                                            <td>{formatDate(transaction.createdAt)}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4">No transactions available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>


                    {/* Pagination Controls */}
                    <div className={styles.pagination}>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                className={currentPage === index + 1 ? styles.activePage : ''}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
