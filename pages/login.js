import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css"; // Ensure you have this CSS file

export default function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]); // For the 4 OTP inputs
  const [timer, setTimer] = useState(60); // Countdown timer (in seconds)
  const [error, setError] = useState("");
  const router = useRouter();

  // Simulated OTP value for verification
  const correctOtp = "1234";

  const startTimer = () => {
    setTimer(60);
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobile.length === 10) {
      setShowOtpDialog(true);
      startTimer(); // Start the countdown timer
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  const handleOtpChange = (index, value) => {
    // Allow only numbers and ensure input length is 1
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically move to the next input if a digit is entered
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleNext = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === correctOtp) {
      router.push(
        {
          pathname: "/dashboard",
          query: {}, // Ensure query string is cleared
        },
        "/dashboard", // Clean URL
        { shallow: true } // Maintain clean URL with state
      );
  
      // Save the mobile number in localStorage for persistence
      window.localStorage.setItem("mobile", mobile);
    } else {
      setError("Incorrect OTP. Please try again.");
      setOtp(["", "", "", ""]); // Clear OTP inputs
      document.getElementById("otp-0").focus(); // Reset focus to the first input
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <h1 className={styles.title}>LoanOne</h1>
        {!showOtpDialog ? (
          <form className={styles.loginForm} onSubmit={handleLogin}>
            <label htmlFor="mobile" className={styles.label}>
              Enter Your Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="10 digit mobile number"
              className={styles.input}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <p>Enter the Aadhaar Link Mobile Number For better Experience</p>
            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </form>
        ) : (
          <div className={styles.otpContainer}>
            <h4 className={styles.otpTitle}>Verify Mobile Number</h4>
            <p className={styles.otpSubtitle}>
              A 4-digit code has been sent to your mobile number ({mobile})
            </p>
            <p className={styles.otpInstruction}>
              Kindly enter the code to continue
            </p>
            
            <div className={styles.otpInputContainer}>
  {otp.map((digit, index) => (
    <input
      key={index}
      id={`otp-${index}`}
      type="text"
      maxLength="1"
      className={styles.otpInput}
      value={digit}
      onChange={(e) => handleOtpChange(index, e.target.value)}
      onFocus={(e) => e.target.select()}
      onKeyDown={(e) => {
        if (e.key === "Backspace" && index > 0 && !otp[index]) {
          document.getElementById(`otp-${index - 1}`).focus();
        }
      }}
    />
  ))}
</div>

  
            {error && <p className={styles.errorMessage}>{error}</p>}
            <div className={styles.otpFooter}>
              <button
                className={styles.resendButton}
                onClick={() => {
                  startTimer();
                  setError("");
                }}
                disabled={timer > 0}
              >
                Resend OTP
              </button>
              <span className={styles.timer}>
                {`00:${timer.toString().padStart(2, "0")}`}
              </span>
            </div>
            <p className={styles.otpInstruction}>
              Your data Safe and Secure with us
            </p>
            <button onClick={handleNext} className={styles.nextButton}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
  




// import { useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../styles/Login.module.css"; // Create this CSS file for styling

// export default function LoginPage() {
//   const [mobile, setMobile] = useState("");
//   const [showOtpDialog, setShowOtpDialog] = useState(false);
//   const [otp, setOtp] = useState(["", "", "", ""]); // For the 4 OTP inputs
//   const [timer, setTimer] = useState(60); // Countdown timer (in seconds)
//   const router = useRouter();

//   // Start timer when OTP dialog is displayed
//   const startTimer = () => {
//     setTimer(60);
//     const countdown = setInterval(() => {
//       setTimer((prev) => {
//         if (prev <= 1) {
//           clearInterval(countdown);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (mobile.length === 10) {
//       setShowOtpDialog(true);
//       startTimer(); // Start the countdown timer
//     } else {
//       alert("Please enter a valid mobile number");
//     }
//   };

//   const handleOtpChange = (index, value) => {
//     if (!isNaN(value) && value.length <= 1) {
//       const newOtp = [...otp];
//       newOtp[index] = value;
//       setOtp(newOtp);
//     }
//   };

//   const handleNext = () => {
//     if (otp.join("").length === 4) {
//       // Assuming OTP verification is successful
//       router.push("/home");
//     } else {
//       alert("Please enter a valid 4-digit OTP");
//     }
//   };

//   return (
//     <div className={styles.loginContainer}>
//       <h1 className={styles.title}>LoanOne</h1>
//       {!showOtpDialog ? (
//         <form className={styles.loginForm} onSubmit={handleLogin}>
//           <label htmlFor="mobile" className={styles.label}>
//             Enter Your Mobile
//           </label>
//           <input
//             type="tel"
//             id="mobile"
//             name="mobile"
//             placeholder="Enter Aadhaar-linked Mobile Number"
//             className={styles.input}
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//           />
//           <button type="submit" className={styles.loginButton}>
//             Login
//           </button>
//         </form>
//       ) : (
//         <div className={styles.otpContainer}>
//           <h2 className={styles.otpTitle}>Verify Mobile Number</h2>
//           <p className={styles.otpSubtitle}>
//             A 4-digit code has been sent to your mobile number ({mobile})
//           </p>
//           <p className={styles.otpInstruction}>
//             Kindly enter the code to continue
//           </p>
//           <div className={styles.otpInputContainer}>
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 maxLength="1"
//                 className={styles.otpInput}
//                 value={digit}
//                 onChange={(e) => handleOtpChange(index, e.target.value)}
//               />
//             ))}
//           </div>
//           <div className={styles.otpFooter}>
//             <button
//               className={styles.resendButton}
//               onClick={() => {
//                 startTimer();
//               }}
//               disabled={timer > 0}
//             >
//               Resend OTP
//             </button>
//             <span className={styles.timer}>
//               {`00:${timer.toString().padStart(2, "0")}`}
//             </span>
//           </div>
//           <button onClick={handleNext} className={styles.nextButton}>
//             Next
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


// import { useRouter } from "next/router";
// import styles from "../styles/Login.module.css"; // Create this CSS file for styling

// export default function LoginPage() {
//   const router = useRouter();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Add your login validation logic here (e.g., API call)
//     router.push("/home"); // Redirect to homepage after login
//   };

//   return (
//     <div className={styles.loginContainer}>
//       <h1 className={styles.title}>LoanOne</h1>
//       <form className={styles.loginForm} onSubmit={handleLogin}>
//         <label htmlFor="mobile" className={styles.label}>
//           Enter Your Mobile
//         </label>
//         <input
//           type="tel"
//           id="mobile"
//           name="mobile"
//           placeholder="Enter Aadhaar-linked Mobile Number"
//           className={styles.input}
//         />
//         <button type="submit" className={styles.loginButton}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }


// import ShortNavbar from "../components/common/ShortNavbar";
// import LoginForm from "../components/login/LoginForm";

// export default function Login() {
//   return (
//     <>
//       <ShortNavbar />
//       <LoginForm />
//     </>
//   );
// }

// Login.getLayout = function getLayout(page) {
//   return <>{page}</>;
// };
