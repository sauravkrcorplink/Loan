import React, { useState } from 'react';
import styles from "../../styles/EmandatePage.module.css";
import EmandateStatement from './EmandateStatement';

const EmandateUPI = () => {
  const [upiId, setUpiId] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [showBankDetails, setShowBankDetails] = useState(false);

  const handleVerify = () => {
    if (upiId.trim() === '') {
      alert("Please enter a valid UPI ID"); // Basic validation
      return;
    }
    // Simulate UPI verification logic
    setIsVerified(true);

    // Show verification success message
    setTimeout(() => {
      alert("Verified Successfully"); // Popup message
      setShowBankDetails(true); // Show BankDetailsUpload component
    }, 500);
  };

  return (
    <div className={styles.container}>
      {!showBankDetails ? ( // Show UPI form until verification is complete
        <div className={styles.card}>
          <h1 className={styles.heading}>Enter Your UPI ID</h1>
          <input
            type="text"
            placeholder="e.g., yourname@upi"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className={styles.inputField}
          />
          <button className={styles.verifyButton} onClick={handleVerify}>
            Verify UPI ID
          </button>
        </div>
      ) : (
        <EmandateStatement /> // Show Bank Details Upload after UPI verification
      )}
    </div>
  );
};

export default EmandateUPI;



// import React, { useState } from 'react';
// import styles from "../../styles/EmandatePage.module.css";

// const EmandateUPI = ({ onSuccess }) => {
//   const [upiId, setUpiId] = useState('');
//   const [isVerified, setIsVerified] = useState(false);

//   const handleVerify = () => {
//     // Simulate UPI verification logic
//     setIsVerified(true);
//     onSuccess(); // Proceed to the next step
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h1 className={styles.heading}>Enter Your UPI ID</h1>
//         <input
//           type="text"
//           placeholder="e.g., yourname@upi"
//           value={upiId}
//           onChange={(e) => setUpiId(e.target.value)}
//           className={styles.inputField}
//         />
//         <button className={styles.verifyButton} onClick={handleVerify}>
//           Verify UPI ID
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EmandateUPI;