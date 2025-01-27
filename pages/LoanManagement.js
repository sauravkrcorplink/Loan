import { useRouter } from "next/router";
import styles from '../styles/LoanManagement.module.css';

export default function LoanManagement() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.dashboardContent}>
        <h1 className={styles.pageTitle}>Loan Management Dashboard</h1>
        <div className={styles.buttonGroup}>
          {/* Button for Not Eligible */}
          <button
            className={styles.dashboardButton}
            onClick={() => navigateTo("/LoanManagement/not-eligible")}
          >
            Sorry, You Are Not Eligible
          </button>

          {/* Button for View Loan */}
          <button
            className={styles.dashboardButton}
            onClick={() => navigateTo("/LoanManagement/view-loan")}
          >
            View Loan with Terms
          </button>

          {/* Button for Loan Status */}
          <button
            className={styles.dashboardButton}
            onClick={() => navigateTo("/LoanManagement/loan-status")}
          >
            Loan Status
          </button>

          {/* Button for No Dues */}
          <button
            className={styles.dashboardButton}
            onClick={() => navigateTo("/LoanManagement/no-dues")}
          >
            No Due Payment
          </button>
        </div>
      </div>
    </div>
  );
}



// // pages/LoanManagement.js
// import { useRouter } from "next/router";
// import styles from '../styles/ApplyForLoan.module.css'

// export default function LoanManagement() {
//   const router = useRouter();

//   const navigateTo = (path) => {
//     router.push(path);
//   };

//   return (
//     <div className={styles.container}>
//     <div style={{ padding: "20px", textAlign: "center" }}>
//       <h1>Loan Management Dashboard</h1>
//       <div style={{ marginTop: "20px" }}>
//         {/* Button for Not Eligible */}
//         <button
//           style={buttonStyle}
//           onClick={() => navigateTo("/LoanManagement/not-eligible")}
//         >
//           Sorry, You Are Not Eligible
//         </button>

//         {/* Button for View Loan */}
//         <button
//           style={buttonStyle}
//           onClick={() => navigateTo("/LoanManagement/view-loan")}
//         >
//           View Loan with Terms
//         </button>

//         {/* Button for Loan Status */}
//         <button
//           style={buttonStyle}
//           onClick={() => navigateTo("/LoanManagement/loan-status")}
//         >
//           Loan Status
//         </button>

//         {/* Button for No Dues */}
//         <button
//           style={buttonStyle}
//           onClick={() => navigateTo("/LoanManagement/no-dues")}
//         >
//           No Due Payment
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// }

// const buttonStyle = {
//   padding: "10px 20px",
//   margin: "10px",
//   background: "#007bff",
//   color: "white",
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
// };
