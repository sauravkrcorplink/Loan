import { useState } from "react";
import styles from "../styles/CompleteKYC.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CompleteKYC() {
    const router = useRouter();

  const [panNumber, setPanNumber] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const validatePAN = (pan) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan);

  const handleContinue = () => {
    if (!validatePAN(panNumber)) {
      alert("Please enter a valid PAN number (e.g., AAAPA1234A).");
      return;
    }
    if (!termsAccepted) {
      alert("Please accept the Terms & Conditions to proceed.");
      return;
    }
    router.push("/AadharVerification"); // Navigate to Step 3
    // Proceed to the next step
    console.log("PAN number and terms validated. Proceeding...");
  };

  return (
    <div className={styles.container}>
      {/* Progress Indicator */}
      <div className={styles.progressContainer}>
        {[1, 2, 3, 4].map((step, index) => (
          <div key={index} className={styles.step}>
            <div
              className={`${styles.circle} ${
                step === 2 ? styles.activeCircle : ""
              }`}
            >
              {step}
            </div>
            {step !== 4 && <div className={styles.line}></div>}
          </div>
        ))}
      </div>

      {/* Heading and Subheading */}
      <h1 className={styles.heading}>Complete your KYC</h1>
      <p className={styles.subheading}>
        Your Data is Completely Secure with us
      </p>

      {/* PAN Card Example Image */}
      <div className={styles.exampleImage}>
      <Image
      src="/images/pancard.png"
      width={500}
      height={500}
      alt="Pan Card"
    />
        <div className={styles.highlightCircle}></div>
        <p className={styles.imageCaption}>Example PAN Number: XXXXX0000X</p>
      </div>

      {/* PAN Input Field */}
      <div className={styles.inputGroup}>
        <label htmlFor="panNumber" className={styles.label}>
          Enter PAN
        </label>
        <input
          id="panNumber"
          type="text"
          className={styles.input}
          placeholder="Enter PAN (e.g., AAAPA1234A)"
          value={panNumber}
          onChange={(e) => setPanNumber(e.target.value.toUpperCase())} // Ensure uppercase
        />
      </div>

      {/* Terms & Conditions */}
      <div className={styles.checkboxContainer}>
          <input
            id="terms"
            type="checkbox"
            className={styles.checkbox}
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
          />
          <label
            htmlFor="terms"
            className={styles.checkboxLabel}
            onClick={() => setShowTermsModal(true)}
          >
            I Accept the <span className={styles.link}>Terms & Conditions</span>
          </label>
        </div>

      {/* Continue Button */}
      <button className={styles.continueButton} onClick={handleContinue}>
        Continue
      </button>
      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>
              You are agreeing with all details and information provided, and
              you are ready to go further.
            </p>
            <button
              className={styles.closeButton}
              onClick={() => setShowTermsModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
