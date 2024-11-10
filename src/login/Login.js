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
      //if the user approuved
      if (user.status === 'approved') {
        setLoginMessage('Login successful!');
      } else {
        //the user not approuved
        setLoginMessage('Account not approved');
      }
    } else {
      //if incorrect or empty
      setLoginMessage('Incorrect email or password.');
    }
  };

  return (
    //these divs are for styling
    <div className={styles.App}>
    <div className={styles.authWrapper}>
    <div className={styles.authinner}>
    {/*this form's type is onSubmit, so the function that handles the login is activated */}
    <form onSubmit={handleLogin}>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          /*this indicates that the email is the value of the use state */
          value={email}
          /*this will set the setEmail based on the user's input*/
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className={styles.formcontrol}
          placeholder="Enter email"
        />
      </div>

      <div className={styles.mb3}>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className={styles.formcontrol}
          placeholder="Enter password"
        />
      </div>

      {/* the button*/}
      <div className="d-grid">
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </div>

      {/* Display login message */}
      {loginMessage && <p style={{ color: loginMessage === 'Login successful!' ? 'green' : 'red' }}>{loginMessage}</p>}

      <p className={styles.forgotpassword}>
        Forgo {' '}
        {/* this will redirect to the rest password page*/}
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
