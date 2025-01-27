import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Dashboard.module.css";

export default function Dashboard() {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState("");

  useEffect(() => {
    const state = router.query.state || {};
    const mobileFromStorage = window.localStorage.getItem("mobile");

    if (state.mobile) {
      setMobileNumber(state.mobile);
    } else if (mobileFromStorage) {
      setMobileNumber(mobileFromStorage);
    } else {
      router.push("/");
    }
  }, [router]);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.contentWrapper}>
        {/* Profile Section */}
        <div className={styles.profileSection}>
          <div className={styles.profileWrapper}>
            {/* Profile Icon */}
            <div
              className={styles.profileIcon}
              onClick={() => router.push("/user-profile")}
              title="Go to Profile"
            ><i className="bi bi-person-circle"></i></div>
            {/* Mobile Number and Greeting */}
            <div className={styles.greeting}>
              <p className={styles.mobileNumber}>+91 {mobileNumber}</p>
              <p className={styles.greeting}>{getGreeting()}</p>
            </div>
          </div>
            <div className={styles.bell}>
            <i class="bi bi-bell"></i>
            </div>
        </div>

        {/* Loan Information Section */}
        <div className={styles.loanInfo}>
          <div className={styles.loanDetail}>
            <p className={styles.loanLabel}>Maximum Loan</p>
            <p className={styles.loanValue}>₹1,00,000</p>
          </div>
          <div className={styles.loanDetail}>
            <p className={styles.loanLabel}>Maximum Tenure</p>
            <p className={styles.loanValue}>Max 90 Days</p>
          </div>
        </div>

        {/* Instant Apply Section */}
        <div className={styles.instantApplySection}>
          <p className={styles.instantApplyHeading}>Instant Apply</p>
          <p className={styles.instantApplyDetails}>
            KYC | Basic Details | Disbursal
          </p>
          <p className={styles.instantApplyDetails}>
            Minimum Document, Online Process
          </p>
          <button
            className={styles.applyButton}
            onClick={() => router.push("/applyforaloan")}
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}


// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../styles/Dashboard.module.css";

// export default function Dashboard() {
//   const router = useRouter();
//   const [mobileNumber, setMobileNumber] = useState("");

//   useEffect(() => {
//     const state = router.query.state || {};
//     const mobileFromStorage = window.localStorage.getItem("mobile");

//     if (state.mobile) {
//       setMobileNumber(state.mobile);
//     } else if (mobileFromStorage) {
//       setMobileNumber(mobileFromStorage);
//     } else {
//       router.push("/");
//     }
//   }, [router]);

//   const getGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) return "Good Morning";
//     if (hour < 18) return "Good Afternoon";
//     return "Good Evening";
//   };

//   return (
//     <div className={styles.dashboardContainer}>
//       <div className={styles.contentWrapper}>
//         {/* Profile Section */}
//         <div className={styles.profileSection}>
//           <div className={styles.profileWrapper}>
//             {/* Profile Icon */}
//             <div className={styles.profileIcon}></div>
//             {/* Mobile Number and Greeting */}
//             <div>
//               <p className={styles.mobileNumber}>+91 {mobileNumber}</p>
//               <p className={styles.greeting}>{getGreeting()}</p>
//             </div>
//           </div>
//           {/* Notification Icon */}
//           <div className={styles.notificationIcon}></div>
//         </div>

//         {/* Loan Information Section */}
//         <div className={styles.loanInfo}>
//           <div className={styles.loanDetail}>
//             <p className={styles.loanLabel}>Maximum Loan</p>
//             <p className={styles.loanValue}>₹1,00,000</p>
//           </div>
//           <div className={styles.loanDetail}>
//             <p className={styles.loanLabel}>Maximum Tenure</p>
//             <p className={styles.loanValue}>Max 90 Days</p>
//           </div>
//         </div>

//         {/* Instant Apply Section */}
//         <div className={styles.instantApplySection}>
//           <p className={styles.instantApplyHeading}>Instant Apply</p>
//           <p className={styles.instantApplyDetails}>
//             KYC | Basic Details | Disbursal
//           </p>
//           <p className={styles.instantApplyDetails}>
//             Minimum Document, Online Process
//           </p>
//           <button
//             className={styles.applyButton}
//             onClick={() => router.push("/applyforaloan")}
//           >
//             Apply Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../styles/Dashboard.module.css";

