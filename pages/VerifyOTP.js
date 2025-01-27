import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styles from "../styles/VerifyOTP.module.css";
import Image from "next/image";

export default function VerifyOTP() {
  const [otp, setOtp] = useState(Array(6).fill("")); // OTP digits
  const [timer, setTimer] = useState(59); // Countdown timer
  const [error, setError] = useState(""); // Error message
  const router = useRouter(); // For navigation

  const correctOtp = "123456"; // Predefined correct OTP

  // Refs for OTP inputs
  const inputRefs = useRef([]);

  // Countdown Timer Logic
  useEffect(() => {
    console.log("Timer updated:", timer);
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
  
    return () => clearInterval(countdown);
  },);

  // Handle OTP Input Changes
  const handleInputChange = (index, value) => {
    if (isNaN(value)) return; // Ignore non-numeric input

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Ensure only 1 digit per box
    setOtp(newOtp);

    // Automatically focus the next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus(); // Use ref to focus next input
    }
  };

  // Handle OTP Submission
  const handleSubmit = () => {
    const OtpCode = otp.join("");
    if (OtpCode === correctOtp) {
      router.push("/SubmitSelfie"); // Navigate to the next page on success
    } else {
      setError("Incorrect OTP. Please try again.");
    }
  };

  // Resend OTP and Reset Timer
  const handleResendOTP = () => {
    setOtp(Array(6).fill("")); // Clear OTP inputs
    setTimer(59); // Restart the timer
    setError(""); // Clear error message
    console.log("OTP resent");
  };

  return (
    <div className={styles.container}>
      {/* Progress Indicator */}
      <div className={styles.progressContainer}>
        {[1, 2, 3, 4].map((step, index) => (
          <div key={index} className={styles.step}>
            <div
              className={`${styles.circle} ${
                step === 4 ? styles.activeCircle : ""
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
      <p className={styles.subheading}>Your Data is Completely Secure with us</p>

      {/* OTP Image */}
      <div className={styles.otpImage}>
        <Image
          src="/images/otp.png"
          width={300}
          height={200}
          alt="OTP Verification"
        />
      </div>

      {/* OTP Section */}
      <h2 className={styles.otpHeading}>Verify Aadhar OTP</h2>
      <p className={styles.otpDescription}>
        A six-digit code was sent to your Aadhar-registered Mobile Number
      </p>
      <p className={styles.otpInstruction}>Kindly enter the code to continue.</p>

      {/* OTP Input Boxes */}
      <div className={styles.otpContainer}>
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)} // Set ref for each input
            type="text"
            maxLength="1"
            className={styles.otpInput}
            value={digit}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onFocus={(e) => e.target.select()}
            onKeyDown={(e) => {
              if (e.key === "Backspace" && index > 0 && !otp[index]) {
                inputRefs.current[index - 1]?.focus(); // Use ref to focus previous input
              }
            }}
          />
        ))}
      </div>

      {/* Error Message */}
      {error && <p className={styles.errorMessage}>{error}</p>}

      {/* Resend OTP and Timer */}
      <div className={styles.resendContainer}>
        <button
          className={styles.resendButton}
          onClick={handleResendOTP}
          disabled={timer > 0}
        >
          Resend OTP
        </button>
        <span className={styles.timer}>
          {timer > 0 ? `00:${timer.toString().padStart(2, "0")}` : "Ready"}
        </span>
      </div>

      {/* Next Button */}
      <button className={styles.continueButton} onClick={handleSubmit}>
        Next
      </button>
    </div>
  );
}





// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import styles from "../styles/VerifyOTP.module.css";
// import Image from "next/image";

// export default function VerifyOTP() {
//   const [otp, setOtp] = useState(Array(6).fill(""));
//   const [timer, setTimer] = useState(59);
//   const router = useRouter(); // Initialize useRouter

//   // Countdown Timer Logic
//   useEffect(() => {
//     if (timer > 0) {
//       const countdown = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);

//       return () => clearInterval(countdown);
//     }
//   }, [timer]);

//   // Handle OTP Input Change
//   const handleInputChange = (index, value) => {
//     if (isNaN(value)) return; // Ignore non-numeric input

//     const newOtp = [...otp];
//     newOtp[index] = value.slice(-1); // Only take the last digit
//     setOtp(newOtp);

//     // Automatically move to the next input box
//     if (value && index < otp.length - 1) {
//       document.getElementById(`otp-input-${index + 1}`).focus();
//     }
//   };

//   // Handle OTP Submission
//   const handleSubmit = () => {
//     const otpCode = otp.join("");
//     if (otpCode.length < 6) {
//       alert("Please enter a valid 6-digit OTP.");
//       return;
//     }
//     console.log("OTP verified:", otpCode);
//     router.push("/NextStep"); // Navigate to the next step after OTP verification
//   };

//   // Resend OTP and Reset Timer
//   const handleResendOTP = () => {
//     setOtp(Array(6).fill(""));
//     setTimer(59); // Restart the timer
//     console.log("OTP resent");
//   };

//   return (
//     <div className={styles.container}>
//       {/* Progress Indicator */}
//       <div className={styles.progressContainer}>
//         {[1, 2, 3, 4].map((step, index) => (
//           <div key={index} className={styles.step}>
//             <div
//               className={`${styles.circle} ${
//                 step === 4 ? styles.activeCircle : ""
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
//       <p className={styles.subheading}>Your Data is Completely Secure with us</p>

//       {/* OTP Section */}
//       <h2 className={styles.otpHeading}>Verify Aadhar OTP</h2>
//       <p className={styles.otpDescription}>
//         A six-digit code was sent to your Aadhar-registered mobile number.
//       </p>
//       <p className={styles.otpInstruction}>Kindly enter the code to continue.</p>

//       {/* OTP Input Boxes */}
//       <div className={styles.otpContainer}>
//         {otp.map((digit, index) => (
//           <input
//             key={index}
//             id={`otp-input-${index}`}
//             type="text"
//             className={styles.otpInput}
//             maxLength="1"
//             value={digit}
//             onChange={(e) => handleInputChange(index, e.target.value)}
//           />
//         ))}
//       </div>

//       {/* Resend OTP and Timer */}
//       <div className={styles.resendContainer}>
//         <button
//           className={styles.resendButton}
//           onClick={handleResendOTP}
//           disabled={timer > 0}
//         >
//           Resend OTP
//         </button>
//         <span className={styles.timer}>
//           {timer > 0 ? `00:${timer.toString().padStart(2, "0")}` : "Ready"}
//         </span>
//       </div>

//       {/* Next Button */}
//       <button className={styles.nextButton} onClick={handleSubmit}>
//         Next
//       </button>
//     </div>
//   );
// }


// import { useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../styles/AadharVerification.module.css";
// import Image from "next/image";

// export default function VerifyOTP() {
//     const [otp, setOtp] = useState(Array(6).fill(""));
//     const [timer, setTimer] = useState(59);

//     console.log("Aadhar number validated. Proceeding...");
//     router.push("/VerifyOTP"); // Redirect to the Verify OTP page
//   };

//   useEffect(() => {
//          const countdown = setInterval(() => {
//            setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
//          }, 1000);
    
//          return () => clearInterval(countdown);
//        }, []);
    
//        const handleInputChange = (index, value) => {
//          if (isNaN(value)) return;
    
//          const newOtp = [...otp];
//          newOtp[index] = value.slice(-1);  //Ensure only 1 digit
//          setOtp(newOtp);
    
//          // Automatically move to the next box if a digit is entered
//          if (value && index < otp.length - 1) {
//            document.getElementById(`otp-input-${index + 1}`).focus();
//          }
//        };
    
//        const handleSubmit = () => {
//          const otpCode = otp.join("");
//          if (otpCode.length < 6) {
//            alert("Please enter a valid 6-digit OTP.");
//            return;
//          }
//          console.log("OTP verified:", otpCode);
//          // Proceed to the next step
//        };
    
//        const handleResendOTP = () => {
//          setOtp(Array(6).fill(""));
//          setTimer(59);
//          console.log("OTP resent");
//        };

//   return (
//     <div className={styles.container}>
//       {/* Progress Indicator */}
//       <div className={styles.progressContainer}>
//         {[1, 2, 3, 4].map((step, index) => (
//           <div key={index} className={styles.step}>
//             <div
//               className={`${styles.circle} ${
//                 step === 4 ? styles.activeCircle : ""
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

//       {/* Aadhar Card Example Image */}
//       <div className={styles.exampleImage}>
//         <Image
//           src="/images/otp.png"
//           width={100}
//           height={60}
//           alt="Aadhar Card"
//         />
//         <div className={styles.highlightCircle}></div>
//         <p className={styles.imageCaption}>Example Aadhar Number: 123456789012</p>
//       </div>

//       OTP Section
//        <h2 className={styles.otpHeading}>Verify Aadhar OTP</h2>
//        <p className={styles.otpDescription}>
//          A six digit code sent to your Aadhar registered Mobile Number
//        </p>
//        <p className={styles.otpInstruction}>
//          Kindly enter the code to continue.
//        </p>

//        {/* OTP Input Boxes */}
//        <div className={styles.otpContainer}>
//          {otp.map((digit, index) => (
//            <input
//              key={index}
//              id={`otp-input-${index}`}
//              type="text"
//              className={styles.otpInput}
//              maxLength="1"
//              value={digit}
//              onChange={(e) => handleInputChange(index, e.target.value)}
//            />
//          ))}
//        </div>

//        {/* Resend OTP and Timer */}
//        <div className={styles.resendContainer}>
//          <button
//            className={styles.resendButton}
//            onClick={handleResendOTP}
//            disabled={timer > 0}
//          >
//            Resend OTP
//          </button>
//          <span className={styles.timer}>
//            {timer > 0 ? `00:${timer.toString().padStart(2, "0")}` : "Ready"}
//          </span>
//        </div>

//        {/* Next Button */}
//        <button className={styles.nextButton} onClick={handleSubmit}>
//          Next
//        </button>
//     </div>
//   );
// }

