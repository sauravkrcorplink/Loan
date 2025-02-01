import { useState } from 'react';
import styles from '../styles/LoanAgreement.module.css'; // Import the CSS module

export default function LoanAgreementPage() {
  const [loanDetails, setLoanDetails] = useState({
    borrowerName: '',
    loanAmount: '',
    interestRate: '',
    repaymentPeriod: '',
  });

  const [agreementGenerated, setAgreementGenerated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      loanDetails.borrowerName &&
      loanDetails.loanAmount &&
      loanDetails.interestRate &&
      loanDetails.repaymentPeriod
    ) {
      setAgreementGenerated(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Loan Agreement</h1>
      {!agreementGenerated ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Borrower Name:</label>
            <input
              type="text"
              name="borrowerName"
              value={loanDetails.borrowerName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Loan Amount ($):</label>
            <input
              type="number"
              name="loanAmount"
              value={loanDetails.loanAmount}
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
          <div className={styles.inputGroup}>
            <label>Repayment Period (months):</label>
            <input
              type="number"
              name="repaymentPeriod"
              value={loanDetails.repaymentPeriod}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Generate Agreement
          </button>
        </form>
      ) : (
        <div className={styles.agreementDetails}>
          <h2>Loan Agreement Details</h2>
          <p>
            <strong>Borrower Name:</strong> {loanDetails.borrowerName}
          </p>
          <p>
            <strong>Loan Amount:</strong> ${loanDetails.loanAmount}
          </p>
          <p>
            <strong>Interest Rate:</strong> {loanDetails.interestRate}%
          </p>
          <p>
            <strong>Repayment Period:</strong> {loanDetails.repaymentPeriod} months
          </p>
          <p>
            This agreement is made between {loanDetails.borrowerName} and the lender. The borrower agrees to repay the loan amount of ${loanDetails.loanAmount} with an interest rate of {loanDetails.interestRate}% over a period of {loanDetails.repaymentPeriod} months.
          </p>
          <button
            onClick={() => setAgreementGenerated(false)}
            className={styles.editButton}
          >
            Edit Details
          </button>
        </div>
      )}
    </div>
  );
}


// import React, { useState } from "react";
// import styles from "../styles/LoanAgreement.module.css";
// import { useRouter } from "next/router";

// const LoanAgreement = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   const [isAgreementAccepted, setIsAgreementAccepted] = useState(false);
//   const router = useRouter();

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   const handleAgreeClick = () => {
//     if (isChecked) {
//       setIsAgreementAccepted(true);
//       alert("Agreement Accepted!");
//       router.push("/dashboard"); // Redirect after accepting the agreement
//     } else {
//       alert("Please accept the agreement to proceed.");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Loan Agreement</h1>
//       <div className={styles.agreementContent}>
//         <h2>Terms & Conditions</h2>
//         <p>
//           By accepting this Loan Agreement, you agree to the following terms:
//         </p>
//         <ul>
//           <li>Loan Amount: ₹10,000</li>
//           <li>Interest Rate: 12% per annum</li>
//           <li>Loan Tenure: 12 Months</li>
//           <li>Processing Fee: ₹500</li>
//           <li>Repayment Frequency: Monthly</li>
//           <li>Late Payment Penalty: 2% per month</li>
//         </ul>

//         <h3>Repayment Terms</h3>
//         <p>
//           You agree to repay the loan in equal monthly installments of ₹900, due
//           on the 15th of each month, starting from the loan disbursal date.
//         </p>

//         <h3>Grievance Officer</h3>
//         <p>
//           In case of any issues, please contact our Grievance Officer at:
//         </p>
//         <p>Name: Samir Sethi</p>
//         <p>Phone: +91 98999-85495</p>
//         <p>Address: 4338, Padam Singh Road, Karol Bagh, New Delhi - 110005</p>

//         <div className={styles.checkboxContainer}>
//           <input
//             type="checkbox"
//             id="agreementCheckbox"
//             checked={isChecked}
//             onChange={handleCheckboxChange}
//           />
//           <label htmlFor="agreementCheckbox">
//             I agree to the Terms & Conditions.
//           </label>
//         </div>

//         <button
//           className={styles.agreeButton}
//           onClick={handleAgreeClick}
//           disabled={!isChecked}
//         >
//           Accept & Proceed
//         </button>
//       </div>

//       <div className={styles.downloadSection}>
//         <button className={styles.downloadButton}>Download Agreement</button>
//       </div>
//     </div>
//   );
// };

// export default LoanAgreement;
