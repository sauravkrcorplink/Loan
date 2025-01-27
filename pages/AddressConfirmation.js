import { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter
import styles from "../styles/AddressConfirmation.module.css";

export default function AddressConfirmation() {
  // State for form fields
  const [formData, setFormData] = useState({
    houseNo: "",
    locality: "",
    city: "",
    state: "",
    alternateNo: "",
  });

  const router = useRouter(); // Initialize the router

  // Save data to localStorage on submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    localStorage.setItem("addressData", JSON.stringify(formData)); // Save form data to localStorage
    alert("Address Submitted Successfully!");
    router.push("/OtherInformation"); // Redirect to the next page after submission
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
                step === 6 ? styles.activeCircle : ""
              }`}
            >
              {step}
            </div>
            {step !== 8 && <div className={styles.line}></div>}
          </div>
        ))}
      </div>

      {/* Heading and Subheading */}
      <h1 className={styles.heading}>Address Confirmation</h1>
      <p className={styles.subheading}>Your Data is Completely Secure with us</p>

      {/* Form */}
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.formLabel}>
          House No:
          <input
            type="text"
            name="houseNo"
            value={formData.houseNo}
            onChange={handleInputChange}
            required
            className={styles.inputBox}
          />
        </label>

        <label className={styles.formLabel}>
          Locality:
          <input
            type="text"
            name="locality"
            value={formData.locality}
            onChange={handleInputChange}
            required
            className={styles.inputBox}
          />
        </label>

        <label className={styles.formLabel}>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            className={styles.inputBox}
          />
        </label>

        <label className={styles.formLabel}>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
            className={styles.inputBox}
          />
        </label>

        <label className={styles.formLabel}>
          Alternate Contact Number:
          <input
            type="text"
            name="alternateNo"
            value={formData.alternateNo}
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


// import { useState, useEffect } from "react";
// import styles from "../styles/AddressConfirmation.module.css";

// export default function AddressConfirmation() {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     houseNo: "",
//     locality: "",
//     city: "",
//     state: "",
//     alternateNo: "",
//   });

//   // Load saved data on component mount
//   useEffect(() => {
//     const savedData = JSON.parse(localStorage.getItem("addressData"));
//     if (savedData) {
//       setFormData(savedData); // Populate fields with saved data
//     }
//   }, []);

//   // Save data to localStorage on submit
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     localStorage.setItem("addressData", JSON.stringify(formData));
//     alert("Address Submitted Successfully!");
//     // Proceed to next step logic here
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
//                 step === 6 ? styles.activeCircle : ""
//               }`}
//             >
//               {step}
//             </div>
//             {step !== 8 && <div className={styles.line}></div>}
//           </div>
//         ))}
//       </div>

//       {/* Heading and Subheading */}
//       <h1 className={styles.heading}>Address Confirmation</h1>
//       <p className={styles.subheading}>Your Data is Completely Secure with us</p>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <label className={styles.formLabel}>
//           House No:
//           <input
//             type="text"
//             name="houseNo"
//             value={formData.houseNo}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           />
//         </label>

//         <label className={styles.formLabel}>
//           Locality:
//           <input
//             type="text"
//             name="locality"
//             value={formData.locality}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           />
//         </label>

//         <label className={styles.formLabel}>
//           City:
//           <input
//             type="text"
//             name="city"
//             value={formData.city}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           />
//         </label>

//         <label className={styles.formLabel}>
//           State:
//           <input
//             type="text"
//             name="state"
//             value={formData.state}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           />
//         </label>

//         <label className={styles.formLabel}>
//           Alternate Contact Number:
//           <input
//             type="text"
//             name="alternateNo"
//             value={formData.alternateNo}
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
