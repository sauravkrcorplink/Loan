import React, { useState } from 'react';
import styles from "../../styles/EmandatePage.module.css";

const EmandateVerify = ({ bank, onNext }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10) {
      setMobileNumber(value);
      setErrorMessage('');
    } else {
      setErrorMessage('Mobile number should be exactly 10 digits');
    }
  };

  const handleSubmit = () => {
    if (mobileNumber.length === 10) {
      onNext(mobileNumber);
    } else {
      setErrorMessage('Mobile number should be exactly 10 digits');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Verify Bank Details</h1>
        <p className={styles.text}>Selected Bank: <strong>{bank}</strong></p>
        <p className={styles.text}>To verify your bank statement, enter your mobile number.</p>
        <input
          type="number"
          className={styles.inputField}
          placeholder="Enter your mobile number"
          value={mobileNumber}
          onChange={handleMobileNumberChange}
        />
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <button className={styles.button} onClick={handleSubmit}>Get OTP</button>
      </div>
    </div>
  );
};

export default EmandateVerify;



// import React, { useState } from 'react';
// import styles from "../../styles/EmandatePage.module.css";

// const EmandateVerify = ({ bank, onNext }) => {
//   const [mobileNumber, setMobileNumber] = useState('');

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h1 className={styles.heading}>Verify Bank Details</h1>
//         <p className={styles.text}>Selected Bank: <strong>{bank}</strong></p>
//         <p className={styles.text}>To verify your bank statement, enter your mobile number.</p>
//         <input
//           type="number"
//           className={styles.inputField}
//           placeholder="Enter your mobile number"
//           value={mobileNumber}
//           onChange={(e) => setMobileNumber(e.target.value)}
//         />
//         <button className={styles.button} onClick={() => onNext(mobileNumber)}>Get OTP</button>
//       </div>
//     </div>
//   );
// };

// export default EmandateVerify;



// import React, { useState } from 'react';
// import "../../styles/EmandatePage.module.css"

// const VerifyBankPage = ({ bank, onNext }) => {
//   const [mobileNumber, setMobileNumber] = useState('');

//   return (
//     <div>
//       <h1>Verify Bank Details - {bank}</h1>
//       <p>To verify your bank statement, please enter your number.</p>
//       <input
//         type="text"
//         placeholder="Enter your mobile number"
//         value={mobileNumber}
//         onChange={(e) => setMobileNumber(e.target.value)}
//       />
//       <button onClick={() => onNext(mobileNumber)}>Get OTP</button>
//     </div>
//   );
// };

// export default VerifyBankPage;