// export default function Dashboard() {
//   const router = useRouter();
//   const [mobileNumber, setMobileNumber] = useState("");

//   useEffect(() => {
//     const state = router.query.state || {};
//     const mobileFromStorage = window.localStorage.getItem("mobile");

//     if (state.mobile) {
//       setMobileNumber(state.mobile);
//     } else if (mobileFromStorage) {
//       setMobileNumber(mobileFromStorage);
//     } else {
//       router.push("/");
//     }
//   }, [router]);

//   const getGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) return "Good Morning";
//     if (hour < 18) return "Good Afternoon";
//     return "Good Evening";
//   };

//   return (
//     <div className={styles.dashboardContainer}>
//       {/* Profile Section */}
//       <div className={styles.profileSection}>
//         <div className={styles.profileWrapper}>
//           {/* Profile Icon */}
//           <div className={styles.profileIcon}></div>
//           {/* Mobile Number and Greeting */}
//           <div>
//             <p className={styles.mobileNumber}>+91 {mobileNumber}</p>
//             <p className={styles.greeting}>{getGreeting()}</p>
//           </div>
//         </div>
//         {/* Notification Icon */}
//         <div className={styles.notificationIcon}></div>
//       </div>

//       {/* Loan Information Section */}
//       <div className={styles.loanInfo}>
//         <div className={styles.loanDetail}>
//           <p className={styles.loanLabel}>Maximum Loan</p>
//           <p className={styles.loanValue}>₹1,00,000</p>
//         </div>
//         <div className={styles.loanDetail}>
//           <p className={styles.loanLabel}>Maximum Tenure</p>
//           <p className={styles.loanValue}>Max 90 Days</p>
//         </div>
//       </div>

//       {/* Instant Apply Section */}
//       <div className={styles.instantApplySection}>
//         <p className={styles.instantApplyHeading}>Instant Apply</p>
//         <p className={styles.instantApplyDetails}>
//           KYC | Basic Details | Disbursal
//         </p>
//         <p className={styles.instantApplyDetails}>
//           Minimum Document, Online Process
//         </p>
//         <button
//           className={styles.applyButton}
//           onClick={() => router.push("/applyforaloan")}
//         >
//           Apply Now
//         </button>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../styles/Dashboard.module.css";

// export default function Dashboard() {
//   const router = useRouter();
//   const [mobileNumber, setMobileNumber] = useState("");

//   useEffect(() => {
//     // Retrieve mobile number from router state or localStorage
//     const state = router.query.state || {};
//     const mobileFromStorage = window.localStorage.getItem("mobile");

//     if (state.mobile) {
//       setMobileNumber(state.mobile);
//     } else if (mobileFromStorage) {
//       setMobileNumber(mobileFromStorage);
//     } else {
//       // Redirect to homepage if no mobile number is found
//       router.push("/");
//     }
//   }, [router]);

//   const getGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) return "Good Morning";
//     if (hour < 18) return "Good Afternoon";
//     return "Good Evening";
//   };

//   return (
//     <div className={styles.dashboardContainer}>
//       <div className={styles.profileSection}>
//         <div className={styles.profileInfo}>
//           <p className={styles.userName}>+91 {mobileNumber}</p>
//           <p className={styles.greeting}>{getGreeting()}</p>
//         </div>
//         <div className={styles.profileIcon}></div>
//         <div className={styles.notificationIcon}></div>
//       </div>
//       <div className={styles.loanInfo}>
//         <div className={styles.loanDetail}>
//           <p className={styles.loanLabel}>Maximum Loan</p>
//           <p className={styles.loanValue}>₹1,00,000</p>
//         </div>
//         <div className={styles.loanDetail}>
//           <p className={styles.loanLabel}>Maximum Tenure</p>
//           <p className={styles.loanValue}>Max 90 Days</p>
//         </div>
//       </div>
//       <div className={styles.instantApplySection}>
//         <p className={styles.instantApplyHeading}>Instant Apply</p>
//         <p className={styles.instantApplyDetails}>
//           KYC | Basic Details | Disbursal
//         </p>
//         <p className={styles.instantApplyDetails}>
//           Minimum Document, Online Process
//         </p>
//         <button
//           className={styles.applyButton}
//           onClick={() => router.push("/applyforaloan")}
//         >
//           Apply Now
//         </button>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../styles/Dashboard.module.css";

