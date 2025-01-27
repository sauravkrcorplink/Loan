import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/ApplyForLoan.module.css";

export default function ApplyForALoan() {
  const router = useRouter();
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [previousAmount, setPreviousAmount] = useState("");
  const [previousPurpose, setPreviousPurpose] = useState("");

  // Format number in the Indian numbering system with a rupee sign
  const formatNumber = (value) => {
    if (!value) return "₹ ";
    const rawValue = value.replace(/₹ |,/g, ""); // Remove ₹ and commas
    if (isNaN(rawValue)) return loanAmount; // Ignore invalid input
    const parts = rawValue.split(".");
    const integerPart = parts[0];
    const formatted = integerPart.replace(
      /\B(?=(\d{2})+(?!\d))/g,
      (match, offset) => (offset === 0 ? "" : ",")
    );
    return "₹ " + formatted + (parts[1] ? "." + parts[1] : "");
  };

  // Handle Loan Amount Input
  const handleLoanAmountChange = (e) => {
    setLoanAmount(formatNumber(e.target.value));
  };

  // Handle Loan Purpose Selection
  const handleLoanPurposeChange = (e) => {
    setLoanPurpose(e.target.value);
  };

  const handleContinue = () => {
    // Save the current input values to localStorage for reference
    localStorage.setItem("loanAmount", loanAmount.replace(/₹ |,/g, ""));
    localStorage.setItem("loanPurpose", loanPurpose);

    // Navigate to the Proof of Address page
    router.push("/proofofaddress");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Apply for a Loan</h1>
      <div className={styles.formContainer}>
        {/* Loan Amount Section */}
        <div className={styles.inputGroup}>
          <label htmlFor="loanAmount" className={styles.label}>
            How much do you want to borrow?
          </label>
          <input
            id="loanAmount"
            type="text"
            className={styles.input}
            value={loanAmount}
            onChange={handleLoanAmountChange}
            placeholder="₹ 20,000.00"
          />
        </div>

        {/* Loan Purpose Section */}
        <div className={styles.inputGroup}>
          <label htmlFor="loanPurpose" className={styles.label}>
            Purpose of Loan?
          </label>
          <select
            id="loanPurpose"
            className={styles.input}
            value={loanPurpose}
            onChange={handleLoanPurposeChange}
          >
            <option value="" disabled>
              Select Purpose
            </option>
            <option value="Medical Loan">Medical Loan</option>
            <option value="Education Loan">Education Loan</option>
            <option value="House Loan">House Loan</option>
          </select>
        </div>

        {/* Running Loan Section */}
        <div className={styles.inputGroup}>
          <p className={styles.label}>Have you any running loan?</p>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input type="radio" name="runningLoan" value="Yes" />
              Yes
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="runningLoan" value="No" />
              No
            </label>
          </div>
        </div>

        {/* Continue Button */}
        <button className={styles.continueButton} onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}




// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import styles from "../styles/ApplyForLoan.module.css";

// export default function ApplyForALoan() {
//   const router = useRouter();
//   const [loanAmount, setLoanAmount] = useState("");
//   const [loanPurpose, setLoanPurpose] = useState("");
//   const [runningLoan, setRunningLoan] = useState(null);

//   // Format number with commas
//   const formatNumber = (value) => {
//     if (!value) return "";
//     return value.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
//   };

//   // Handle Loan Amount Input
//   const handleLoanAmountChange = (e) => {
//     const rawValue = e.target.value.replace(/,/g, ""); // Remove commas for raw value
//     if (!isNaN(rawValue)) {
//       setLoanAmount(formatNumber(rawValue)); // Format value and set state
//       localStorage.setItem("loanAmount", rawValue); // Save raw value in localStorage
//     }
//   };

//   // Handle Loan Purpose Input
//   const handleLoanPurposeChange = (e) => {
//     const value = e.target.value;
//     setLoanPurpose(value);
//     localStorage.setItem("loanPurpose", value); // Save in localStorage
//   };

//   // Load data from localStorage when the component mounts
//   useEffect(() => {
//     const savedLoanAmount = localStorage.getItem("loanAmount");
//     const savedLoanPurpose = localStorage.getItem("loanPurpose");

//     if (savedLoanAmount) {
//       setLoanAmount(formatNumber(savedLoanAmount)); // Format the saved loan amount
//     }
//     if (savedLoanPurpose) {
//       setLoanPurpose(savedLoanPurpose); // Set saved loan purpose
//     }
//   }, []);

//   const handleContinue = () => {
//     router.push("/proofofaddress");
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Apply for a Loan</h1>
//       <div className={styles.formContainer}>
//         {/* Loan Amount Section */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="loanAmount" className={styles.label}>
//             How much do you want to borrow?
//           </label>
//           <input
//             id="loanAmount"
//             type="text"
//             className={styles.input}
//             value={loanAmount}
//             onChange={handleLoanAmountChange}
//             placeholder="₹ 20,000.00"
//           />
//         </div>

//         {/* Loan Purpose Section */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="loanPurpose" className={styles.label}>
//             Purpose of Loan?
//           </label>
//           <input
//             id="loanPurpose"
//             type="text"
//             className={styles.input}
//             value={loanPurpose}
//             onChange={handleLoanPurposeChange}
//             placeholder="Medical Emergency"
//           />
//         </div>

//         {/* Running Loan Section */}
//         <div className={styles.inputGroup}>
//           <p className={styles.label}>Have you any running loan?</p>
//           <div className={styles.radioGroup}>
//             <label className={styles.radioLabel}>
//               <input
//                 type="radio"
//                 name="runningLoan"
//                 value="Yes"
//                 checked={runningLoan === "Yes"}
//                 onChange={() => setRunningLoan("Yes")}
//               />
//               Yes
//             </label>
//             <label className={styles.radioLabel}>
//               <input
//                 type="radio"
//                 name="runningLoan"
//                 value="No"
//                 checked={runningLoan === "No"}
//                 onChange={() => setRunningLoan("No")}
//               />
//               No
//             </label>
//           </div>
//         </div>

//         {/* Continue Button */}
//         <button className={styles.continueButton} onClick={handleContinue}>
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../styles/ApplyForLoan.module.css"; // Create this CSS file for styling

// export default function ApplyForALoan() {
//   const router = useRouter();
//   const [loanAmount, setLoanAmount] = useState("");
//   const [loanPurpose, setLoanPurpose] = useState("");
//   const [runningLoan, setRunningLoan] = useState(null);

//   const handleContinue = () => {
//     // Navigate to the Proof of Address page
//     router.push("/proofofaddress");
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Apply for a Loan</h1>
//       <div className={styles.formContainer}>
//         {/* Loan Amount Section */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="loanAmount" className={styles.label}>
//             How much do you want to borrow?
//           </label>
//           <input
//             id="loanAmount"
//             type="number"
//             className={styles.input}
//             value={loanAmount}
//             onChange={(e) => setLoanAmount(e.target.value)}
//             placeholder="₹ 20,000.00"
//           />
//         </div>

//         {/* Loan Purpose Section */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="loanPurpose" className={styles.label}>
//             Purpose of Loan?
//           </label>
//           <input
//             id="loanPurpose"
//             type="text"
//             className={styles.input}
//             value={loanPurpose}
//             onChange={(e) => setLoanPurpose(e.target.value)}
//             placeholder="Medical Emergency"
//           />
//         </div>

//         {/* Running Loan Section */}
//         <div className={styles.inputGroup}>
//           <p className={styles.label}>Have you any running loan?</p>
//           <div className={styles.radioGroup}>
//             <label className={styles.radioLabel}>
//               <input
//                 type="radio"
//                 name="runningLoan"
//                 value="Yes"
//                 checked={runningLoan === "Yes"}
//                 onChange={() => setRunningLoan("Yes")}
//               />
//               Yes
//             </label>
//             <label className={styles.radioLabel}>
//               <input
//                 type="radio"
//                 name="runningLoan"
//                 value="No"
//                 checked={runningLoan === "No"}
//                 onChange={() => setRunningLoan("No")}
//               />
//               No
//             </label>
//           </div>
//         </div>

//         {/* Continue Button */}
//         <button className={styles.continueButton} onClick={handleContinue}>
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// }
