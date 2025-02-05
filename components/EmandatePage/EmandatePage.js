import React, { useState } from 'react';
import EmandateSelectBank from './EmandateSelectBank';
import EmandateVerify from './EmandateVerify';
import EmandateOtp from './EmandateOtp';
import EmandateBankUsername from './EmandateBankUsername';
import EmandateStatement from './EmandateStatement';
import EmandateUPI from './EmandateUPI';
import "../../styles/EmandatePage.module.css";

const EmandatePage = () => {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(null); // 'netbanking' or 'upi'
  const [selectedBank, setSelectedBank] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  // Step 1: Choose Payment Method
  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
    if (method === 'netbanking') {
      setStep(2); // Go to Select Bank
    } else {
      setStep(6); // Go to UPI Payment Page directly
    }
  };

  // Step 2: Select Bank (for NetBanking)
  const handleNextStep = (data) => {
    if (step === 2) {
      setSelectedBank(data);
      setStep(3); // Move to Verification
    } else if (step === 3) {
      setMobileNumber(data);
      setStep(4); // Move to OTP
    }
  };

  // Step 4: OTP Verification Success
  const handleOtpSuccess = () => {
    setIsOtpVerified(true);
    setStep(5); // Move to NetBanking Login
  };

  // Step 5: NetBanking Login Success
  const handleLoginSuccess = () => {
    setStep(7); // Move to Final Statement
  };

  return (
    <div className="container" style={{justifyItems: 'center', marginBottom: '10px'}}>
      {/* Step 1: Choose Payment Method (First Screen) */}
      {step === 1 && (
        <div style={{
          textAlign: 'center',
          marginTop: '20px',
          // background: 'green',
          background: "url('/images/17.png') no-repeat center center", 
  backgroundSize: 'cover', 
          padding: '20px',
          borderRadius: '16px',
          width: '100%',
          height: '100vh'
          // maxWidth: '400px',
        }}>
          <h3 style={{marginTop:'90px', color:'red'}}>Choose Payment Method</h3>
          <div style={{
            margin: '10px',
            padding: '15px 30px',
            fontSize: '16px',
            cursor: 'pointer',
            border: 'none',
            // backgroundColor: '#007bff',
            borderRadius: '8px',
            // width: '80%',
            // maxWidth: '600px',
          }}>
          <button onClick={() => handlePaymentSelection('netbanking')} style={{background:'blue', color:'white', fontSize:'18px'}}>NetBanking</button>
          <button onClick={() => handlePaymentSelection('upi')} style={{marginLeft: '10px',background:'green', color:'white',fontSize:'18px'}}>UPI Payment</button>
          </div>
        </div>
      )}

      {/* Step 2-5: NetBanking Flow */}
      {paymentMethod === 'netbanking' && (
        <>
          {step === 2 && <EmandateSelectBank onNext={handleNextStep} />}
          {step === 3 && <EmandateVerify bank={selectedBank} onNext={handleNextStep} />}
          {step === 4 && <EmandateOtp mobileNumber={mobileNumber} onSuccess={handleOtpSuccess} />}
          {step === 5 && <EmandateBankUsername onLoginSuccess={handleLoginSuccess} />}
        </>
      )}

      {/* Step 6: UPI Payment Flow */}
      {step === 6 && <EmandateUPI onPaymentSuccess={() => setStep(7)} />}

      {/* Step 7: Final Statement */}
      {step === 7 && <EmandateStatement />}
    </div>
  );
};

export default EmandatePage;


// import React, { useState } from 'react';
// import EmandateSelectBank from './EmandateSelectBank';
// import EmandateVerify from './EmandateVerify';
// import EmandateOtp from './EmandateOtp';
// import EmandateBankUsername from './EmandateBankUsername';
// import EmandateStatement from './EmandateStatement';
// import EmandateUPI from './EmandateUPI'; // Import your UPI Page
// import "../../styles/EmandatePage.module.css";

// const EmandatePage = () => {
//   const [step, setStep] = useState(1);
//   const [selectedBank, setSelectedBank] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState(null); // Store user choice

//   const handleNextStep = (data) => {
//     if (step === 1) setSelectedBank(data);
//     if (step === 2) setMobileNumber(data);
//     setStep(step + 1);
//   };

//   const handleOtpSuccess = () => {
//     setIsOtpVerified(true);
//     setStep(step + 1);
//   };

//   const handleLoginSuccess = () => {
//     setStep(step + 1);
//   };

//   const handlePaymentSelection = (method) => {
//     setPaymentMethod(method);
//     if (method === 'netbanking') {
//       setStep(5); // Go to NetBanking Login
//     } else {
//       setStep(6); // Go to UPI Payment Page
//     }
//   };

