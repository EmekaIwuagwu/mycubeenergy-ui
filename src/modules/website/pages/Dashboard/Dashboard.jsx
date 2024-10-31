import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import styles from './Dashboard.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [username, setUsername] = useState('');
    const [unitBalance, setUnitBalance] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token'); // Ensure you're using the correct key here
        const email = localStorage.getItem('email'); // Retrieve email from local storage

        // Redirect to login if no token or email is found
        if (!token || !email) {
            navigate('/login');
            return; // Prevent further execution
        }

        // Fetch user profile to get username and unit balance
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`https://mycubeenergy.onrender.com/api/User/profile?email=${email}`, {
                    headers: {
                        'Authorization': `Bearer ${token}` // Use 'token' in the header
                    }
                });

                if (response.data) {
                    // Set username from the API response
                    if (response.data.username) {
                        setUsername(response.data.username);
                    } else {
                        setError('Username not found');
                    }
                    
                    // Set unit balance from the API response
                    if (response.data.unitBalance !== undefined) {
                        setUnitBalance(response.data.unitBalance);
                    } else {
                        setError('Unit balance not found');
                    }
                } else {
                    setError('Failed to fetch profile data');
                }
            } catch (error) {
                if (error.response) {
                    console.error('Error fetching profile:', error.response.data);
                    setError('Failed to load profile');
                } else {
                    console.error('Error fetching profile:', error.message);
                    setError('Failed to load profile due to network issue');
                }
            } finally {
                setLoading(false); // Stop loading regardless of success or failure
            }
        };

        fetchProfile(); // Call the function to fetch the profile
    }, [navigate]);

    return (
        <div>
            <Sidebar />
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardHeader}>
                    <h4>Dashboard</h4>
                    <p>Welcome Back {username || 'User'}!</p>
                </div>
                
                <div className={styles.dashboardCards}>
                    <div className={styles.dashboardCard}>
                        <h4>Units Balance</h4>
                        <p>{unitBalance}</p>
                        <div className={styles.flowchartPlaceholder}>
                            Flowchart or Image here
                        </div>
                    </div>
                    <div className={styles.dashboardCard}>
                        <h4>Wallet Balance</h4>
                        <p>NGN 205,000</p>
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
                    {loading ? (
                        <p>Loading transactions...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
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
                                    <td colSpan="4" style={{ textAlign: 'center' }}>No transactions available</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
