import React, { useState } from 'react';
import styles from "../../styles/BankDetails.module.css";
import { PDFDocument } from "pdf-lib";
import { useRouter } from 'next/router';

const EmandateStatement = () => {
  const [formData, setFormData] = useState({
    pdfFile: null,
    pdfPassword: "",
  });
  const [showPdfPassword, setShowPdfPassword] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const router = useRouter();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      pdfFile: file,
    }));

    const reader = new FileReader();
    reader.onload = async (event) => {
      const uint8Array = new Uint8Array(event.target.result);
      try {
        const pdfDoc = await PDFDocument.load(uint8Array, { ignoreEncryption: true });
        if (pdfDoc.isEncrypted) {
          setShowPdfPassword(true);
        } else {
          setShowPdfPassword(false);
        }
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Simulate form submission success
    setSubmitSuccess(true);
    // Redirect to LoanApprovalProcess
    router.push('/LoanApprovalProcess');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Upload Bank Statement</h1>
        <p className={styles.text}>Please upload your bank statement from:</p>
        <p><strong>1st DEC 2025 - 31st JAN 2025</strong></p>

        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', gap: '15px'}}>
        <label className={styles.formLabel}>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
            className={`${styles.inputBox} ${styles.fileInput}`}
          />
        </label>

        {showPdfPassword && (
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
        )}
        </div>

        <button className={styles.button} onClick={handleSubmit}>Submit</button>

        {submitSuccess && <p className={styles.successMessage}>Submitted successfully!</p>}
      </div>
    </div>
  );
};

export default EmandateStatement;



// import React, { useState } from 'react';
// import styles from "../../styles/BankDetails.module.css";
// import { PDFDocument } from "pdf-lib";
// import { useRouter } from 'next/router';

// const EmandateStatement = () => {
//   const [formData, setFormData] = useState({
//     pdfFile: null,
//     pdfPassword: "",
//   });
//   const [showPdfPassword, setShowPdfPassword] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     setFormData((prevData) => ({
//       ...prevData,
//       pdfFile: file,
//     }));

//     const reader = new FileReader();
//     reader.onload = async (event) => {
//       const uint8Array = new Uint8Array(event.target.result);
//       try {
//         const pdfDoc = await PDFDocument.load(uint8Array, { ignoreEncryption: true });
//         if (pdfDoc.isEncrypted) {
//           setShowPdfPassword(true);
//         } else {
//           setShowPdfPassword(false);
//         }
//       } catch (error) {
//         console.error("Error loading PDF:", error);
//       }
//     };
//     reader.readAsArrayBuffer(file);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

// // Inside your handleSubmit function
// const router = useRouter();

//   const handleSubmit = () => {
//     // Simulate form submission success
//     setSubmitSuccess(true);
//     // Redirect to LoanApprovalProcess
//   router.push('/LoanApprovalProcess');
// };
//   };




//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h1 className={styles.heading}>Upload Bank Statement</h1>
//         <p className={styles.text}>Please upload your bank statement from:</p>
//         <h6>1stDEC2025 - 31stJAN2025</h6>

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

//         {showPdfPassword && (
//           <label className={styles.formLabel}>
//             PDF Password:
//             <input
//               type="password"
//               name="pdfPassword"
//               value={formData.pdfPassword}
//               onChange={handleInputChange}
//               required
//               className={styles.inputBox}
//             />
//           </label>
//         )}

//         <button className={styles.button} onClick={handleSubmit}>Submit</button>

//         {submitSuccess && <p className={styles.successMessage}>Submitted successfully!</p>}
//       </div>
//     </div>
//   );
// };

// export default EmandateStatement;



// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import styles from "../../styles/BankDetails.module.css";
// import { PDFDocument } from "pdf-lib";

// const EmandateStatement = () => {
//   const [formData, setFormData] = useState({
//     pdfFile: null,
//     pdfPassword: "",
//   });
//   const [showPdfPassword, setShowPdfPassword] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleLogin = () => {
//     if (username === 'abcde' && password === '12345') {
//       router.push('/bankDetailsUpload');
//     } else {
//       setError('Invalid username or password. Please try again.');
//     }
//   };

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     setFormData((prevData) => ({
//       ...prevData,
//       pdfFile: file,
//     }));

//     const reader = new FileReader();
//     reader.onload = async (event) => {
//       const uint8Array = new Uint8Array(event.target.result);
//       try {
//         const pdfDoc = await PDFDocument.load(uint8Array, { ignoreEncryption: true });
//         if (pdfDoc.isEncrypted) {
//           setShowPdfPassword(true);
//         } else {
//           setShowPdfPassword(false);
//         }
//       } catch (error) {
//         console.error("Error loading PDF:", error);
//       }
//     };
//     reader.readAsArrayBuffer(file);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h1 className={styles.heading}>Upload Bank Statement</h1>
//         <p className={styles.text}>Please upload your bank statement from :</p>
//         <h6>1stDEC2025 - 31stJAN2025</h6>

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

//         {showPdfPassword && (
//           <label className={styles.formLabel}>
//             PDF Password:
//             <input
//               type="password"
//               name="pdfPassword"
//               value={formData.pdfPassword}
//               onChange={handleInputChange}
//               required
//               className={styles.inputBox}
//             />
//           </label>
//         )}

//         <button className={styles.button} onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// };

// export default EmandateStatement;


// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// import styles from "../../styles/BankDetails.module.css";
// import { PDFDocument } from "pdf-lib";

// const EmandateStatement = () => {
//     const [formData, setFormData] = useState({
//         pdfFile: null,
//         pdfPassword: "",
//       });
//       const [showPdfPassword, setShowPdfPassword] = useState(false);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const router = useRouter();

//   const handleLogin = () => {
//     if (username === 'abcde' && password === '12345') {
//       router.push('/bankDetailsUpload');
//     } else {
//       setError('Invalid username or password. Please try again.');
//     }
//   };

//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     setFormData((prevData) => ({
//       ...prevData,
//       pdfFile: file,
//     }));

//     const reader = new FileReader();
//     reader.onload = async (event) => {
//       const uint8Array = new Uint8Array(event.target.result);
//       try {
//         const pdfDoc = await PDFDocument.load(uint8Array, { ignoreEncryption: true });
//         if (pdfDoc.isEncrypted) {
//           setShowPdfPassword(true);
//         } else {
//           setShowPdfPassword(false);
//         }
//       } catch (error) {
//         console.error("Error loading PDF:", error);
//       }
//     };
//     reader.readAsArrayBuffer(file);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card}>
//         <h1 className={styles.heading}>Upload Bank Statement</h1>
//         <p className={styles.text}>Please upload your bank statement from :</p>
//         <h6>1stDEC2025 - 31stJAN2025</h6>

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

//         {showPdfPassword && (
//           <label className={styles.formLabel}>
//             PDF Password:
//             <input
//               type="password"
//               name="pdfPassword"
//               value={formData.pdfPassword}
//               onChange={handleInputChange}
//               required
//               className={styles.inputBox}
//             />
//           </label>
//         )}

//         <button className={styles.button} onClick={handleLogin}>Login</button>
//       </div>
//     </div>
//   );
// };

// export default EmandateStatement;