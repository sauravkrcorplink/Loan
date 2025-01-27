import { useRouter } from "next/router";
import styles from "../styles/LoanStatus.module.css";

export default function LoanStatus() {
  const router = useRouter();

  const handleBackToDashboard = () => {
    router.push("/dashboard"); // Adjust this route as needed for your app's dashboard
  };
  const handleLoanManagement = () => {
    router.push("/LoanManagement");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Loan Application Status</h1>
      <p className={styles.message}>
        Thank you for submitting your loan application! Your application is
        currently under evaluation. Our team is working on it, and we’ll notify
        you as soon as we have a decision.
      </p>

      <div className={styles.statusContainer}>
        <h2 className={styles.subheading}>Current Status:</h2>
        <p className={styles.status}>Under Evaluation</p>
        <p className={styles.note}>
          (Please check back later for updates or wait for our notification.)
        </p>
      </div>

      <button onClick={handleBackToDashboard} className={styles.dashboardButton}>
        Back to Dashboard
      </button>
      <button onClick={handleLoanManagement} className={styles.loan}>
        Loan Management
      </button>
    </div>
  );
}
