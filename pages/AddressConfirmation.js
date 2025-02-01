// import { useState, useEffect } from "react";
// import { useRouter } from "next/router"; // Import useRouter
// import styles from "../styles/AddressConfirmation.module.css";

// export default function AddressConfirmation() {
//   const [formData, setFormData] = useState({
//     houseNo: "",
//     locality: "",
//     pincode: "",
//     city: "",
//     state: "",
//     relationType: "",
//     referenceName: "",
//     contactNo: "",
//     addressType: "",
//   });

//   const [showAddressForm, setShowAddressForm] = useState(false);

//   const router = useRouter(); // Initialize the router

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     localStorage.setItem("addressData", JSON.stringify(formData)); // Save form data to localStorage

//     if (formData.addressType === "both") {
//       alert("Address Submitted Successfully!"); // Show alert if both addresses are the same
//       router.push("/OtherInformation"); // Redirect to the next page
//     } else if (showAddressForm) {
//       // If the user is submitting the address details, redirect to the next page
//       alert("Address Submitted Successfully!"); // Show alert for submission
//       router.push("/OtherInformation"); // Redirect to the next page
//     } else {
//       // Show form for permanent or current address
//       setShowAddressForm(true);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "contactNo" && value.length > 10) return;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   useEffect(() => {
//     if (formData.pincode.length === 6) {
//       fetchCityAndState(formData.pincode);
//     }
//   }, [formData.pincode]);

//   const fetchCityAndState = async (pincode) => {
//     try {
//       const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
//       const data = await response.json();
//       console.log("API response:", data); // Log the API response
//       if (data[0].Status === "Success") {
//         setFormData((prevData) => ({
//           ...prevData,
//           city: data[0].PostOffice[0].District,
//           state: data[0].PostOffice[0].State,
//         }));
//       } else {
//         alert("Invalid Pin Code");
//       }
//     } catch (error) {
//       console.error("Error fetching city and state:", error);
//       alert("Error fetching city and state");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.progressContainer}>
//         {[5, 6, 7, 8].map((step, index) => (
//           <div key={index} className={styles.step}>
//             <div className={`${styles.circle} ${step === 6 ? styles.activeCircle : ""}`}>
//               {step}
//             </div>
//             {step !== 8 && <div className={styles.line}></div>}
//           </div>
//         ))}
//       </div>

//       <h1 className={styles.heading}>Address Confirmation</h1>
//       <p className={styles.subheading}>Your Data is Completely Secure with us</p>

//       <form onSubmit={handleSubmit} className={styles.form}>
//         <label className={styles.formLabel}>
//           Address Type:
//           <select
//             name="addressType"
//             value={formData.addressType}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           >
//             <option value="">Select</option>
//             <option value="permanent">Permanent</option>
//             <option value="current">Current</option>
//             <option value="both">Both</option>
//           </select>
//         </label>

//         {showAddressForm && (
//           <>
//             <label className={styles.formLabel}>
//               House No:
//               <input
//                 type="text"
//                 name="houseNo"
//                 value={formData.houseNo}
//                 onChange={handleInputChange}
//                 required
//                 className={styles.inputBox}
//               />
//             </label>

//             <label className={styles.formLabel}>
//               Locality:
//               <input
//                 type="text"
//                 name="locality"
//                 value={formData.locality}
//                 onChange={handleInputChange}
//                 required
//                 className={styles.inputBox}
//               />
//             </label>

//             <label className={styles.formLabel}>
//               Pincode:
//               <input
//                 type="text"
//                 name="pincode"
//                 value={formData.pincode}
//                 onChange={handleInputChange}
//                 required
//                 className={styles.inputBox}
//               />
//             </label>
//             <label className={styles.formLabel}>
//               City:
//               <input
//                 type="text"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 required
//                 className={styles.inputBox}
//               />
//             </label>

//             <label className={styles.formLabel}>
//               State:
//               <input
//                 type="text"
//                 name="state"
//                 value={formData.state}
//                 onChange={handleInputChange}
//                 required
//                 className={styles.inputBox}
//               />
//             </label>
//           </>
//         )}

//         <button type="submit" className={styles.submitButton}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import useRouter
import styles from "../styles/AddressConfirmation.module.css";

