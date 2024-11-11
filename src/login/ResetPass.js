import React, { useState } from 'react';
import styles from "./login.module.css";  // Adjusted to import styles correctly

const ResetPass = () => {
  const [email, setEmail] = useState('');
  const [verifMessage, setVerifMessage] = useState('');

  const users = [
    { email: 'user@example.com', password: 'password123', status: 'approved' },
    { email: 'user@example1.com', password: 'password1234', status: 'not approved' },
  ];

 // Handle verification
 const handleVerif = () => {
    const user = users.find((u) => u.email === email);

    if (user) {
      setVerifMessage(`Your password is: ${user.password}`);
    } else {
      setVerifMessage("This email is not associated with any account");
    }
  };

  return (
    <div className={styles.authWrapper}>
      <div className={styles.authinner}>
        <form onSubmit={(e) => e.preventDefault()}>
          <h3>Reset Password</h3>
          <div>
            <label>Email address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
              className={styles.formControl} // Adjusted for module CSS
            />
          </div>

          <button
            type="button"
            onClick={handleVerif}
            className={styles.btn}
          >
            Verify Email
          </button>

          {verifMessage && (
            <p style={{ color: verifMessage.includes("not associated") ? "red" : "green" }}>
              {verifMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ResetPass;
