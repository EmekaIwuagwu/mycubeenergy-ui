// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom'; // Import Link from React Router
import arrow from '../Assets/arrow.png';

const Dashboard = () => {
    const [summaryData, setSummaryData] = useState({
        totalUsers: 0,
        totalTransactionAmount: 0,
    });
    const [orders, setOrders] = useState([]); // State to hold orders
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingOrders, setLoadingOrders] = useState(true); // State to manage loading of orders

    useEffect(() => {
        const fetchSummaryData = async () => {
            const token = sessionStorage.getItem('token');

            try {
                const response = await fetch('https://mycubeenergy.onrender.com/api/admin/Admin/dashboard/summary', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch summary data');
                }

                const data = await response.json();
                setSummaryData({
                    totalUsers: data.totalUsers,
                    totalTransactionAmount: data.totalTransactionAmount,
                });
            } catch (err) {
                console.error('Error fetching summary data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchOrders = async () => {
            const token = sessionStorage.getItem('token');

            try {
                const response = await fetch('https://mycubeenergy.onrender.com/api/admin/Admin/orders', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch orders');
                }

                const data = await response.json();
                setOrders(data); // Set the fetched orders
            } catch (err) {
                console.error('Error fetching orders:', err);
                setError(err.message);
            } finally {
                setLoadingOrders(false); // Update loading state for orders
            }
        };

        fetchSummaryData();
        fetchOrders(); // Fetch orders on component mount
    }, []); // Empty dependency array means this effect runs once on mount

    if (loading || loadingOrders) {
        return <p>Loading...</p>; // Optional loading state
    }

    return (
        <div>
            <Sidebar />
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardHeader}>
                    <h4>Admin Dashboard</h4>
                    <p>Welcome Back Admin!</p>
                </div>
                {error && <p className={styles.error}>Error: {error}</p>}
                <div className={styles.dashboardCards}>
                    <div className={styles.dashboardCard}>
                        <h4>Transactions</h4>
                        <p>{summaryData.totalTransactionAmount}</p>
                        <div className={styles.flowchartPlaceholder}>
                            Flowchart or Image here
                        </div>
                    </div>
                    <div className={styles.dashboardCard}>
                        <h4>Usage Stats</h4>
                        <p>NGN 205,000</p>
                        <div className={styles.flowchartPlaceholder}>
                            Flowchart or Image here
                        </div>
                    </div>
                    <div className={styles.dashboardCard}>
                        <h4>Total Users</h4>
                        <p>{summaryData.totalUsers}</p>
                        <div className={styles.flowchartPlaceholder}>
                            Flowchart or Image here
                        </div>
                    </div>
                </div>
                <div className={styles.transactionsSection}>
                    <div className={styles.transactionsHeader}>
                        <h4>Recent Orders</h4>
                    </div>
                    <table className={styles.transactionsTable}>
                        <thead>
                            <tr>
                                <th>Reference Number</th>
                                <th>Amount</th>
                                <th>Payer Name</th>
                                <th>Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map(order => (
                                    <tr key={order.id}>
                                        <td>{order.referenceNumber}</td>
                                        <td>NGN {order.amount}</td>
                                        <td>{order.payerName}</td>
                                        <td>{new Date(order.date).toLocaleDateString()}</td> {/* Format date */}
                                        <td>
                                            <Link to="/orderdetails">
                                                <img src={arrow} alt="View details" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">No orders available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
