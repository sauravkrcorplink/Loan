import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter
import styles from "../styles/AddressConfirmation.module.css";

export default function AddressConfirmation() {
  // State for form fields
  const [formData, setFormData] = useState({
    resourceType: "",
    companyName: "",
    designation: "",
    email: "",
    dob: "",
    residenceAddress: "",
    officeAddress: "",
    educationQualification: "",
    marital: "",
    workExperience: "",
  });

  const router = useRouter(); // Initialize the router

  // Save data to localStorage on submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    localStorage.setItem("addressData", JSON.stringify(formData)); // Save form data to localStorage
    alert("Address Submitted Successfully!");
    router.push("/BankInfo"); // Redirect to the next page after submission
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.container}>
      {/* Progress Indicator */}
      <div className={styles.progressContainer}>
        {[5, 6, 7, 8].map((step, index) => (
          <div key={index} className={styles.step}>
            <div
              className={`${styles.circle} ${
                step === 7 ? styles.activeCircle : ""
              }`}
            >
              {step}
            </div>
            {step !== 8 && <div className={styles.line}></div>}
          </div>
        ))}
      </div>

      {/* Heading and Subheading */}
      <h1 className={styles.heading}>Other Information</h1>
      <p className={styles.subheading}>Your Data is Completely Secure with us</p>

      {/* Form */}
      <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.formLabel}>
           Residence Type:
           <input
             type="text"
             name="resourceType"
             value={formData.resourceType}
             onChange={handleInputChange}
             required
             className={styles.inputBox}
           />
         </label>

         <label className={styles.formLabel}>
           Company Name:
           <input
             type="text"
             name="companyName"
             value={formData.companyName}
             onChange={handleInputChange}
             required
             className={styles.inputBox}
           />
         </label>

         <label className={styles.formLabel}>
           Designation:
           <input
             type="text"
             name="designation"
             value={formData.designation}
             onChange={handleInputChange}
             required
             className={styles.inputBox}
           />
         </label>

         <label className={styles.formLabel}>
           Email:
           <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleInputChange}
             required
             className={styles.inputBox}
           />
         </label>

         {/* <label className={styles.formLabel}>
           Date of Birth:
           <input
             type="date"
             name="dob"
             value={formData.dob}
             onChange={handleInputChange}
             required
             className={styles.inputBox}
           />
         </label> */}

         <label className={styles.formLabel}>
           Residence Address:
           <input
             type="text"
             name="residenceAddress"
             value={formData.residenceAddress}
             onChange={handleInputChange}
             required
             className={styles.inputBox}
           />
         </label>

         <label className={styles.formLabel}>
           Office Address:
           <input
             type="text"
             name="officeAddress"
             value={formData.officeAddress}
             onChange={handleInputChange}
             required
             className={styles.inputBox}
           />
         </label>

{/* <label className={styles.formLabel}>
Education Qualification:
           <input
             type="date"
             name="dob"
             value={formData.dob}
             onChange={handleInputChange}
             required
             className={styles.inputBox}
           />
         </label> */}

         <label className={styles.formLabel}>
           Education Qualification:
           <input
             type="text"
             name="educationQualification"
             value={formData.educationQualification}
             onChange={handleInputChange}
             required
             className={styles.inputBox}
           />
         </label>

         <label className={styles.formLabel}>
           Marital Status
           <select
             name="marital"
             value={formData.marital}
             onChange={handleInputChange}
             required
             className={styles.inputBox}
           >
             <option value="">Select</option>
             <option value="Male">Married</option>
             <option value="Female">Single</option>
             <option value="Female">Widowed</option>
             <option value="Female">Separated</option>
           </select>
         </label>

         <label className={styles.formLabel}>
           Work Experience:
           <input
             type="text"
             name="workExperience"
             value={formData.workExperience}
             onChange={handleInputChange}
             required
             className={styles.inputBox}
           />
         </label>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}


// import { useState } from "react";
// import { useRouter } from "next/router"; // Import useRouter
// import styles from "../styles/OtherInformation.module.css";

// export default function OtherInformation() {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     resourceType: "",
//     companyName: "",
//     designation: "",
//     email: "",
//     dob: "",
//     officeAddress: "",
//     educationQualification: "",
//     marital: "",
//     workExperience: "",
//   });

//   const router = useRouter(); // Initialize the router

//   // Save data to localStorage on submit
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     localStorage.setItem("otherInformation", JSON.stringify(formData)); // Save form data to localStorage
//     alert("Other Information Submitted Successfully!");
//     router.push("/next-page"); // Redirect to the next page after submission
//   };

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
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
//                 step === 7 ? styles.activeCircle : ""
//               }`}
//             >
//               {step}
//             </div>
//             {step !== 8 && <div className={styles.line}></div>}
//           </div>
//         ))}
//       </div>

//       {/* Heading and Subheading */}
//       <h1 className={styles.heading}>Other Information</h1>
//       <p className={styles.subheading}>Your Data is Completely Secure with us</p>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <label className={styles.formLabel}>
//           Resource Type:
//           <input
//             type="text"
//             name="resourceType"
//             value={formData.resourceType}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           />
//         </label>

//         <label className={styles.formLabel}>
//           Company Name:
//           <input
//             type="text"
//             name="companyName"
//             value={formData.companyName}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           />
//         </label>

//         <label className={styles.formLabel}>
//           Designation:
//           <input
//             type="text"
//             name="designation"
//             value={formData.designation}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           />
//         </label>

//         <label className={styles.formLabel}>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           />
//         </label>

//         <label className={styles.formLabel}>
//           Date of Birth:
//           <input
//             type="date"
//             name="dob"
//             value={formData.dob}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           />
//         </label>

//         <label className={styles.formLabel}>
//           Office Address:
//           <input
//             type="text"
//             name="officeAddress"
//             value={formData.officeAddress}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           />
//         </label>

//         <label className={styles.formLabel}>
//           Education Qualification:
//           <input
//             type="text"
//             name="educationQualification"
//             value={formData.educationQualification}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           />
//         </label>

//         <label className={styles.formLabel}>
//           marital:
//           <select
//             name="marital"
//             value={formData.marital}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           >
//             <option value="">Select</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//         </label>

//         <label className={styles.formLabel}>
//           Work Experience:
//           <input
//             type="text"
//             name="workExperience"
//             value={formData.workExperience}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           />
//         </label>

//         <button type="submit" className={styles.submitButton}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
