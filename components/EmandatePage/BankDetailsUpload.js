import React from 'react';
import styles from "../../styles/BankDetails.module.css";

const BankDetailsUpload = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Verify Bank Details</h1>
        <p className={styles.text}>Upload bank statement from your bank for the period from 1st Jun23 to 30th Aug23.</p>
        <button className={styles.button}>Upload Bank Statement</button>
        <p className={styles.text}>Your data is safe and secure with us.</p>
      </div>
    </div>
  );
};

export default BankDetailsUpload;
