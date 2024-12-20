import React, { useState } from 'react';
import styles from './UserSearch.module.css';
import Sidebar from '../Sidebar/Sidebar';
import arrow from '../Assets/arrow.png';
import { Link } from 'react-router-dom';

const UserSearch = () => {
    const [users] = useState([
        // You can add sample user data here if needed
        // { accountId: '12345', email: 'user@example.com', createdAt: '2023-01-01' },
    ]);

    return (
        <div>
            <Sidebar />
            <div className={styles.userContainer}>
                {/* Search Users Header */}
                <div className={styles.userHeader}>
                    <h4>Search Users</h4>
                </div>

                {/* Search Date Section */}
                <div className={styles.searchDate}>
                    <div className={styles.dateInputs}>
                        <input
                            type="date"
                            className={styles.dateInput}
                            placeholder="From"
                        />
                        <span className={styles.orText}>- OR -</span>
                        <input
                            type="date"
                            className={styles.dateInput}
                            placeholder="To"
                        />
                    </div>
                    <input
                        type="text"
                        className={styles.usernameInput}
                        placeholder="Search Username"
                    />
                    <button className={styles.searchButton}>Search</button>
                </div>

                {/* All Users Header */}
                <div className={styles.userSection}>
                    <div className={styles.userHeader}>
                        <h4>All Users</h4>
                    </div>

                    <table className={styles.userTable}>
                        <thead>
                            <tr>
                                <th>AccountID</th>
                                <th>E-Mail</th>
                                <th>Reg. Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user.accountId}>
                                        <td>{user.accountId}</td>
                                        <td>{user.email}</td>
                                        <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <Link to={`/usersearchdetails/${user.email}`}>
                                                <img src={arrow} alt="View details" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No users found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserSearch;
