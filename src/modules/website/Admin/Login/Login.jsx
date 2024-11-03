import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png';
import styles from './Login.module.css'; // Import the CSS Module

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await fetch('https://mycubeenergy.onrender.com/api/admin/Admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Save token and admin info to session storage
                sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('refreshToken', data.refreshToken);
                sessionStorage.setItem('admin', JSON.stringify(data.admin));

                // Navigate to the dashboard on successful login
                navigate('/admin_dashboard');
            } else {
                setError(data.message || 'Login failed. Please check your credentials and try again.');
            }
        } catch (error) {
            console.error('Error:', error.message);
            setError('Login failed. Please check your credentials and try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.left}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles.right}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputContainer}>
                        <div className={styles.welcome}>
                            <h2>Welcome Back!</h2>
                            <span className={styles.line}></span>
                        </div>

                        {error && <p className={styles.error}>{error}</p>}

                        <div className={styles.username}>
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder='Username'
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.password}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder='Password'
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.btnSub}>
                            <input
                                type="submit"
                                value={loading ? 'Loading...' : 'Submit'}
                                disabled={loading}
                                style={{ background: 'black' }}
                            />
                        </div>

                        <NavLink to='/resetpassword'>Forgot Password</NavLink>
                        <div className={styles.account}>
                            <p>Don't have an account? <NavLink to='/admin_reg'>Create Account</NavLink></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