export default function AddressConfirmation() {
  const [formData, setFormData] = useState({
    houseNo: "",
    locality: "",
    pincode: "",
    city: "",
    state: "",
    relationType: "",
    referenceName: "",
    contactNo: "",
    addressType: "",
  });

  const [showAddressForm, setShowAddressForm] = useState(false);

  const router = useRouter(); // Initialize the router

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    localStorage.setItem("addressData", JSON.stringify(formData)); // Save form data to localStorage

    // Show form for permanent or current address if not already shown
    if (!showAddressForm) {
      setShowAddressForm(true);
      return;
    }

    // Redirect to the next page
    router.push("/OtherInformation");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "contactNo" && value.length > 10) return;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (formData.pincode.length === 6) {
      fetchCityAndState(formData.pincode);
    }
  }, [formData.pincode]);

  const fetchCityAndState = async (pincode) => {
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await response.json();
      console.log("API response:", data); // Log the API response
      if (data[0].Status === "Success") {
        setFormData((prevData) => ({
          ...prevData,
          city: data[0].PostOffice[0].District,
          state: data[0].PostOffice[0].State,
        }));
      } else {
        alert("Invalid Pin Code");
      }
    } catch (error) {
      console.error("Error fetching city and state:", error);
      alert("Error fetching city and state");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.progressContainer}>
        {[5, 6, 7, 8].map((step, index) => (
          <div key={index} className={styles.step}>
            <div className={`${styles.circle} ${step === 6 ? styles.activeCircle : ""}`}>
              {step}
            </div>
            {step !== 8 && <div className={styles.line}></div>}
          </div>
        ))}
      </div>

      <h1 className={styles.heading}>Address Confirmation</h1>
      <p className={styles.subheading}>Your Data is Completely Secure with us</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.formLabel}>
          Address Type:
          <select
            name="addressType"
            value={formData.addressType}
            onChange={handleInputChange}
            required
            className={styles.inputBox}
          >
            <option value="">Select</option>
            <option value="permanent">Permanent</option>
            <option value="current">Current</option>
            <option value="both">Both</option>
          </select>
        </label>

        {showAddressForm && (
          <>
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
              Pincode:
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
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

            <p>References</p>
         <label className={styles.formLabel}>
           Relation:
           <select
             name="relationType"
             value={formData.relationType}
             onChange={handleInputChange}
             required
             className={styles.inputBox}
           >
             <option value="">Select</option>
             <option value="spouse">Spouse</option>
             <option value="parent">Parent</option>
             <option value="child">Child</option>
             <option value="sibling">Sibling</option>
             <option value="friend">Friend</option>
             <option value="relative">Relative</option>
             <option value="colleague">Colleague</option>
             <option value="partner">Partner</option>
             <option value="guardian">Guardian</option>
             <option value="other">Other</option>
           </select>
         </label>

         <label className={styles.formLabel}>
           Name:
           <input
             type="text"
             name="referenceName"
             value={formData.referenceName}
             onChange={handleInputChange}
             required
             className={styles.inputBox}
           />
         </label>
         <label className={styles.formLabel}>
           Contact Number:
           <input
             type="number"
             name="contactNo"
             value={formData.contactNo}
             onChange={handleInputChange}
             required
             className={styles.inputBox}
           />
         </label>
          </>
        )}

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}


// import { useState, useEffect } from "react";
// import { useRouter } from "next/router"; // Import useRouter
// import styles from "../styles/AddressConfirmation.module.css";

// export default function AddressConfirmation() {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     houseNo: "",
//     locality: "",
//     pincode: "",
//     city: "",
//     state: "",
//     relationType: "",
//     referenceName: "",
//     contactNo: "",
//   });

//   const router = useRouter(); // Initialize the router

//   // Save data to localStorage on submit
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     localStorage.setItem("addressData", JSON.stringify(formData)); // Save form data to localStorage
//     alert("Address Submitted Successfully!");
//     router.push("/OtherInformation"); // Redirect to the next page after submission
//   };

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     // Validate contact number length
//     if (name === "contactNo" && value.length > 10) return;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   useEffect(() => {
//     if (formData.pincode.length === 6) {
//       fetchCityAndState(formData.pincode);
//     }
//   }, [formData.pincode]);

//   const fetchCityAndState = async (pincode) => {
//     try {
//       const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
//       const data = await response.json();
//       console.log("API response:", data); // Log the API response
//       if (data[0].Status === "Success") {
//         setFormData((prevData) => ({
//           ...prevData,
//           city: data[0].PostOffice[0].District,
//           state: data[0].PostOffice[0].State,
//         }));
//       } else {
//         alert("Invalid Pin Code");
//       }
//     } catch (error) {
//       console.error("Error fetching city and state:", error);
//       alert("Error fetching city and state");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       {/* Progress Indicator */}
//       <div className={styles.progressContainer}>
//         {[5, 6, 7, 8].map((step, index) => (
//           <div key={index} className={styles.step}>
//             <div
//               className={`${styles.circle} ${step === 6 ? styles.activeCircle : ""}`}
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
//           Pincode :
//           <input
//             type="text"
//             name="pincode"
//             value={formData.pincode}
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
//         <p>References</p>
//         <label className={styles.formLabel}>
//           Relation:
//           <select
//             name="relationType"
//             value={formData.relationType}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           >
//             <option value="">Select</option>
//             <option value="spouse">Spouse</option>
//             <option value="parent">Parent</option>
//             <option value="child">Child</option>
//             <option value="sibling">Sibling</option>
//             <option value="friend">Friend</option>
//             <option value="relative">Relative</option>
//             <option value="colleague">Colleague</option>
//             <option value="partner">Partner</option>
//             <option value="guardian">Guardian</option>
//             <option value="other">Other</option>
//           </select>
//         </label>

