import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/AadharVerification.module.css";
import Image from "next/image";

export default function AadharVerification() {
  const [aadharNumber, setAadharNumber] = useState("");
  const router = useRouter(); // Use the useRouter hook for navigation

  const validateAadhar = (aadhar) => /^[0-9]{12}$/.test(aadhar);

  const handleContinue = () => {
    if (!validateAadhar(aadharNumber)) {
      alert("Please enter a valid 12-digit Aadhar number.");
      return;
    }
    console.log("Aadhar number validated. Proceeding...");
    router.push("/VerifyOTP"); // Redirect to the Verify OTP page
  };

  return (
    <div className={styles.container}>
      {/* Progress Indicator */}
      <div className={styles.progressContainer}>
        {[1, 2, 3, 4].map((step, index) => (
          <div key={index} className={styles.step}>
            <div
              className={`${styles.circle} ${
                step === 3 ? styles.activeCircle : ""
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

      {/* Aadhar Card Example Image */}
      <div className={styles.exampleImage}>
        <Image
          src="/images/aadharcard.png"
          width={600}
          height={500}
          alt="Aadhar Card"
        />
        <div className={styles.highlightCircle}></div>
        <p className={styles.imageCaption}>Example Aadhar Number: 123456789012</p>
      </div>

      {/* Aadhar Input Field */}
      <div className={styles.inputGroup}>
        <label htmlFor="aadharNumber" className={styles.label}>
          Enter Aadhar Number
        </label>
        <input
          id="aadharNumber"
          type="text"
          className={styles.input}
          placeholder="Enter your 12-digit Aadhar number"
          value={aadharNumber}
          onChange={(e) =>
            setAadharNumber(e.target.value.replace(/[^0-9]/g, "")) // Allow only numeric input
          }
          maxLength={12} // Limit input to 12 characters
        />
      </div>

      {/* Continue Button */}
      <button className={styles.continueButton} onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}


// import { useState } from "react";
// import styles from "../styles/AadharVerification.module.css";
// import Image from "next/image";

// export default function AadharVerification() {
//   const [aadharNumber, setAadharNumber] = useState("");

//   const validateAadhar = (aadhar) => /^[0-9]{12}$/.test(aadhar);

//   const handleContinue = () => {
//     if (!validateAadhar(aadharNumber)) {
//       alert("Please enter a valid 12-digit Aadhar number.");
//       return;
//     }
//     // Proceed to the next step
//     console.log("Aadhar number validated. Proceeding...");
//   };

//   return (
//     <div className={styles.container}>
//       {/* Progress Indicator */}
//       <div className={styles.progressContainer}>
//         {[1, 2, 3, 4].map((step, index) => (
//           <div key={index} className={styles.step}>
//             <div
//               className={`${styles.circle} ${
//                 step === 3 ? styles.activeCircle : ""
//               }`}
//             >
//               {step}
//             </div>
//             {step !== 4 && <div className={styles.line}></div>}
//           </div>
//         ))}
//       </div>

//       {/* Heading and Subheading */}
//       <h1 className={styles.heading}>Complete your KYC</h1>
//       <p className={styles.subheading}>
//         Your Data is Completely Secure with us
//       </p>

// {/* Aadhar Card Example Image */}
// <div className={styles.exampleImage}>
//       <Image
//       src="/images/aadharcard.png"
//       width={600}
//       height={500}
//       alt="Aadhar Card"
//     />
//         <div className={styles.highlightCircle}></div>
//         <p className={styles.imageCaption}>Example Aadhar Number: 123456789012</p>
//       </div>

//       {/* Aadhar Input Field */}
//       <div className={styles.inputGroup}>
//         <label htmlFor="aadharNumber" className={styles.label}>
//           Enter Aadhar Number
//         </label>
//         <input
//           id="aadharNumber"
//           type="text"
//           className={styles.input}
//           placeholder="Enter your 12-digit Aadhar number"
//           value={aadharNumber}
//           onChange={(e) =>
//             setAadharNumber(e.target.value.replace(/[^0-9]/g, "")) // Allow only numeric input
//           }
//           maxLength={12} // Limit input to 12 characters
//         />
//       </div>

//       {/* Continue Button */}
//       <button className={styles.continueButton} onClick={handleContinue}>
//         Continue
//       </button>
//     </div>
//   );
// }