// export default function Dashboard() {
//   const router = useRouter();
//   const [mobileNumber, setMobileNumber] = useState("");

//   useEffect(() => {
//     // Get the mobile number from the query params
//     const { mobile } = router.query;
//     if (mobile) {
//       setMobileNumber(mobile); // Set mobile number
//     } else {
//       router.push("/"); // Redirect to home if no mobile is found
//     }
//   }, [router]);

//   const getGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) return "Good Morning";
//     if (hour < 18) return "Good Afternoon";
//     return "Good Evening";
//   };

//   return (
//     <div className={styles.dashboardContainer}>
//       <div className={styles.profileSection}>
//         <div className={styles.profileInfo}>
//           <p className={styles.userName}>+91 {mobileNumber}</p>
//           <p className={styles.greeting}>{getGreeting()}</p>
//         </div>
//         <div className={styles.profileIcon}></div>
//         <div className={styles.notificationIcon}></div>
//       </div>
//       <div className={styles.loanInfo}>
//         <div className={styles.loanDetail}>
//           <p className={styles.loanLabel}>Maximum Loan</p>
//           <p className={styles.loanValue}>₹1,00,000</p>
//         </div>
//         <div className={styles.loanDetail}>
//           <p className={styles.loanLabel}>Maximum Tenure</p>
//           <p className={styles.loanValue}>Max 90 Days</p>
//         </div>
//       </div>
//       <div className={styles.instantApplySection}>
//         <p className={styles.instantApplyHeading}>Instant Apply</p>
//         <p className={styles.instantApplyDetails}>
//           KYC | Basic Details | Disbursal
//         </p>
//         <p className={styles.instantApplyDetails}>
//           Minimum Document, Online Process
//         </p>
//         <button
//           className={styles.applyButton}
//           onClick={() => router.push("/applyforaloan")}
//         >
//           Apply Now
//         </button>
//       </div>
//     </div>
//   );
// }


// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../styles/Dashboard.module.css"; // Ensure this CSS file exists

// export default function Dashboard() {
//   const router = useRouter();
//   const [greeting, setGreeting] = useState("");

//   // Determine greeting based on IST time
//   useEffect(() => {
//     const currentHour = new Date().getHours();
//     if (currentHour < 12) {
//       setGreeting("Good Morning");
//     } else if (currentHour < 18) {
//       setGreeting("Good Afternoon");
//     } else {
//       setGreeting("Good Evening");
//     }
//   }, []);

//   const handleApplyNow = () => {
//     router.push("/applyforaloan");
//   };

//   return (
//     <div className={styles.dashboardContainer}>
//       {/* Header Section */}
//       <header className={styles.header}>
//         <div className={styles.profileSection}>
//           <img
//             src="/profile-icon.png" // Replace with actual profile image path
//             alt="Profile Icon"
//             className={styles.profileIcon}
//           />
//           <div>
//             <p className={styles.userName}>+91 9797997007</p> {/* Replace with dynamic mobile number */}
//             <p className={styles.greeting}>{greeting}</p>
//           </div>
//         </div>
//         <div className={styles.notificationIcon}>
//           <img src="/bell-icon.png" alt="Notifications" /> {/* Bell icon path */}
//         </div>
//       </header>

//       {/* Loan Information Section */}
//       <section className={styles.loanInfoSection}>
//         <div className={styles.loanInfoCard}>
//           <h4>Maximum Loan</h4>
//           <p>₹1,00,000</p>
//         </div>
//         <div className={styles.loanInfoCard}>
//           <h4>Maximum Tenure</h4>
//           <p>Max 90 Days</p>
//         </div>
//       </section>

//       {/* Instant Apply Section */}
//       <section className={styles.instantApplySection}>
//         <h3>Instant Apply</h3>
//         <p>KYC | Basic Details | Disbursal</p>
//         <p>Minimum Document, Online Process</p>
//         <button className={styles.applyNowButton} onClick={handleApplyNow}>
//           Apply Now
//         </button>
//       </section>
//     </div>
//   );
// }


// import React from 'react'

// function dashboard() {
//     return (
//         <div>
//           <h1>Welcome to the Dashboard</h1>
//           <p>More content coming soon...</p>
//         </div>
//       );
//     }
    

// export default dashboard