//         <label className={styles.formLabel}>
//           Name:
//           <input
//             type="text"
//             name="referenceName"
//             value={formData.referenceName}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           />
//         </label>
//         <label className={styles.formLabel}>
//           Contact Number:
//           <input
//             type="number"
//             name="contactNo"
//             value={formData.contactNo}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//             pattern="\d{10}"
//             title="Please enter a 10-digit contact number"
//           />
//         </label>

//         <button type="submit" className={styles.submitButton}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }



// import { useState, useEffect } from "react";
// import { useRouter } from "next/router"; // Import useRouter
// import styles from "../styles/AddressConfirmation.module.css";

// export default function AddressConfirmation() {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     houseNo: "",
//     locality: "",
//     pincode: "",
//     city: "",
//     state: "",
//     relationType: "",
//     referenceName: "",
//     contactNo: "",
//   });

//   const router = useRouter(); // Initialize the router

//   // Save data to localStorage on submit
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     localStorage.setItem("addressData", JSON.stringify(formData)); // Save form data to localStorage
//     alert("Address Submitted Successfully!");
//     router.push("/OtherInformation"); // Redirect to the next page after submission
//   };

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   useEffect(() => {
//     if (formData.pincode.length === 6) {
//       fetchCityAndState(formData.pincode);
//     }
//   }, [formData.pincode]);

//   const fetchCityAndState = async (pincode) => {
//     try {
//       const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
//       const data = await response.json();
//       console.log("API response:", data); // Log the API response
//       if (data[0].Status === "Success") {
//         setFormData((prevData) => ({
//           ...prevData,
//           city: data[0].PostOffice[0].District,
//           state: data[0].PostOffice[0].State,
//         }));
//       } else {
//         alert("Invalid Pin Code");
//       }
//     } catch (error) {
//       console.error("Error fetching city and state:", error);
//       alert("Error fetching city and state");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       {/* Progress Indicator */}
//       <div className={styles.progressContainer}>
//         {[5, 6, 7, 8].map((step, index) => (
//           <div key={index} className={styles.step}>
//             <div
//               className={`${styles.circle} ${step === 6 ? styles.activeCircle : ""}`}
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
//           Pincode :
//           <input
//             type="text"
//             name="pincode"
//             value={formData.pincode}
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
//         <p>References</p>
//         <label className={styles.formLabel}>
//           Relation:
//           <select
//             name="relationType"
//             value={formData.relationType}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           >
//             <option value="">Select</option>
//             <option value="spouse">Spouse</option>
//             <option value="parent">Parent</option>
//             <option value="child">Child</option>
//             <option value="sibling">Sibling</option>
//             <option value="friend">Friend</option>
//             <option value="relative">Relative</option>
//             <option value="colleague">Colleague</option>
//             <option value="partner">Partner</option>
//             <option value="guardian">Guardian</option>
//             <option value="other">Other</option>
//           </select>
//         </label>

//         <label className={styles.formLabel}>
//           Name:
//           <input
//             type="text"
//             name="referenceName"
//             value={formData.referenceName}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           />
//         </label>
//         <label className={styles.formLabel}>
//           Contact Number:
//           <input
//             type="number"
//             name="contactNo"
//             value={formData.contactNo}
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



// import { useState } from "react";
// import { useRouter } from "next/router"; // Import useRouter
// import styles from "../styles/AddressConfirmation.module.css";

// export default function AddressConfirmation() {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     houseNo: "",
//     locality: "",
//     pincode: "",
//     city: "",
//     state: "",
//     relationType: "",
//     referenceName: "",
//     contactNo: "",
//   });

//   const router = useRouter(); // Initialize the router

//   // Save data to localStorage on submit
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page refresh
//     localStorage.setItem("addressData", JSON.stringify(formData)); // Save form data to localStorage
//     alert("Address Submitted Successfully!");
//     router.push("/OtherInformation"); // Redirect to the next page after submission
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
//           Pincode :
//           <input
//             type="text"
//             name="pincode"
//             value={formData.pincode}
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
//         <p>References</p>
//         <label className={styles.formLabel}>
//           Relation:
//           <select
//             name="relationType"
//             value={formData.relationType}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           >
//             <option value="">Select</option>
//         <option value="spouse">Spouse</option>
//         <option value="parent">Parent</option>
//         <option value="child">Child</option>
//         <option value="sibling">Sibling</option>
//         <option value="friend">Friend</option>
//         <option value="relative">Relative</option>
//         <option value="colleague">Colleague</option>
//         <option value="partner">Partner</option>
//         <option value="guardian">Guardian</option>
//         <option value="other">Other</option>
//           </select>
//         </label>


//         <label className={styles.formLabel}>
//           Name:
//           <input
//             type="text"
//             name="referenceName"
//             value={formData.referenceName}
//             onChange={handleInputChange}
//             required
//             className={styles.inputBox}
//           />
//         </label>
//         <label className={styles.formLabel}>
//           Contact Number:
//           <input
//             type="number"
//             name="contactNo"
//             value={formData.contactNo}
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
