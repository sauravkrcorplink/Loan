import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/ProofOfAddress.module.css";

export default function ProofOfAddress() {
  const router = useRouter();

  // State variables for input fields and dropdowns
  const [pinCode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [incomeReceivedIn, setIncomeReceivedIn] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // State for dropdown visibility
  const [showEmploymentDropdown, setShowEmploymentDropdown] = useState(false);
  const [showIncomeDropdown, setShowIncomeDropdown] = useState(false);

  const handleContinue = () => {
    if (!termsAccepted) {
      alert("Please accept the Terms & Conditions to proceed.");
      return;
    }
    router.push("/CompleteKYC"); // Replace with the next page route
  };

  const toggleEmploymentDropdown = () => {
    setShowEmploymentDropdown(!showEmploymentDropdown);
    setShowIncomeDropdown(false); // Close Income dropdown if it's open
  };

  const toggleIncomeDropdown = () => {
    setShowIncomeDropdown(!showIncomeDropdown);
    setShowEmploymentDropdown(false); // Close Employment dropdown if it's open
  };

  // Handle Monthly Income input with rupee symbol
  const handleMonthlyIncomeChange = (e) => {
    const value = e.target.value.replace(/[^\d.]/g, ""); // Remove any non-numeric character
    setMonthlyIncome(value ? `₹ ${value}` : ""); // Add rupee symbol if there's a value
  };

  return (
    <div className={styles.container}>
      {/* Progress Indicator */}
      <div className={styles.progressContainer}>
        {[1, 2, 3, 4].map((step, index) => (
          <div key={index} className={styles.step}>
            <div
              className={`${styles.circle} ${
                step === 1 ? styles.activeCircle : ""
              }`}
            >
              {step}
            </div>
            {step !== 4 && <div className={styles.line}></div>}
          </div>
        ))}
      </div>

      {/* Title and Subtitle */}
      <h1 className={styles.heading}>Submit Basic Details</h1>
      <p className={styles.subheading}>Your Data is Completely Secure with us</p>

      {/* Form Section */}
      <div className={styles.formContainer}>
        {/* Pin Code */}
        <div className={styles.inputGroup}>
          <label htmlFor="pinCode" className={styles.label}>
            Pin Code
          </label>
          <input
            id="pinCode"
            type="text"
            className={styles.input}
            placeholder="Enter your pin code"
            value={pinCode} // Bind to state
            onChange={(e) => setPinCode(e.target.value)} // Update state on change
          />
        </div>

        {/* City */}
        <div className={styles.inputGroup}>
          <label htmlFor="city" className={styles.label}>
            City
          </label>
          <input
            id="city"
            type="text"
            className={styles.input}
            placeholder="Enter your city"
            value={city} // Bind to state
            onChange={(e) => setCity(e.target.value)} // Update state on change
          />
        </div>

        {/* Employment Type */}
        <div className={styles.inputGroup}>
          <label htmlFor="employmentType" className={styles.label}>
            Employment Type
          </label>
          <div
            className={styles.selectBox}
            onClick={toggleEmploymentDropdown}
          >
            {employmentType || "Select Employment Type"}
            {/* Only show the arrow if nothing is selected */}
            {!employmentType && <div className={styles.arrowDown}></div>}
          </div>
          {showEmploymentDropdown && (
            <div className={styles.dropdown}>
              <div
                className={styles.dropdownItem}
                onClick={() => {
                  setEmploymentType("Salaried");
                  setShowEmploymentDropdown(false);
                }}
              >
                Salaried
              </div>
              <div
                className={styles.dropdownItem}
                onClick={() => {
                  setEmploymentType("Self-Employed");
                  setShowEmploymentDropdown(false);
                }}
              >
                Self-Employed
              </div>
            </div>
          )}
        </div>

        {/* Monthly Income */}
        <div className={styles.inputGroup}>
          <label htmlFor="monthlyIncome" className={styles.label}>
            Monthly Income
          </label>
          <input
            id="monthlyIncome"
            type="text"
            className={styles.input}
            placeholder="Enter your monthly income"
            value={monthlyIncome} // Bind to state
            onChange={handleMonthlyIncomeChange} // Update state on change
          />
        </div>

        {/* Income Received In */}
        <div className={styles.inputGroup}>
          <label htmlFor="incomeReceivedIn" className={styles.label}>
            Income Received In
          </label>
          <div
            className={styles.selectBox}
            onClick={toggleIncomeDropdown}
          >
            {incomeReceivedIn || "Select Income Received In"}
            {/* Only show the arrow if nothing is selected */}
            {!incomeReceivedIn && <div className={styles.arrowDown}></div>}
          </div>
          {showIncomeDropdown && (
            <div className={styles.dropdown}>
              <div
                className={styles.dropdownItem}
                onClick={() => {
                  setIncomeReceivedIn("Account");
                  setShowIncomeDropdown(false);
                }}
              >
                Account
              </div>
              <div
                className={styles.dropdownItem}
                onClick={() => {
                  setIncomeReceivedIn("Cash");
                  setShowIncomeDropdown(false);
                }}
              >
                Cash
              </div>
            </div>
          )}
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
      </div>

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



// import { useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../styles/ProofOfAddress.module.css";

// export default function ProofOfAddress() {
//   const router = useRouter();

//   const [employmentType, setEmploymentType] = useState("");
//   const [incomeReceivedIn, setIncomeReceivedIn] = useState("");
//   const [termsAccepted, setTermsAccepted] = useState(false);
//   const [showTermsModal, setShowTermsModal] = useState(false);
  
//   const [showEmploymentDropdown, setShowEmploymentDropdown] = useState(false);
//   const [showIncomeDropdown, setShowIncomeDropdown] = useState(false);

//   const handleContinue = () => {
//     if (!termsAccepted) {
//       alert("Please accept the Terms & Conditions to proceed.");
//       return;
//     }
//     router.push("/nextstep"); // Replace with the next page route
//   };

//   const toggleEmploymentDropdown = () => {
//     setShowEmploymentDropdown(!showEmploymentDropdown);
//     setShowIncomeDropdown(false); // Close Income dropdown if it's open
//   };

//   const toggleIncomeDropdown = () => {
//     setShowIncomeDropdown(!showIncomeDropdown);
//     setShowEmploymentDropdown(false); // Close Employment dropdown if it's open
//   };

//   return (
//     <div className={styles.container}>
//       {/* Progress Indicator */}
//       <div className={styles.progressContainer}>
//         {[1, 2, 3, 4].map((step, index) => (
//           <div key={index} className={styles.step}>
//             <div
//               className={`${styles.circle} ${
//                 step === 1 ? styles.activeCircle : ""
//               }`}
//             >
//               {step}
//             </div>
//             {step !== 4 && <div className={styles.line}></div>}
//           </div>
//         ))}
//       </div>

//       {/* Title and Subtitle */}
//       <h1 className={styles.heading}>Submit Basic Details</h1>
//       <p className={styles.subheading}>Your Data is Completely Secure with us</p>

//       {/* Form Section */}
//       <div className={styles.formContainer}>
//         {/* Pin Code */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="pinCode" className={styles.label}>
//             Pin Code
//           </label>
//           <input
//             id="pinCode"
//             type="text"
//             className={styles.input}
//             placeholder="Enter your pin code"
//           />
//         </div>

//         {/* City */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="city" className={styles.label}>
//             City
//           </label>
//           <input
//             id="city"
//             type="text"
//             className={styles.input}
//             placeholder="Enter your city"
//           />
//         </div>

//         {/* Employment Type */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="employmentType" className={styles.label}>
//             Employment Type
//           </label>
//           <div
//             className={styles.selectBox}
//             onClick={toggleEmploymentDropdown}
//           >
//             {employmentType || "Select Employment Type"}
//             <div className={styles.arrowDown}></div>
//           </div>
//           {showEmploymentDropdown && (
//             <div className={styles.dropdown}>
//               <div
//                 className={styles.dropdownItem}
//                 onClick={() => {
//                   setEmploymentType("Salaried");
//                   setShowEmploymentDropdown(false);
//                 }}
//               >
//                 Salaried
//               </div>
//               <div
//                 className={styles.dropdownItem}
//                 onClick={() => {
//                   setEmploymentType("Self-Employed");
//                   setShowEmploymentDropdown(false);
//                 }}
//               >
//                 Self-Employed
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Monthly Income */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="monthlyIncome" className={styles.label}>
//             Monthly Income
//           </label>
//           <input
//             id="monthlyIncome"
//             type="text"
//             className={styles.input}
//             placeholder="Enter your monthly income"
//           />
//         </div>

//         {/* Income Received In */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="incomeReceivedIn" className={styles.label}>
//             Income Received In
//           </label>
//           <div
//             className={styles.selectBox}
//             onClick={toggleIncomeDropdown}
//           >
//             {incomeReceivedIn || "Select Income Received In"}
//             <div className={styles.arrowDown}></div>
//           </div>
//           {showIncomeDropdown && (
//             <div className={styles.dropdown}>
//               <div
//                 className={styles.dropdownItem}
//                 onClick={() => {
//                   setIncomeReceivedIn("Account");
//                   setShowIncomeDropdown(false);
//                 }}
//               >
//                 Account
//               </div>
//               <div
//                 className={styles.dropdownItem}
//                 onClick={() => {
//                   setIncomeReceivedIn("Cash");
//                   setShowIncomeDropdown(false);
//                 }}
//               >
//                 Cash
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Terms & Conditions */}
//         <div className={styles.checkboxContainer}>
//           <input
//             id="terms"
//             type="checkbox"
//             className={styles.checkbox}
//             checked={termsAccepted}
//             onChange={() => setTermsAccepted(!termsAccepted)}
//           />
//           <label
//             htmlFor="terms"
//             className={styles.checkboxLabel}
//             onClick={() => setShowTermsModal(true)}
//           >
//             I Accept the <span className={styles.link}>Terms & Conditions</span>
//           </label>
//         </div>

//         {/* Continue Button */}
//         <button className={styles.continueButton} onClick={handleContinue}>
//           Continue
//         </button>
//       </div>

//       {/* Terms & Conditions Modal */}
//       {showTermsModal && (
//         <div className={styles.modal}>
//           <div className={styles.modalContent}>
//             <p>
//               You are agreeing with all details and information provided, and
//               you are ready to go further.
//             </p>
//             <button
//               className={styles.closeButton}
//               onClick={() => setShowTermsModal(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// import { useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../styles/ProofOfAddress.module.css";

// export default function ProofOfAddress() {
//   const router = useRouter();

//   const [employmentType, setEmploymentType] = useState("");
//   const [incomeReceivedIn, setIncomeReceivedIn] = useState("");
//   const [termsAccepted, setTermsAccepted] = useState(false);
//   const [showTermsModal, setShowTermsModal] = useState(false);

//   const handleContinue = () => {
//     if (!termsAccepted) {
//       alert("Please accept the Terms & Conditions to proceed.");
//       return;
//     }
//     router.push("/nextstep"); // Replace with the next page route
//   };

//   return (
//     <div className={styles.container}>
//       {/* Progress Indicator */}
//       <div className={styles.progressContainer}>
//         {[1, 2, 3, 4].map((step, index) => (
//           <div key={index} className={styles.step}>
//             <div
//               className={`${styles.circle} ${
//                 step === 1 ? styles.activeCircle : ""
//               }`}
//             >
//               {step}
//             </div>
//             {step !== 4 && <div className={styles.line}></div>}
//           </div>
//         ))}
//       </div>

//       {/* Title and Subtitle */}
//       <h1 className={styles.heading}>Submit Basic Details</h1>
//       <p className={styles.subheading}>Your Data is Completely Secure with us</p>

//       {/* Form Section */}
//       <div className={styles.formContainer}>
//         {/* Pin Code */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="pinCode" className={styles.label}>
//             Pin Code
//           </label>
//           <input
//             id="pinCode"
//             type="text"
//             className={styles.input}
//             placeholder="Enter your pin code"
//           />
//         </div>

//         {/* City */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="city" className={styles.label}>
//             City
//           </label>
//           <input
//             id="city"
//             type="text"
//             className={styles.input}
//             placeholder="Enter your city"
//           />
//         </div>

//         {/* Employment Type */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="employmentType" className={styles.label}>
//             Employment Type
//           </label>
//           <div
//             className={styles.selectBox}
//             onClick={() => setEmploymentType("")}
//           >
//             {employmentType || "Select Employment Type"}
//             <div className={styles.arrowDown}></div>
//           </div>
//           {employmentType === "" && (
//             <div className={styles.dropdown}>
//               <div
//                 className={styles.dropdownItem}
//                 onClick={() => setEmploymentType("Salaried")}
//               >
//                 Salaried
//               </div>
//               <div
//                 className={styles.dropdownItem}
//                 onClick={() => setEmploymentType("Self-Employed")}
//               >
//                 Self-Employed
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Monthly Income */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="monthlyIncome" className={styles.label}>
//             Monthly Income
//           </label>
//           <input
//             id="monthlyIncome"
//             type="text"
//             className={styles.input}
//             placeholder="Enter your monthly income"
//           />
//         </div>

//         {/* Income Received In */}
//         <div className={styles.inputGroup}>
//           <label htmlFor="incomeReceivedIn" className={styles.label}>
//             Income Received In
//           </label>
//           <div
//             className={styles.selectBox}
//             onClick={() => setIncomeReceivedIn("")}
//           >
//             {incomeReceivedIn || "Select Income Received In"}
//             <div className={styles.arrowDown}></div>
//           </div>
//           {incomeReceivedIn === "" && (
//             <div className={styles.dropdown}>
//               <div
//                 className={styles.dropdownItem}
//                 onClick={() => setIncomeReceivedIn("Account")}
//               >
//                 Account
//               </div>
//               <div
//                 className={styles.dropdownItem}
//                 onClick={() => setIncomeReceivedIn("Cash")}
//               >
//                 Cash
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Terms & Conditions */}
//         <div className={styles.checkboxContainer}>
//           <input
//             id="terms"
//             type="checkbox"
//             className={styles.checkbox}
//             checked={termsAccepted}
//             onChange={() => setTermsAccepted(!termsAccepted)}
//           />
//           <label
//             htmlFor="terms"
//             className={styles.checkboxLabel}
//             onClick={() => setShowTermsModal(true)}
//           >
//             I Accept the <span className={styles.link}>Terms & Conditions</span>
//           </label>
//         </div>

//         {/* Continue Button */}
//         <button className={styles.continueButton} onClick={handleContinue}>
//           Continue
//         </button>
//       </div>

//       {/* Terms & Conditions Modal */}
//       {showTermsModal && (
//         <div className={styles.modal}>
//           <div className={styles.modalContent}>
//             <p>
//               You are agreeing with all details and information provided, and
//               you are ready to go further.
//             </p>
//             <button
//               className={styles.closeButton}
//               onClick={() => setShowTermsModal(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