//   return (
//     <div>
//       {!isOtpVerified ? (
//         <>
//           {step === 1 && <EmandateSelectBank onNext={handleNextStep} />}
//           {step === 2 && <EmandateVerify bank={selectedBank} onNext={handleNextStep} />}
//           {step === 3 && <EmandateOtp mobileNumber={mobileNumber} onSuccess={handleOtpSuccess} />}
//         </>
//       ) : (
//         <>
//           {step === 4 && (
//             <div>
//               <h2>Choose Payment Method</h2>
//               <button onClick={() => handlePaymentSelection('netbanking')}>NetBanking</button>
//               <button onClick={() => handlePaymentSelection('upi')}>UPI Payment</button>
//             </div>
//           )}
//           {step === 5 && <EmandateBankUsername onLoginSuccess={handleLoginSuccess} />}
//           {step === 6 && <EmandateUPI />} {/* UPI Flow */}
//           {step === 7 && <EmandateStatement />}
//         </>
//       )}
//     </div>
//   );
// };

// export default EmandatePage;




// import React, { useState } from 'react';
// import EmandateSelectBank from './EmandateSelectBank';
// import EmandateVerify from './EmandateVerify';
// import EmandateOtp from './EmandateOtp';
// import EmandateBankUsername from './EmandateBankUsername';
// import EmandateStatement from './EmandateStatement'; // Import this component
// import "../../styles/EmandatePage.module.css";

// const EmandatePage = () => {
//   const [step, setStep] = useState(1);
//   const [selectedBank, setSelectedBank] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [isOtpVerified, setIsOtpVerified] = useState(false); // Track OTP verification

//   const handleNextStep = (data) => {
//     if (step === 1) setSelectedBank(data);
//     if (step === 2) setMobileNumber(data);
//     setStep(step + 1);
//   };

//   const handleOtpSuccess = () => {
//     setIsOtpVerified(true); // Mark OTP as verified
//     setStep(step + 1);
//   };

//   const handleLoginSuccess = () => {
//     setStep(step + 1);
//   };

//   return (
//     <div>
//       {!isOtpVerified ? ( // Show steps only if OTP is not verified
//         <>
//           {step === 1 && <EmandateSelectBank onNext={handleNextStep} />}
//           {step === 2 && <EmandateVerify bank={selectedBank} onNext={handleNextStep} />}
//           {step === 3 && <EmandateOtp mobileNumber={mobileNumber} onSuccess={handleOtpSuccess} />}
//         </>
//       ) : (
//         <>
//           {step === 4 && <EmandateBankUsername onLoginSuccess={handleLoginSuccess} />}
//           {step === 5 && <EmandateStatement />}
//         </>
//       )}
//     </div>
//   );
// };

// export default EmandatePage;



// import React, { useState } from 'react';
// import EmandateSelectBank from './EmandateSelectBank';
// import EmandateVerify from './EmandateVerify';
// import EmandateOtp from './EmandateOtp';
// import "../../styles/EmandatePage.module.css"

// const EmandatePage = () => {
//   const [step, setStep] = useState(1);
//   const [selectedBank, setSelectedBank] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');

//   const handleNextStep = (data) => {
//     if (step === 1) setSelectedBank(data);
//     if (step === 2) setMobileNumber(data);
//     setStep(step + 1);
//   };

//   return (
//     <div>
//       {step === 1 && <EmandateSelectBank onNext={handleNextStep} />}
//       {step === 2 && <EmandateVerify bank={selectedBank} onNext={handleNextStep} />}
//       {step === 3 && <EmandateOtp mobileNumber={mobileNumber} />}
//     </div>
//   );
// };

// export default EmandatePage;



// import React, { useState } from 'react';

// // Net Banking Page Component
// const NetBankingPage = ({ onBack }) => {
//   const banks = ['Bank A', 'Bank B', 'Bank C', 'Bank D'];

//   const handleBankSelection = (bank) => {
//     alert(`Selected ${bank}`);
//     // Proceed with further steps after bank selection
//   };

//   return (
//     <div>
//       <h2>Select Your Bank</h2>
//       <ul>
//         {banks.map((bank) => (
//           <li key={bank}>
//             <button onClick={() => handleBankSelection(bank)}>{bank}</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={onBack}>Back</button>
//     </div>
//   );
// };

// const EmandatePage = () => {
//   const [attempts, setAttempts] = useState(0);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [showNetBanking, setShowNetBanking] = useState(false);

//   const handleRegister = () => {
//     if (attempts < 3) {
//       setAttempts(attempts + 1);
//       // Simulate a registration success
//       const registrationSuccess = Math.random() > 0.5;
//       if (registrationSuccess) {
//         setIsSuccess(true);
//       }
//     }
//   };

//   return (
//     <div>
//       {isSuccess ? (
//         <div>Congratulations! Your registration was successful.</div>
//       ) : (
//         <div>
//           <h1>Register for E-Mandate</h1>
//           {showNetBanking ? (
//             <NetBankingPage onBack={() => setShowNetBanking(false)} />
//           ) : (
//             <div>
//               <div>
//                 <button onClick={() => setShowNetBanking(true)}>Net Banking</button>
//               </div>
//               <div>
//                 <button onClick={() => alert('UPI Selected')}>UPI</button>
//               </div>
//               <div>
//                 <button onClick={handleRegister}>Register</button>
//               </div>
//               {attempts > 0 && <div>Attempt {attempts} of 3</div>}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmandatePage;
