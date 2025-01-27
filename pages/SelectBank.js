// pages/SelectBank.js
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/SelectBank.module.css";

export default function SelectBank() {
  const [selectedBank, setSelectedBank] = useState("");
  const router = useRouter();

  const handleBankSelection = (e) => {
    setSelectedBank(e.target.value);
  };

  const handleProceed = () => {
    if (selectedBank) {
      // Save selected bank to localStorage
      localStorage.setItem("selectedBank", selectedBank);

      const bankUrls = {
        HDFC: "https://netbanking.hdfcbank.com/netbanking/",
        SBI: "https://retail.onlinesbi.sbi/retail/login.htm?utm_ref=gst_pages_navbar%23sources%23h6%23h22%23h18%23h7%23h15%23loss",
        ICICI: "https://www.icicibank.com/",
        Axis: "https://retail.axisbank.co.in/",
        Kotak: "https://www.kotak.com/j1001mp/netapp/MainPage.jsp",
        PNB: "https://netbanking.netpnb.com/",
      };

      const redirectUrl = bankUrls[selectedBank];
      // Open the bank's net banking page
      window.open(redirectUrl, "_blank");

      // Redirect to SuccessRedirect page after 7 seconds
      setTimeout(() => {
        router.push("/SuccessRedirect");
      }, 7000);
    } else {
      alert("Please select a bank.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Select Your Bank</h1>
      <label className={styles.formLabel}>
        Select your Bank:
        <select
          value={selectedBank}
          onChange={handleBankSelection}
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
      <button className={styles.proceedButton} onClick={handleProceed}>
        Proceed to Bank
      </button>
    </div>
  );
}


// // pages/SelectBank.js
// import { useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../styles/SelectBank.module.css";

// export default function SelectBank() {
//   const [selectedBank, setSelectedBank] = useState("");
//   const router = useRouter();

//   const handleBankSelection = (e) => {
//     setSelectedBank(e.target.value);
//   };

//   const handleProceed = () => {
//     if (selectedBank) {
//       // Save selected bank to localStorage
//       localStorage.setItem("selectedBank", selectedBank);

//       // Simulate redirecting to the bank's netbanking page by redirecting to SuccessRedirect page
//       router.push("/SuccessRedirect");
//     } else {
//       alert("Please select a bank.");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Select Your Bank</h1>
//       <label className={styles.formLabel}>
//         Select your Bank:
//         <select
//           value={selectedBank}
//           onChange={handleBankSelection}
//           required
//           className={styles.inputBox}
//         >
//           <option value="">Select a Bank</option>
//           <option value="HDFC">HDFC Bank</option>
//           <option value="SBI">State Bank of India (SBI)</option>
//           <option value="ICICI">ICICI Bank</option>
//           <option value="Axis">Axis Bank</option>
//           <option value="Kotak">Kotak Mahindra Bank</option>
//           <option value="PNB">Punjab National Bank (PNB)</option>
//         </select>
//       </label>
//       <button className={styles.proceedButton} onClick={handleProceed}>
//         Proceed to Bank
//       </button>
//     </div>
//   );
// }



// // pages/SelectBank.js
// import { useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../styles/SelectBank.module.css";

// export default function SelectBank() {
//   const [selectedBank, setSelectedBank] = useState("");
//   const router = useRouter();

//   const handleBankSelection = (e) => {
//     setSelectedBank(e.target.value);
//   };

//   const handleProceed = () => {
//     if (selectedBank) {
//       // Save selected bank to localStorage
//       localStorage.setItem("selectedBank", selectedBank);

//       const bankUrls = {
//         HDFC: "https://netbanking.hdfcbank.com/netbanking/",
//         SBI: "https://retail.onlinesbi.sbi/retail/login.htm?utm_ref=gst_pages_navbar%23sources%23h6%23h22%23h18%23h7%23h15%23loss",
//         ICICI: "https://www.icicibank.com/",
//         Axis: "https://retail.axisbank.co.in/",
//         Kotak: "https://www.kotak.com/j1001mp/netapp/MainPage.jsp",
//         PNB: "https://netbanking.netpnb.com/",
//       };

//       const redirectUrl = bankUrls[selectedBank];
//       window.location.href = redirectUrl;
//     } else {
//       alert("Please select a bank.");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Select Your Bank</h1>
//       <label className={styles.formLabel}>
//         Select your Bank:
//         <select
//           value={selectedBank}
//           onChange={handleBankSelection}
//           required
//           className={styles.inputBox}
//         >
//           <option value="">Select a Bank</option>
//           <option value="HDFC">HDFC Bank</option>
//           <option value="SBI">State Bank of India (SBI)</option>
//           <option value="ICICI">ICICI Bank</option>
//           <option value="Axis">Axis Bank</option>
//           <option value="Kotak">Kotak Mahindra Bank</option>
//           <option value="PNB">Punjab National Bank (PNB)</option>
//         </select>
//       </label>
//       <button className={styles.proceedButton} onClick={handleProceed}>
//         Proceed to Bank
//       </button>
//     </div>
//   );
// }



// // pages/SelectBank.js
// import { useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../styles/SelectBank.module.css";

// export default function SelectBank() {
//   const [selectedBank, setSelectedBank] = useState("");
//   const router = useRouter();

//   const handleBankSelection = (e) => {
//     setSelectedBank(e.target.value);
//   };

//   const handleProceed = () => {
//     if (selectedBank) {
//       const bankUrls = {
//         HDFC: "https://netbanking.hdfcbank.com/netbanking/",
//         SBI: "https://retail.onlinesbi.sbi/retail/login.htm?utm_ref=gst_pages_navbar%23sources%23h6%23h22%23h18%23h7%23h15%23loss",
//         ICICI: "https://www.icicibank.com/",
//         Axis: "https://retail.axisbank.co.in/",
//         Kotak: "https://www.kotak.com/j1001mp/netapp/MainPage.jsp",
//         PNB: "https://netbanking.netpnb.com/",
//       };

//       const redirectUrl = bankUrls[selectedBank];
//       window.location.href = redirectUrl;
//     } else {
//       alert("Please select a bank.");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Select Your Bank</h1>
//       <label className={styles.formLabel}>
//         Select your Bank:
//         <select
//           value={selectedBank}
//           onChange={handleBankSelection}
//           required
//           className={styles.inputBox}
//         >
//           <option value="">Select a Bank</option>
//           <option value="HDFC">HDFC Bank</option>
//           <option value="SBI">State Bank of India (SBI)</option>
//           <option value="ICICI">ICICI Bank</option>
//           <option value="Axis">Axis Bank</option>
//           <option value="Kotak">Kotak Mahindra Bank</option>
//           <option value="PNB">Punjab National Bank (PNB)</option>
//         </select>
//       </label>
//       <button className={styles.proceedButton} onClick={handleProceed}>
//         Proceed to Bank
//       </button>
//     </div>
//   );
// }
