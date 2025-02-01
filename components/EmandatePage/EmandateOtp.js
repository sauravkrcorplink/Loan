import React, { useState, useEffect, useRef } from 'react';
import styles from "../../styles/EmandatePage.module.css";

const EmandateOtp = ({ mobileNumber, onSuccess }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(60);
  const timerRef = useRef(null);

  const correctOtp = '1234';

  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === correctOtp) {
      alert('OTP Verified Successfully!');
      onSuccess(); // Show EmandateBankUsername component
    } else {
      setError('Incorrect OTP. Please try again.');
      setOtp(['', '', '', '']);
      document.getElementById('otp-0').focus();
    }
  };

  const startTimer = () => {
    clearInterval(timerRef.current);
    setTimer(60);
    timerRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Verify Bank Details</h1>
        <p className={styles.text}>OTP sent to: {mobileNumber}</p>
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
              onKeyDown={(e) => handleKeyDown(e, index)}
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
        <button className={styles.button} onClick={handleSubmit}>Verify</button>
      </div>
    </div>
  );
};

export default EmandateOtp;



// import React, { useState, useEffect, useRef } from 'react';
// import styles from "../../styles/EmandatePage.module.css";

// const EmandateOtp = ({ mobileNumber }) => {
//   const [otp, setOtp] = useState(['', '', '', '']);
//   const [error, setError] = useState('');
//   const [timer, setTimer] = useState(60);
//   const timerRef = useRef(null);

//   const correctOtp = '1234';

//   const handleOtpChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//     setError('');

//     if (value && index < otp.length - 1) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && index > 0 && !otp[index]) {
//       document.getElementById(`otp-${index - 1}`).focus();
//     }
//   };

//   const handleSubmit = () => {
//     const enteredOtp = otp.join('');
//     if (enteredOtp === correctOtp) {
//       alert('Verified!');
//     } else {
//       setError('Incorrect OTP. Please try again.');
//       setOtp(['', '', '', '']);
//       document.getElementById('otp-0').focus();
//     }
//   };

//   const startTimer = () => {
//     clearInterval(timerRef.current); // Clear existing timer
//     setTimer(60);
//     timerRef.current = setInterval(() => {
//       setTimer((prev) => {
//         if (prev <= 1) {
//           clearInterval(timerRef.current);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//   };

//   useEffect(() => {
//     startTimer();
//     return () => clearInterval(timerRef.current); // Clear timer on component unmount
//   }, []);

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h1 className={styles.heading}>Verify Bank Details</h1>
//         <p className={styles.text}>OTP sent to: {mobileNumber}</p>
//         <div className={styles.otpInputContainer}>
//           {otp.map((digit, index) => (
//             <input
//               key={index}
//               id={`otp-${index}`}
//               type="text"
//               maxLength="1"
//               className={styles.otpInput}
//               value={digit}
//               onChange={(e) => handleOtpChange(index, e.target.value)}
//               onFocus={(e) => e.target.select()}
//               onKeyDown={(e) => handleKeyDown(e, index)}
//             />
//           ))}
//         </div>
//         {error && <p className={styles.errorMessage}>{error}</p>}
//         <div className={styles.otpFooter}>
//           <button
//             className={styles.resendButton}
//             onClick={() => {
//               startTimer();
//               setError("");
//             }}
//             disabled={timer > 0}
//           >
//             Resend OTP
//           </button>
//           <span className={styles.timer}>
//             {`00:${timer.toString().padStart(2, "0")}`}
//           </span>
//         </div>
//         <button className={styles.button} onClick={handleSubmit}>Verify</button>
//       </div>
//     </div>
//   );
// };

// export default EmandateOtp;







// import React, { useState } from 'react';
// import styles from "../../styles/EmandatePage.module.css";

// const EmandateOtp = ({ mobileNumber }) => {
//   const [otp, setOtp] = useState(['', '', '', '']);

//   const handleChange = (index, value) => {
//     if (value.length > 1) return;
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h1 className={styles.heading}>Verify Bank Details</h1>
//         <p className={styles.text}>OTP sent to: {mobileNumber}</p>
//         <div className={styles.otpInputContainer}>
//   {otp.map((digit, index) => (
//     <input
//       key={index}
//       id={`otp-${index}`}
//       type="text"
//       maxLength="1"
//       className={styles.otpInput}
//       value={digit}
//       onChange={(e) => handleOtpChange(index, e.target.value)}
//       onFocus={(e) => e.target.select()}
//       onKeyDown={(e) => {
//         if (e.key === "Backspace" && index > 0 && !otp[index]) {
//           document.getElementById(`otp-${index - 1}`).focus();
//         }
//       }}
//     />
//   ))}
// </div>
//  {error && <p className={styles.errorMessage}>{error}</p>}
//             <div className={styles.otpFooter}>
//               <button
//                 className={styles.resendButton}
//                 onClick={() => {
//                   startTimer();
//                   setError("");
//                 }}
//                 disabled={timer > 0}
//               >
//                 Resend OTP
//               </button>
//               <span className={styles.timer}>
//                 {`00:${timer.toString().padStart(2, "0")}`}
//               </span>
//             </div>
//         <button className={styles.button} onClick={() => alert('Verified!')}>Verify</button>
//       </div>
//     </div>
//   );
// };

// export default EmandateOtp;



// import React, { useState } from 'react';
// import "../../styles/EmandatePage.module.css"

// const EnterOtpPage = ({ mobileNumber }) => {
//   const [otp, setOtp] = useState('');

//   return (
//     <div>
//       <h1>Verify Bank Details</h1>
//       <p>OTP sent to: {mobileNumber}</p>
//       <input
//         type="text"
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//       />
//       <button onClick={() => alert('Verified!')}>Verify</button>
//       <p>Havent received your OTP? Resend in 30 seconds</p>
//     </div>
//   );
// };

// export default EnterOtpPage;
