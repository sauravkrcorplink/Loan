import React, { useState } from 'react';
import styles from "../../styles/BankDetails.module.css";

const EmandateBankUsername = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'abcde' && password === '12345') {
      onLoginSuccess(); // Call the function passed from the parent component
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Bank Details</h1>
        <p className={styles.text}>Enter your username and password to verify bank details.</p>
        <input
          type="text"
          className={styles.input}
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button className={styles.button} onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default EmandateBankUsername;


// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import styles from "../../styles/BankDetails.module.css";

// const EmandateBankUsername = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleLogin = () => {
//     if (username === 'abcde' && password === '12345') {
//       router.push('/EmandateStatement');
//     } else {
//       setError('Invalid username or password. Please try again.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h1 className={styles.heading}>Bank Details</h1>
//         <p className={styles.text}>Enter your username and password to verify bank details.</p>
//         <input
//           type="text"
//           className={styles.input}
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           className={styles.input}
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {error && <p className={styles.errorMessage}>{error}</p>}
//         <button className={styles.button} onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// };

// export default EmandateBankUsername;


// import React, { useState } from 'react';
// import styles from "../../styles/BankDetails.module.css";

// const EmandateBankUsername = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     // Updated authentication logic
//     if (username === 'abcde' && password === '12345') {
//       onLogin();
//     } else {
//       setError('Invalid username or password. Please try again.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h1 className={styles.heading}>Bank Details</h1>
//         <p className={styles.text}>Enter your username and password to verify bank details.</p>
//         <input
//           type="text"
//           className={styles.input}
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           className={styles.input}
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {error && <p className={styles.errorMessage}>{error}</p>}
//         <button className={styles.button} onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// };

// export default EmandateBankUsername;



// import React, { useState } from 'react';
// import styles from "../../styles/BankDetails.module.css";

// const EmandateBankUsername = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = () => {
//     // Here you can add your authentication logic
//     if (username === 'user' && password === 'password') {
//       onLogin();
//     } else {
//       setError('Invalid username or password. Please try again.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h1 className={styles.heading}>Bank Details</h1>
//         <p className={styles.text}>Enter your username and password to verify bank details.</p>
//         <input
//           type="text"
//           className={styles.input}
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           className={styles.input}
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {error && <p className={styles.errorMessage}>{error}</p>}
//         <button className={styles.button} onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// };

// export default EmandateBankUsername;
