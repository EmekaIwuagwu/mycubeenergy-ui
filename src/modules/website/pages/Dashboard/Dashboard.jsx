import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [cashWalletBalance, setCashWalletBalance] = useState(null); // New state for cash wallet balance
    const email = sessionStorage.getItem('userinfo');
    const token = sessionStorage.getItem('token');

    useEffect(() => {
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

        if (email && token) {
            fetchUserData();
        }
    }, [email, token]);

    // Function to format number as currency (e.g., NGN)
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
        }).format(value);
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
                            <tr>
                                <td>Company A</td>
                                <td>NGN 1,000</td>
                                <td>Monthly Subscription</td>
                                <td>2024-08-01</td>
                            </tr>
                            <tr>
                                <td>Company B</td>
                                <td>NGN 2,500</td>
                                <td>Utility Payment</td>
                                <td>2024-08-02</td>
                            </tr>
                            <tr>
                                <td>Company C</td>
                                <td>NGN 5,000</td>
                                <td>Service Fee</td>
                                <td>2024-08-05</td>
                            </tr>
                            <tr>
                                <td>Company D</td>
                                <td>NGN 7,500</td>
                                <td>Product Purchase</td>
                                <td>2024-08-10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
