import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/BankInfo.module.css";

export default function BankInfo() {
  const [formData, setFormData] = useState({
    bankName: "",
    pdfFile: null,
    pdfPassword: "",
  });

  const [showModal, setShowModal] = useState(false); // State for showing modal
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("bankingData", JSON.stringify(formData));
    setShowModal(true); // Show the modal when the form is submitted
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      pdfFile: file,
    }));
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
    router.push("/LoanStatus"); // Redirect to Loan Status or Dashboard
  };

  return (
    <div className={styles.container}>
      {/* Progress Indicator */}
      <div className={styles.progressContainer}>
        {[5, 6, 7, 8].map((step, index) => (
          <div key={index} className={styles.step}>
            <div
              className={`${styles.circle} ${
                step === 8 ? styles.activeCircle : ""
              }`}
            >
              {step}
            </div>
            {step !== 8 && <div className={styles.line}></div>}
          </div>
        ))}
      </div>

      {/* Heading and Subheading */}
      <h1 className={styles.heading}>Banking</h1>
      <p className={styles.subheading}>
        Your Data is Completely Secure with us
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.formLabel}>
          Select your Bank Name:
          <select
            name="bankName"
            value={formData.bankName}
            onChange={handleInputChange}
            required
            className={styles.inputBox}
          >
            <option value="">Select a Bank</option>
            <option value="HDFC">HDFC Bank</option>
            <option value="SBI">State Bank of India (SBI)</option>
            <option value="ICICI">ICICI Bank</option>
            <option value="Axis">Axis Bank</option>
            <option value="Kotak">Kotak Mahindra Bank</option>
            <option value="PNB">Punjab National Bank (PNB)</option>
          </select>
        </label>
        <p>Please upload Bank Statement of account where you get the Salary/Income:</p>
        <label className={styles.formLabel}>
          PDF Upload:
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
            className={`${styles.inputBox} ${styles.fileInput}`}
          />
        </label>

        <label className={styles.formLabel}>
          Fetch from NetBanking:
          <input
            type="button"
            value="Click to Fetch"
            disabled
            className={styles.inputBox}
          />
        </label>

        <label className={styles.formLabel}>
          Account Aggregator:
          <input
            type="button"
            value="Click to Proceed"
            disabled
            className={styles.inputBox}
          />
        </label>

        <label className={styles.formLabel}>
          PDF Password:
          <input
            type="password"
            name="pdfPassword"
            value={formData.pdfPassword}
            onChange={handleInputChange}
            required
            className={styles.inputBox}
          />
        </label>

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h4>Please Wait</h4>
            <p>
              Your Loan is under Evaluation. We will notify you once we are
              ready with the decision.
            </p>
            <button onClick={closeModal} className={styles.closeButton}>
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
// import styles from "../styles/BankInfo.module.css";

// export default function BankInfo() {
//  // State for form fields
//  const [formData, setFormData] = useState({
//     bankName: "",
//     pdfFile: null,
//     pdfPassword: "",
//   });

//   const router = useRouter(); // Initialize the router

//   // Save data to localStorage on submit
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     localStorage.setItem("bankingData", JSON.stringify(formData)); // Save form data to localStorage
//     alert("Banking Information Submitted Successfully!");
//     router.push(""); // Redirect to the next page after submission
//   };

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };
//  // Handle file upload
//  const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prevData) => ({
//       ...prevData,
//       pdfFile: file,
//     }));
//   };

//   return (
//     <div className={styles.container}>
//       {/* Progress Indicator */}
//       <div className={styles.progressContainer}>
//         {[5, 6, 7, 8].map((step, index) => (
//           <div key={index} className={styles.step}>
//             <div
//               className={`${styles.circle} ${
//                 step === 8 ? styles.activeCircle : ""
//               }`}
//             >
//               {step}
//             </div>
//             {step !== 8 && <div className={styles.line}></div>}
//           </div>
//         ))}
//       </div>

//       {/* Heading and Subheading */}
//       <h1 className={styles.heading}>Banking</h1>
//       <p className={styles.subheading}>
//         Your Data is Completely Secure with us
//       </p>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className={styles.form}>
//       <label className={styles.formLabel}>
//           Select your Bank Name:
//           <select
//             name="bankName"
//             value={formData.bankName}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           >
//             <option value="">Select a Bank</option>
//             <option value="HDFC">HDFC Bank</option>
//             <option value="SBI">State Bank of India (SBI)</option>
//             <option value="ICICI">ICICI Bank</option>
//             <option value="Axis">Axis Bank</option>
//             <option value="Kotak">Kotak Mahindra Bank</option>
//             <option value="PNB">Punjab National Bank (PNB)</option>
//           </select>
//         </label>
// <p>Please upload Bank Statement of account where you get the Salary/Income:</p>
//         <label className={styles.formLabel}>
//           PDF Upload:
//           <input
//             type="file"
//             accept=".pdf"
//             onChange={handleFileChange}
//             required
//             className={`${styles.inputBox} ${styles.fileInput}`}
//           />
//         </label>

//         <label className={styles.formLabel}>
//           Fetch from NetBanking:
//           <input
//             type="button"
//             value="Click to Fetch"
//             disabled
//             className={styles.inputBox}
//           />
//         </label>

//         <label className={styles.formLabel}>
//           Account Aggregator:
//           <input
//             type="button"
//             value="Click to Proceed"
//             disabled
//             className={styles.inputBox}
//           />
//         </label>

//         <label className={styles.formLabel}>
//           PDF Password:
//           <input
//             type="password"
//             name="pdfPassword"
//             value={formData.pdfPassword}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           />
//         </label>

//       {/* Continue Button */}
//       <button type="submit" className={styles.submitButton}>
//         Submit
//       </button>
//       </form>
//     </div>
//   );
// }


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
