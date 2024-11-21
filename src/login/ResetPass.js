import React, { useState } from 'react';
import styles from "./login.module.css";  // Adjusted to import styles correctly

const ResetPass = () => {
  const [email, setEmail] = useState('');
  const [verifMessage, setVerifMessage] = useState('');

  const users = [
    { email: 'user@example.com', password: 'password123', status: 'approved' },
    { email: 'user@example1.com', password: 'password1234', status: 'not approved' },
  ];

 // Handle verification, if it finds the email in the list bellow it will return TRUE
 const handleVerif = () => {
    const user = users.find((u) => u.email === email);

    if (user) {
      setVerifMessage(`Your password is: ${user.password}`);
      //true it will give the password
    } else {
      setVerifMessage("This email is not associated with any account");
      //false will give this message
    }
  };

  return (
    <div className={styles.authWrapper}>
      <div className={styles.authinner}>
        {/*e.preventDefault() stops a form from refreshing the page so you can handle its submission with custom code in JavaScript or React.*/}
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
