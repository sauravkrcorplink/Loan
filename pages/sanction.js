/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter for redirection
import styles from '../styles/Sanction.module.css'; // Import the CSS module

export default function LoanSanctionPage() {
  const router = useRouter(); // Initialize the router
  const [loanDetails, setLoanDetails] = useState({
    loanAmount: '',
    tenure: '',
    interestRate: '',
  });

  const [sanctionedDetails, setSanctionedDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails((prev) => ({ ...prev, [name]: value }));
  };

  const calculateEMI = (principal, rate, tenure) => {
    const monthlyRate = rate / 12 / 100;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    return emi.toFixed(2);
  };

  const calculateStampDuty = (principal) => {
    // Assuming stamp duty is 0.1% of the loan amount
    return (principal * 0.001).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loanDetails.loanAmount && loanDetails.tenure && loanDetails.interestRate) {
      const principal = parseFloat(loanDetails.loanAmount);
      const rate = parseFloat(loanDetails.interestRate);
      const tenure = parseFloat(loanDetails.tenure);

      const emi = calculateEMI(principal, rate, tenure);
      const totalInterest = (emi * tenure - principal).toFixed(2);
      const totalAmount = (emi * tenure).toFixed(2);
      const stampDuty = calculateStampDuty(principal);

      setSanctionedDetails({
        principal,
        tenure,
        rate,
        emi,
        totalInterest,
        totalAmount,
        stampDuty,
      });
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleOK = () => {
    // Redirect to the KFS page
    router.push('/KFS'); // Replace '/kfs' with the actual path to your KFS page
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Loan Sanction</h1>
      {!sanctionedDetails ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Loan Amount (₹):</label>
            <input
              type="number"
              name="loanAmount"
              value={loanDetails.loanAmount}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Tenure (months):</label>
            <input
              type="number"
              name="tenure"
              value={loanDetails.tenure}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Interest Rate (%):</label>
            <input
              type="number"
              name="interestRate"
              value={loanDetails.interestRate}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Calculate EMI
          </button>
        </form>
      ) : (
        <div className={styles.sanctionDetails}>
          <h2>Sanctioned Loan Details</h2>
          <p>
            <strong>Loan Amount:</strong> ₹{sanctionedDetails.principal}
          </p>
          <p>
            <strong>Tenure (Static Time):</strong> {sanctionedDetails.tenure} months
          </p>
          <p>
            <strong>Interest Rate:</strong> {sanctionedDetails.rate}%
          </p>
          <p>
            <strong>EMI:</strong> ₹{sanctionedDetails.emi}
          </p>
          <p>
            <strong>Total Interest Payable:</strong> ₹{sanctionedDetails.totalInterest}
          </p>
          <p>
            <strong>Stamp Duty:</strong> ₹{sanctionedDetails.stampDuty}
          </p>
          <p>
            <strong>Total Payment (TP):</strong> ₹{sanctionedDetails.totalAmount}
          </p>
          <div className={styles.buttonGroup}>
            <button
              onClick={() => setSanctionedDetails(null)}
              className={styles.editButton}
            >
              Edit Details
            </button>
            <button
              onClick={handleOK}
              className={styles.okButton}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


// /* eslint-disable @next/next/no-img-element */
// import { useState } from 'react';
// import styles from '../styles/Sanction.module.css'; // Import the CSS module

// export default function LoanSanctionPage() {
//   const [loanDetails, setLoanDetails] = useState({
//     loanAmount: '',
//     tenure: '',
//     interestRate: '',
//   });

//   const [sanctionedDetails, setSanctionedDetails] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoanDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const calculateEMI = (principal, rate, tenure) => {
//     const monthlyRate = rate / 12 / 100;
//     const emi =
//       (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
//       (Math.pow(1 + monthlyRate, tenure) - 1);
//     return emi.toFixed(2);
//   };

//   const calculateStampDuty = (principal) => {
//     // Assuming stamp duty is 0.1% of the loan amount
//     return (principal * 0.001).toFixed(2);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (loanDetails.loanAmount && loanDetails.tenure && loanDetails.interestRate) {
//       const principal = parseFloat(loanDetails.loanAmount);
//       const rate = parseFloat(loanDetails.interestRate);
//       const tenure = parseFloat(loanDetails.tenure);

//       const emi = calculateEMI(principal, rate, tenure);
//       const totalInterest = (emi * tenure - principal).toFixed(2);
//       const totalAmount = (emi * tenure).toFixed(2);
//       const stampDuty = calculateStampDuty(principal);

//       setSanctionedDetails({
//         principal,
//         tenure,
//         rate,
//         emi,
//         totalInterest,
//         totalAmount,
//         stampDuty,
//       });
//     } else {
//       alert('Please fill in all fields.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Loan Sanction</h1>
//       {!sanctionedDetails ? (
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <div className={styles.inputGroup}>
//             <label>Loan Amount (₹):</label>
//             <input
//               type="number"
//               name="loanAmount"
//               value={loanDetails.loanAmount}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Tenure (months):</label>
//             <input
//               type="number"
//               name="tenure"
//               value={loanDetails.tenure}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Interest Rate (%):</label>
//             <input
//               type="number"
//               name="interestRate"
//               value={loanDetails.interestRate}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className={styles.button}>
//             Calculate EMI
//           </button>
//         </form>
//       ) : (
//         <div className={styles.sanctionDetails}>
//           <h2>Sanctioned Loan Details</h2>
//           <p>
//             <strong>Loan Amount:</strong> ₹{sanctionedDetails.principal}
//           </p>
//           <p>
//             <strong>Tenure (Static Time):</strong> {sanctionedDetails.tenure} months
//           </p>
//           <p>
//             <strong>Interest Rate:</strong> {sanctionedDetails.rate}%
//           </p>
//           <p>
//             <strong>EMI:</strong> ₹{sanctionedDetails.emi}
//           </p>
//           <p>
//             <strong>Total Interest Payable:</strong> ₹{sanctionedDetails.totalInterest}
//           </p>
//           <p>
//             <strong>Stamp Duty:</strong> ₹{sanctionedDetails.stampDuty}
//           </p>
//           <p>
//             <strong>Total Payment (TP):</strong> ₹{sanctionedDetails.totalAmount}
//           </p>
//           <button
//             onClick={() => setSanctionedDetails(null)}
//             className={styles.editButton}
//           >
//             Edit Details
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


// import { useState } from 'react';
// import styles from '../styles/Sanction.module.css'; // Import the CSS module

// export default function LoanSanctionPage() {
//   const [loanDetails, setLoanDetails] = useState({
//     loanAmount: '',
//     tenure: '',
//     interestRate: '',
//   });

//   const [sanctionedDetails, setSanctionedDetails] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoanDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const calculateEMI = (principal, rate, tenure) => {
//     const monthlyRate = rate / 12 / 100;
//     const emi =
//       (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
//       (Math.pow(1 + monthlyRate, tenure) - 1);
//     return emi.toFixed(2);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (loanDetails.loanAmount && loanDetails.tenure && loanDetails.interestRate) {
//       const principal = parseFloat(loanDetails.loanAmount);
//       const rate = parseFloat(loanDetails.interestRate);
//       const tenure = parseFloat(loanDetails.tenure);

//       const emi = calculateEMI(principal, rate, tenure);
//       const totalInterest = (emi * tenure - principal).toFixed(2);
//       const totalAmount = (emi * tenure).toFixed(2);

//       setSanctionedDetails({
//         principal,
//         tenure,
//         rate,
//         emi,
//         totalInterest,
//         totalAmount,
//       });
//     } else {
//       alert('Please fill in all fields.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Loan Sanction</h1>
//       {!sanctionedDetails ? (
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <div className={styles.inputGroup}>
//             <label>Loan Amount (₹):</label>
//             <input
//               type="number"
//               name="loanAmount"
//               value={loanDetails.loanAmount}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Tenure (months):</label>
//             <input
//               type="number"
//               name="tenure"
//               value={loanDetails.tenure}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className={styles.inputGroup}>
//             <label>Interest Rate (%):</label>
//             <input
//               type="number"
//               name="interestRate"
//               value={loanDetails.interestRate}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className={styles.button}>
//             Calculate EMI
//           </button>
//         </form>
//       ) : (
//         <div className={styles.sanctionDetails}>
//           <h2>Sanctioned Loan Details</h2>
//           <p>
//             <strong>Loan Amount:</strong> ₹{sanctionedDetails.principal}
//           </p>
//           <p>
//             <strong>Tenure:</strong> {sanctionedDetails.tenure} months
//           </p>
//           <p>
//             <strong>Interest Rate:</strong> {sanctionedDetails.rate}%
//           </p>
//           <p>
//             <strong>EMI:</strong> ₹{sanctionedDetails.emi}
//           </p>
//           <p>
//             <strong>Total Interest Payable:</strong> ₹{sanctionedDetails.totalInterest}
//           </p>
//           <p>
//             <strong>Total Amount Payable:</strong> ₹{sanctionedDetails.totalAmount}
//           </p>
//           <button
//             onClick={() => setSanctionedDetails(null)}
//             className={styles.editButton}
//           >
//             Edit Details
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// // pages/sanction.js

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import styles from '../styles/Sanction.module.css';

// const SanctionPage = () => {
//   const router = useRouter();
//   const [sanctionDetails, setSanctionDetails] = useState(null);

//   useEffect(() => {
//     // Simulate an API call to fetch loan sanction details
//     // Replace this with your real API call or state
//     const fetchSanctionDetails = async () => {
//       const data = {
//         loanAmount: "₹5,00,000",
//         tenure: "5 years",
//         interestRate: "8%",
//         emi: "₹10,000",
//         sanctionDate: "2025-01-31",
//         loanStatus: "Sanctioned",
//       };
//       setSanctionDetails(data);
//     };

//     fetchSanctionDetails();
//   }, []);

//   if (!sanctionDetails) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className={styles.container}>
//       <h1>Loan Sanction Details</h1>
//       <div className={styles.card}>
//         <h2>Loan Sanctioned Successfully</h2>
//         <div className={styles.detail}>
//           <strong>Loan Amount:</strong> {sanctionDetails.loanAmount}
//         </div>
//         <div className={styles.detail}>
//           <strong>Tenure:</strong> {sanctionDetails.tenure}
//         </div>
//         <div className={styles.detail}>
//           <strong>Interest Rate:</strong> {sanctionDetails.interestRate}
//         </div>
//         <div className={styles.detail}>
//           <strong>EMI:</strong> {sanctionDetails.emi}
//         </div>
//         <div className={styles.detail}>
//           <strong>Sanction Date:</strong> {sanctionDetails.sanctionDate}
//         </div>
//         <div className={styles.detail}>
//           <strong>Status:</strong> {sanctionDetails.loanStatus}
//         </div>
//         <button
//           className={styles.button}
//           onClick={() => router.push("/dashboard")}
//         >
//           Back to Dashboard
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SanctionPage;

