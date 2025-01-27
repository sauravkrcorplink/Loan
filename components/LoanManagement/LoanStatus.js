import styles from "../../styles/LoanManagement.module.css";

export default function LoanStatus() {
  const loan = {
    amount: 200000,
    status: "Active",
    repaymentSchedule: [
      { date: "10th Aug 2024", amount: 6500, status: "Paid" },
      { date: "10th Sep 2024", amount: 6500, status: "Overdue" },
    ],
  };

  return (
    <div className={styles.loanStatusContainer}>
      {/* Header Section */}
      <header className={styles.header}>
        <h1 className={styles.loanAmount}>₹{loan.amount.toLocaleString()}</h1>
        <p className={styles.loanStatus}>
          Loan Status: <span className={styles.statusText}>{loan.status}</span>
        </p>
      </header>

      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        <div className={`${styles.step} ${styles.activeStep}`}>
          <div className={`${styles.circle} ${styles.activeCircle}`}>1</div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.step}>
          <div className={styles.circle}>2</div>
        </div>
      </div>

      {/* Repayment Schedule */}
      <div className={styles.scheduleContainer}>
        <h3 className={styles.scheduleTitle}>Repayment Schedule</h3>
        {loan.repaymentSchedule.map((item, index) => (
          <div key={index} className={styles.scheduleItem}>
            <p className={styles.scheduleDate}>{item.date}</p>
            <p className={styles.scheduleAmount}>₹{item.amount.toLocaleString()}</p>
            <p
              className={`${styles.scheduleStatus} ${
                item.status === "Paid" ? styles.statusPaid : styles.statusOverdue
              }`}
            >
              {item.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


// // components/LoanStatus.js
// import styles from "../../styles/LoanManagement.module.css";

// export default function LoanStatus() {
//     const loan = {
//       amount: 200000,
//       status: "Active",
//       repaymentSchedule: [
//         { date: "10th Aug 2024", amount: 6500, status: "Paid" },
//         { date: "10th Sep 2024", amount: 6500, status: "Overdue" },
//       ],
//     };
  
//     return (
//       <div className={styles.container}>
//       <div style={{ padding: "20px", background: "#f9f9f9" }}>
//         <h1>₹{loan.amount.toLocaleString()}</h1>
//         <p>
//           Loan Status: <strong>{loan.status}</strong>
//         </p>
//         <h3>Repayment Schedule</h3>
//         <div>
//           {loan.repaymentSchedule.map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 padding: "10px",
//                 borderBottom: "1px solid #ddd",
//               }}
//             >
//               <p>{item.date}</p>
//               <p>₹{item.amount.toLocaleString()}</p>
//               <p style={{ color: item.status === "Paid" ? "green" : "red" }}>
//                 {item.status}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
//     );
//   }
  