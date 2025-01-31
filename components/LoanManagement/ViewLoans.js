import { useRouter } from "next/router";
import styles from "../../styles/ViewLoans.module.css";
import Image from "next/image"; // Import Image component for any images

export default function ViewLoans() {
  const router = useRouter();

  return (
    <div className={styles.viewLoansContainer}>
      <div className={styles.viewLoansContent}>
      <p style={{fontSize:'14px'}}>Loan ID: 1234567890</p>
        <h1 className={styles.loanAmount}>₹200,000</h1>
        <p className={styles.approvedAmount}>Approved Amount</p>

        <div className={styles.loanDetails}>
          <div className={styles.loanForm}>
            <div className={styles.loanFormd}>
              <div className={styles.adjustLeft}>
                <p>Approved Amt:</p>
                <p>₹ 200000.00</p>
              </div>
              <div className={styles.adjustRight}>
                <p>Disbursal:</p>
                <p>₹ 100000</p>
              </div>
            </div>
            <div className={styles.loanFormd}>
              <div className={styles.adjustLeft}>
                <p>Processing Fee+Tax</p>
                <p>₹ 25000.00</p>
              </div>
              <div className={styles.adjustRight}>
                <p>Loan Disbursal Date:</p>
                <p>27/01/2025</p>
              </div>
            </div>
            <div className={styles.loanFormd}>
              <div className={styles.adjustLeft}>
              <p>Repayment Date:</p>
              <p>27/01/2025</p>
              </div>
              <div className={styles.adjustRight}>
                <p>Tenure:</p>
                <p>30 Days</p>
              </div>
            </div>
          </div>

          <h3 className={styles.repaymentScheduleTitle}>Repayment Schedule</h3>
          <p className={styles.repaymentDetails}>
            Due Date: 10th Aug 2024 | Amount: ₹6,500.00
          </p>

          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="terms" className={styles.checkbox} />
            <label htmlFor="terms" className={styles.checkboxLabel}>
              I accept the Terms & Conditions
            </label>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button
            className={styles.submitButton}
            onClick={() => router.push("/loan-status")}
          >
            Submit
          </button>
          <button
            className={styles.declineButton}
            onClick={() => router.push("/")}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

// import { useRouter } from "next/router";
// import styles from "../../styles/LoanManagement.module.css";
// import Image from "next/image"; // Import Image component for any images

// export default function ViewLoans() {
//   const router = useRouter();

//   return (
//     <div className={styles.viewLoansContainer}>
//       <div className={styles.viewLoansContent}>
//         <h1 className={styles.loanAmount}>₹200,000</h1>
//         <p className={styles.approvedAmount}>Approved Amount</p>

//         <div className={styles.loanDetails}>
//           <p>
//             <strong>Disbursal Date:</strong> 01/23/2024
//           </p>
//           <p>
//             <strong>Loan Tenure:</strong> 30 Days
//           </p>

//           <h3 className={styles.repaymentScheduleTitle}>Repayment Schedule</h3>
//           <p className={styles.repaymentDetails}>
//             Due Date: 10th Aug 2024 | Amount: ₹6,500.00
//           </p>

//           <div className={styles.checkboxContainer}>
//             <input type="checkbox" id="terms" className={styles.checkbox} />
//             <label htmlFor="terms" className={styles.checkboxLabel}>
//               I accept the Terms & Conditions
//             </label>
//           </div>
//         </div>

//         <div className={styles.buttonContainer}>
//           <button
//             className={styles.submitButton}
//             onClick={() => router.push("/loan-status")}
//           >
//             Submit
//           </button>
//           <button
//             className={styles.declineButton}
//             onClick={() => router.push("/")}
//           >
//             Decline
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // components/ViewLoans.js
// import { useRouter } from "next/router";
// import styles from "../../styles/LoanManagement.module.css";

// export default function ViewLoans() {
//   const router = useRouter();

//   return (
//     <div className={styles.container}>
//     <div style={{ padding: "20px", textAlign: "center", background: "#f9f9f9" }}>
//       <h1>₹200,000</h1>
//       <p>Approved Amount</p>
//       <div style={{ textAlign: "left", margin: "20px auto", maxWidth: "400px" }}>
//         <p>
//           <strong>Disbursal Date:</strong> 01/23/2024
//         </p>
//         <p>
//           <strong>Loan Tenure:</strong> 30 Days
//         </p>
//         <h3>Repayment Schedule</h3>
//         <p>Due Date: 10th Aug 2024 | Amount: ₹6,500.00</p>
//         <input type="checkbox" id="terms" />
//         <label htmlFor="terms"> I accept the Terms & Conditions</label>
//       </div>
//       <button
//         style={{
//           padding: "10px 20px",
//           marginRight: "10px",
//           background: "#007bff",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//         onClick={() => router.push("/loan-status")}
//       >
//         Submit
//       </button>
//       <button
//         style={{
//           padding: "10px 20px",
//           background: "#ff4d4f",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//         onClick={() => router.push("/")}
//       >
//         Decline
//       </button>
//     </div>
//     </div>
//   );
// }
