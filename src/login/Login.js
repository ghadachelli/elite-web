import React, { useState } from 'react';
import styles from "./login.module.css";

const Login = () => {
  // States to store user's inputs throught the form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState(''); // Ensure this is correctly defined

  // Array to store user data with predefined credentials for testing, it will be removed when linked to a database
  const users = [
    { email: 'user@example.com', password: 'password123', status: 'approved' },
    { email: 'user@example1.com', password: 'password1234', status: 'not approved' },
  ];

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();

    // Find user by email and password
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // Check user status:
      if (user.status === 'approved') {
        setLoginMessage('Login successful!');
      } else {
        setLoginMessage('Account not approved');
      }
    } else {
      setLoginMessage('Incorrect email or password.');
    }
  };

  return (
    <div className={styles.App}>
    <div className={styles.authWrapper}>
    <div className={styles.authinner}>
    <form onSubmit={handleLogin}>
      <h3>Sign In</h3>

      <div className="mb-3">
        <label>Email address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className={styles.formcontrol}
          placeholder="Enter password"
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>

      {/* Display login message */}
      {loginMessage && <p style={{ color: loginMessage === 'Login successful!' ? 'green' : 'red' }}>{loginMessage}</p>}

      <p className={styles.forgotpassword}>
        Forgo {' '}
        <a href="/reset.password" style={{ color: 'blue', textDecoration: 'underline' }}> password?
        </a>
      </p>
    </form>
    </div>
    </div>
    </div>
  );
};

export default Login;
