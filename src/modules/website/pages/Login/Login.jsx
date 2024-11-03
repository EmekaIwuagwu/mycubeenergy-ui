import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from './logo.png';
import styles from './Login.module.css';

const Login = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (email === '') {
            alert('Email cannot be empty');
            setLoading(false);
            return;
        }

        if (password === '') {
            alert('Password cannot be empty');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('https://mycubeenergy.onrender.com/api/User/Auth/login', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const responseJson = await response.json();

            if (responseJson.message === 'Login Successful') {
                sessionStorage.setItem('userinfo', email); // Store email in sessionStorage
                sessionStorage.setItem('token', responseJson.token); // Store token in sessionStorage
                navigate('/dashboard');
            } else {
                alert(responseJson.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('Login failed. Please check your network and try again.');
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
                <form className={styles.form} onSubmit={login}>
                    <div className={styles.inputContainer}>
                        <div className={styles.welcome}>
                            <h2>Welcome Back!</h2>
                            <span className={styles.line}></span>
                        </div>

                        {error && <p className={styles.error}>{error}</p>}


                        <div className={styles.username}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder='Email'
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                            <p>Don't have an account? <NavLink to='/signup'>Create Account</NavLink></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
