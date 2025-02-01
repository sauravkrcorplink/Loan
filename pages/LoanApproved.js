// pages/LoanApproved.js
import React from "react";
import styles from "../styles/LoanApproved.module.css";
import Image from "next/image";

const LoanApproved = () => {
  const handleContinue = () => {
    alert("Submitted successfully!");
    // You can add more logic here, such as navigating to another page
  };

  return (
    <div className={styles.container}>
      <p style={{ textAlign: "center", fontSize: "12px" }}>
        Special Offer! Only For You
      </p>
      <p style={{ textAlign: "center", fontSize: "12px" }}>
        Ends in : 2h:25m:6s
      </p>
      <div className={styles.containerBox}>
        <div className={styles.header}>
          <h1>Loan Approved</h1>
        </div>
        <div className={styles.iconContainer}>
          <Image
            src="/images/loanapproved.png" // Replace with the actual path to your icon
            alt="No Dues Icon"
            width={120} // Specify width
            height={70} // Specify height
            className={styles.noDuesIcon}
          />
        </div>
        <div className={styles.content}>
          <p>You have been approved for a loan of amount</p>
          <h5>₹12,500</h5>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <p>Approved amount</p>
            <h6>₹ 12,500.00</h6>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <p>Processing fee + GST</p>
            <h6>- ₹ 2455.00</h6>
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <p>Final loan amount</p>
            <h6>₹ 10,045.00</h6>
          </div>
          <h6>Upgrade my Loan Amount</h6>
        </div>
      </div>
      <div className={styles.repaymentPlan}>
        <h3>Repayment plan</h3>
        <div style={{display:'flex',justifyContent:'space-between'}}>
          <div>
            <p>Repayment Date</p>
            <p>8th May, 2025</p>
          </div>
          <div>
            {" "}
            <p>Repayment Amount</p>
            <p>₹16,250.00</p>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}> {/* Add this div */}
        <button className={styles.continueButton} onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default LoanApproved;



// // pages/LoanApproved.js
// import React from "react";
// import styles from "../styles/LoanApproved.module.css";
// import Image from "next/image";

// const LoanApproved = () => {
//   const handleContinue = () => {
//     alert("Submitted successfully!");
//     // You can add more logic here, such as navigating to another page
//   };

//   return (
//     <div className={styles.container}>
//       <p style={{ textAlign: "center", fontSize: "12px" }}>
//         Special Offer! Only For You
//       </p>
//       <p style={{ textAlign: "center", fontSize: "12px" }}>
//         Ends in : 2h:25m:6s
//       </p>
//       <div className={styles.containerBox}>
//         <div className={styles.header}>
//           <h1>Loan Approved</h1>
//         </div>
//         <div className={styles.iconContainer}>
//           <Image
//             src="/images/loanapproved.png" // Replace with the actual path to your icon
//             alt="No Dues Icon"
//             width={120} // Specify width
//             height={70} // Specify height
//             className={styles.noDuesIcon}
//           />
//         </div>
//         <div className={styles.content}>
//           <p>You have been approved for a loan of amount</p>
//           <h5>₹12,500</h5>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "baseline",
//               justifyContent: "space-between",
//             }}
//           >
//             <p>Approved amount</p>
//             <h6>₹ 12,500.00</h6>
//           </div>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "baseline",
//               justifyContent: "space-between",
//             }}
//           >
//             <p>Processing fee + GST</p>
//             <h6>- ₹ 2455.00</h6>
//           </div>
//           <hr />
//           <div
//             style={{
//               display: "flex",
//               alignItems: "baseline",
//               justifyContent: "space-between",
//             }}
//           >
//             <p>Final loan amount</p>
//             <h6>₹ 10,045.00</h6>
//           </div>
//           <h6>Upgrade my Loan Amount</h6>
//         </div>
//       </div>
//       <div className={styles.repaymentPlan}>
//         <h3>Repayment plan</h3>
//         <div style={{display:'flex',justifyContent:'space-between'}}>
//           <div>
//             <p>Repayment Date</p>
//             <p>8th May, 2025</p>
//           </div>
//           <div>
//             {" "}
//             <p>Repayment Amount</p>
//             <p>₹16,250.00</p>
//           </div>
//         </div>
//       </div>
//       <button className={styles.continueButton} onClick={handleContinue}>
//         Continue
//       </button>
//     </div>
//   );
// };

// export default LoanApproved;
