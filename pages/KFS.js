/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useRouter } from "next/router"; // Import Next.js router
import styles from "../styles/KFS.module.css";

const KFS = () => {
  const kfsRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const router = useRouter(); // Initialize router

  const kfsData = {
    companyName: "LOANONE FINANCE PRIVATE LIMITED",
    logo: "/logoloann.png", // Make sure this is inside the "public" folder
    date: "08/08/2024",
    applicantName: "Akshay Awasthi",
    loanAmount: "₹10,000",
    interestRate: "60% per annum (3-month tenure)",
    processingFee: "₹1,000",
    gst: "₹180",
    totalCharges: "₹1,180",
    netDisbursedAmount: "₹8,820",
    totalRepayAmount: "₹11,016",
    annualPercentageRate: "95.4%",
    loanTenure: "3 Months",
    repaymentFrequency: "Monthly",
    emiAmount: "₹3,672",
    penalInterest: "36.5% annually",
    coolingOffPeriod: "3 Days",
    grievanceOfficer: "Samir Sethi",
    officerAddress: "4338, Padam Singh Road, Karol Bagh, New Delhi - 110005",
    officerPhone: "+91 98999-85495",
  };

  const downloadPDF = async () => {
    setIsDownloading(true);

    try {
      const pdf = new jsPDF();
      const element = kfsRef.current;

      if (!element) {
        throw new Error("Invalid element reference");
      }

      // Load logo image
      const logoUrl = window.location.origin + kfsData.logo;
      const logoBase64 = await loadImage(logoUrl);

      // Add heading
      pdf.setFontSize(20);
      pdf.text("Key Fact Statement (KFS)", 70, 20);

      // Add logo if successfully loaded
      if (logoBase64) {
        pdf.addImage(logoBase64, "PNG", 75, 25, 60, 30); // Adjust size & position
      }

      // Add company name
      pdf.setFontSize(14);
      pdf.text(kfsData.companyName, 65, 70);

      // Hide download button before capturing screenshot
      const downloadButton = element.querySelector(".downloadButton");
      if (downloadButton) downloadButton.style.display = "none";

      // Capture content as image
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      // Add captured content to PDF
      pdf.addImage(imgData, "PNG", 10, 80, 190, 0);

      // Save PDF
      pdf.save("KFS_Document.pdf");

      // Restore button visibility
      if (downloadButton) downloadButton.style.display = "block";
    } catch (error) {
      console.error("Error generating PDF:", error);
    }

    setIsDownloading(false);
  };

  // Load an image and return Base64
  const loadImage = async (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "Anonymous"; // Prevents CORS issues
      img.src = src;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL("image/png"));
      };
      img.onerror = (err) => reject(err);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card} ref={kfsRef}>
        <div className={styles.KFS}>
          <h1 className={styles.heading}>Key Fact Statement (KFS)</h1>
          <img src={kfsData.logo} alt="Company Logo" width={100} height={100} className={styles.logo} />
        </div>
        <p><strong>{kfsData.companyName}</strong></p>
        <p><strong>Date:</strong> {kfsData.date}</p>
        <p><strong>Applicant Name:</strong> {kfsData.applicantName}</p>

        <div className={styles.kfsDetails}>
          <p><strong>Loan Amount:</strong> {kfsData.loanAmount}</p>
          <p><strong>Interest Rate:</strong> {kfsData.interestRate}</p>
          <p><strong>Processing Fee:</strong> {kfsData.processingFee}</p>
          <p><strong>GST:</strong> {kfsData.gst}</p>
          <p><strong>Total Charges:</strong> {kfsData.totalCharges}</p>
          <p><strong>Net Disbursed Amount:</strong> {kfsData.netDisbursedAmount}</p>
          <p><strong>Total Repayable Amount:</strong> {kfsData.totalRepayAmount}</p>
          <p><strong>Annual Percentage Rate:</strong> {kfsData.annualPercentageRate}</p>
          <p><strong>Loan Tenure:</strong> {kfsData.loanTenure}</p>
          <p><strong>Repayment Frequency:</strong> {kfsData.repaymentFrequency}</p>
          <p><strong>EMI Amount:</strong> {kfsData.emiAmount}</p>
          <p><strong>Penal Interest for Delay:</strong> {kfsData.penalInterest}</p>
          <p><strong>Cooling Off Period:</strong> {kfsData.coolingOffPeriod}</p>
        </div>

        <h3>Grievance Officer</h3>
        <p><strong>Name:</strong> {kfsData.grievanceOfficer}</p>
        <p><strong>Address:</strong> {kfsData.officerAddress}</p>
        <p><strong>Phone:</strong> {kfsData.officerPhone}</p>

       <div style={{display:'flex', flexDirection:'column'}}>
       <button className={`${styles.button} downloadButton`} onClick={downloadPDF} disabled={isDownloading}>
          {isDownloading ? "Downloading..." : "Download PDF"}
        </button>

        {/* Button to navigate to Sanction Page */}
        <button
          className={styles.redirectButton}
          onClick={() => router.push("/sanction")}
        >
          View Sanction Details
        </button>
       </div>
      </div>
    </div>
  );
};

export default KFS;



// import React, { useRef, useState } from "react";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
// import styles from "../styles/KFS.module.css";

// const KFS = () => {
//   const kfsRef = useRef(null);
//   const [isDownloading, setIsDownloading] = useState(false);

//   const kfsData = {
//     companyName: "LOANONE FINANCE PRIVATE LIMITED",
//     logo: "/logoloann.png", // Make sure this is inside the "public" folder
//     date: "08/08/2024",
//     applicantName: "Akshay Awasthi",
//     loanAmount: "₹10,000",
//     interestRate: "60% per annum (3-month tenure)",
//     processingFee: "₹1,000",
//     gst: "₹180",
//     totalCharges: "₹1,180",
//     netDisbursedAmount: "₹8,820",
//     totalRepayAmount: "₹11,016",
//     annualPercentageRate: "95.4%",
//     loanTenure: "3 Months",
//     repaymentFrequency: "Monthly",
//     emiAmount: "₹3,672",
//     penalInterest: "36.5% annually",
//     coolingOffPeriod: "3 Days",
//     grievanceOfficer: "Samir Sethi",
//     officerAddress: "4338, Padam Singh Road, Karol Bagh, New Delhi - 110005",
//     officerPhone: "+91 98999-85495",
//   };

//   const downloadPDF = async () => {
//     setIsDownloading(true);

//     try {
//       const pdf = new jsPDF();
//       const element = kfsRef.current;

//       if (!element) {
//         throw new Error("Invalid element reference");
//       }

//       // Load logo image
//       const logoUrl = window.location.origin + kfsData.logo;
//       const logoBase64 = await loadImage(logoUrl);

//       // Add heading
//       pdf.setFontSize(20);
//       pdf.text("Key Fact Statement (KFS)", 70, 20);

//       // Add logo if successfully loaded
//       if (logoBase64) {
//         pdf.addImage(logoBase64, "PNG", 75, 25, 60, 30); // Adjust size & position
//       }

//       // Add company name
//       pdf.setFontSize(14);
//       pdf.text(kfsData.companyName, 65, 70);

//       // Hide download button before capturing screenshot
//       const downloadButton = element.querySelector(".downloadButton");
//       if (downloadButton) downloadButton.style.display = "none";

//       // Capture content as image
//       const canvas = await html2canvas(element, { scale: 2 });
//       const imgData = canvas.toDataURL("image/png");

//       // Add captured content to PDF
//       pdf.addImage(imgData, "PNG", 10, 80, 190, 0);

//       // Save PDF
//       pdf.save("KFS_Document.pdf");

//       // Restore button visibility
//       if (downloadButton) downloadButton.style.display = "block";
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//     }

//     setIsDownloading(false);
//   };

//   // Load an image and return Base64
//   const loadImage = async (src) => {
//     return new Promise((resolve, reject) => {
//       const img = new Image();
//       img.crossOrigin = "Anonymous"; // Prevents CORS issues
//       img.src = src;
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d");
//         ctx.drawImage(img, 0, 0);
//         resolve(canvas.toDataURL("image/png"));
//       };
//       img.onerror = (err) => reject(err);
//     });
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card} ref={kfsRef}>
//         <div className={styles.KFS}>
//           <h1 className={styles.heading}>Key Fact Statement (KFS)</h1>
//           <img src={kfsData.logo} alt="Company Logo" width={100} height={100} className={styles.logo} />
//         </div>
//         <p><strong>{kfsData.companyName}</strong></p>
//         <p><strong>Date:</strong> {kfsData.date}</p>
//         <p><strong>Applicant Name:</strong> {kfsData.applicantName}</p>

//         <div className={styles.kfsDetails}>
//           <p><strong>Loan Amount:</strong> {kfsData.loanAmount}</p>
//           <p><strong>Interest Rate:</strong> {kfsData.interestRate}</p>
//           <p><strong>Processing Fee:</strong> {kfsData.processingFee}</p>
//           <p><strong>GST:</strong> {kfsData.gst}</p>
//           <p><strong>Total Charges:</strong> {kfsData.totalCharges}</p>
//           <p><strong>Net Disbursed Amount:</strong> {kfsData.netDisbursedAmount}</p>
//           <p><strong>Total Repayable Amount:</strong> {kfsData.totalRepayAmount}</p>
//           <p><strong>Annual Percentage Rate:</strong> {kfsData.annualPercentageRate}</p>
//           <p><strong>Loan Tenure:</strong> {kfsData.loanTenure}</p>
//           <p><strong>Repayment Frequency:</strong> {kfsData.repaymentFrequency}</p>
//           <p><strong>EMI Amount:</strong> {kfsData.emiAmount}</p>
//           <p><strong>Penal Interest for Delay:</strong> {kfsData.penalInterest}</p>
//           <p><strong>Cooling Off Period:</strong> {kfsData.coolingOffPeriod}</p>
//         </div>

//         <h3>Grievance Officer</h3>
//         <p><strong>Name:</strong> {kfsData.grievanceOfficer}</p>
//         <p><strong>Address:</strong> {kfsData.officerAddress}</p>
//         <p><strong>Phone:</strong> {kfsData.officerPhone}</p>

//         <button className={`${styles.button} downloadButton`} onClick={downloadPDF} disabled={isDownloading}>
//           {isDownloading ? "Downloading..." : "Download PDF"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default KFS;



// import React, { useRef } from "react";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
// import Image from "next/image";
// import styles from "../styles/KFS.module.css";

// const KFS = () => {
//   const kfsRef = useRef(null);

//   const kfsData = {
//     companyName: "LOANONE FINANCE PRIVATE LIMITED",
//     logo: "/logoloann.png",
//     date: "08/08/2024",
//     applicantName: "Akshay Awasthi",
//     loanAmount: "₹10,000",
//     interestRate: "60% per annum (3-month tenure)",
//     processingFee: "₹1,000",
//     gst: "₹180",
//     totalCharges: "₹1,180",
//     netDisbursedAmount: "₹8,820",
//     totalRepayAmount: "₹11,016",
//     annualPercentageRate: "95.4%",
//     loanTenure: "3 Months",
//     repaymentFrequency: "Monthly",
//     emiAmount: "₹3,672",
//     penalInterest: "36.5% annually",
//     coolingOffPeriod: "3 Days",
//     grievanceOfficer: "Samir Sethi",
//     officerAddress: "4338, Padam Singh Road, Karol Bagh, New Delhi - 110005",
//     officerPhone: "+91 98999-85495",
//   };

//   const downloadPDF = async () => {
//     try {
//       const element = kfsRef.current;
//       if (!element) {
//         throw new Error("Invalid element reference");
//       }

//       // Temporarily hide the download button using CSS
//       const downloadButton = element.querySelector(".downloadButton");
//       if (downloadButton) {
//         downloadButton.style.display = "none";
//       }

//       const canvas = await html2canvas(element);
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF();

//       // Add the heading to the PDF
//       pdf.setFontSize(20);
//       pdf.text("Key Fact Statement (KFS)", 10, 20);

//       // Add the company name to the PDF
//       pdf.setFontSize(14);
//       pdf.text(kfsData.companyName, 10, 40);

//       // Add the rest of the content as an image
//       pdf.addImage(imgData, "PNG", 10, 50, 190, 0);

//       // Save the PDF
//       pdf.save("KFS_Document.pdf");

//       // Restore the download button visibility
//       if (downloadButton) {
//         downloadButton.style.display = "block";
//       }
//     } catch (error) {
//       console.error("Error generating PDF:", error);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card} ref={kfsRef}>
//         <div className={styles.KFS}>
//           <h1 className={styles.heading}>Key Fact Statement (KFS)</h1>
//           <Image src={kfsData.logo} alt="Company Logo" width={100} height={100} className={styles.logo} />
//         </div>
//         <p><strong>{kfsData.companyName}</strong></p>
//         <p><strong>Date:</strong> {kfsData.date}</p>
//         <p><strong>Applicant Name:</strong> {kfsData.applicantName}</p>

//         <div className={styles.kfsDetails}>
//           <p><strong>Loan Amount:</strong> {kfsData.loanAmount}</p>
//           <p><strong>Interest Rate:</strong> {kfsData.interestRate}</p>
//           <p><strong>Processing Fee:</strong> {kfsData.processingFee}</p>
//           <p><strong>GST:</strong> {kfsData.gst}</p>
//           <p><strong>Total Charges:</strong> {kfsData.totalCharges}</p>
//           <p><strong>Net Disbursed Amount:</strong> {kfsData.netDisbursedAmount}</p>
//           <p><strong>Total Repayable Amount:</strong> {kfsData.totalRepayAmount}</p>
//           <p><strong>Annual Percentage Rate:</strong> {kfsData.annualPercentageRate}</p>
//           <p><strong>Loan Tenure:</strong> {kfsData.loanTenure}</p>
//           <p><strong>Repayment Frequency:</strong> {kfsData.repaymentFrequency}</p>
//           <p><strong>EMI Amount:</strong> {kfsData.emiAmount}</p>
//           <p><strong>Penal Interest for Delay:</strong> {kfsData.penalInterest}</p>
//           <p><strong>Cooling Off Period:</strong> {kfsData.coolingOffPeriod}</p>
//         </div>

//         <h3>Grievance Officer</h3>
//         <p><strong>Name:</strong> {kfsData.grievanceOfficer}</p>
//         <p><strong>Address:</strong> {kfsData.officerAddress}</p>
//         <p><strong>Phone:</strong> {kfsData.officerPhone}</p>

//         <button className={`${styles.button} downloadButton`} onClick={downloadPDF}>Download PDF</button>
//       </div>
//     </div>
//   );
// };

// export default KFS;




// import React, { useRef } from "react";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
// import Image from "next/image"; // Import the Image component from next/image
// import styles from "../styles/KFS.module.css";

// const KFS = () => {
//   const kfsRef = useRef(null);

//   const kfsData = {
//     companyName: "LOANONE FINANCE PRIVATE LIMITED",
//     logo: "/logoloann.png", // Add your logo in the public folder
//     date: "08/08/2024",
//     applicantName: "Akshay Awasthi",
//     loanAmount: "₹10,000",
//     interestRate: "60% per annum (3-month tenure)",
//     processingFee: "₹1,000",
//     gst: "₹180",
//     totalCharges: "₹1,180",
//     netDisbursedAmount: "₹8,820",
//     totalRepayAmount: "₹11,016",
//     annualPercentageRate: "95.4%",
//     loanTenure: "3 Months",
//     repaymentFrequency: "Monthly",
//     emiAmount: "₹3,672",
//     penalInterest: "36.5% annually",
//     coolingOffPeriod: "3 Days",
//     grievanceOfficer: "Samir Sethi",
//     officerAddress: "4338, Padam Singh Road, Karol Bagh, New Delhi - 110005",
//     officerPhone: "+91 98999-85495",
//   };

//   const downloadPDF = async () => {
//     const element = kfsRef.current;
//     const canvas = await html2canvas(element);
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF();
//     pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
//     pdf.save("KFS_Document.pdf");
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card} ref={kfsRef}>
//         <div className={styles.KFS}>
//         <h1 className={styles.heading}>Key Fact Statement (KFS)</h1>
//         <Image src={kfsData.logo} alt="Company Logo" width={100} height={100} className={styles.logo} />
//         </div>
//         <p><strong>{kfsData.companyName}</strong></p>
//         <p><strong>Date:</strong> {kfsData.date}</p>
//         <p><strong>Applicant Name:</strong> {kfsData.applicantName}</p>

//         <div className={styles.kfsDetails}>
//           <p><strong>Loan Amount:</strong> {kfsData.loanAmount}</p>
//           <p><strong>Interest Rate:</strong> {kfsData.interestRate}</p>
//           <p><strong>Processing Fee:</strong> {kfsData.processingFee}</p>
//           <p><strong>GST:</strong> {kfsData.gst}</p>
//           <p><strong>Total Charges:</strong> {kfsData.totalCharges}</p>
//           <p><strong>Net Disbursed Amount:</strong> {kfsData.netDisbursedAmount}</p>
//           <p><strong>Total Repayable Amount:</strong> {kfsData.totalRepayAmount}</p>
//           <p><strong>Annual Percentage Rate:</strong> {kfsData.annualPercentageRate}</p>
//           <p><strong>Loan Tenure:</strong> {kfsData.loanTenure}</p>
//           <p><strong>Repayment Frequency:</strong> {kfsData.repaymentFrequency}</p>
//           <p><strong>EMI Amount:</strong> {kfsData.emiAmount}</p>
//           <p><strong>Penal Interest for Delay:</strong> {kfsData.penalInterest}</p>
//           <p><strong>Cooling Off Period:</strong> {kfsData.coolingOffPeriod}</p>
//         </div>

//         <h3>Grievance Officer</h3>
//         <p><strong>Name:</strong> {kfsData.grievanceOfficer}</p>
//         <p><strong>Address:</strong> {kfsData.officerAddress}</p>
//         <p><strong>Phone:</strong> {kfsData.officerPhone}</p>

//         <button className={styles.button} onClick={downloadPDF}>Download PDF</button>
//       </div>
//     </div>
//   );
// };

// export default KFS;


// import React, { useRef } from "react";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";
// import styles from "../styles/KFS.module.css";

// const KFS = () => {
//   const kfsRef = useRef(null);

//   const kfsData = {
//     companyName: "R K BANSAL FINANCE PRIVATE LIMITED (RAM FINCORP)",
//     logo: "/logo.png", // Add your logo in the public folder
//     date: "08/08/2024",
//     applicantName: "Akshay Awasthi",
//     loanAmount: "₹10,000",
//     interestRate: "60% per annum (3-month tenure)",
//     processingFee: "₹1,000",
//     gst: "₹180",
//     totalCharges: "₹1,180",
//     netDisbursedAmount: "₹8,820",
//     totalRepayAmount: "₹11,016",
//     annualPercentageRate: "95.4%",
//     loanTenure: "3 Months",
//     repaymentFrequency: "Monthly",
//     emiAmount: "₹3,672",
//     penalInterest: "36.5% annually",
//     coolingOffPeriod: "3 Days",
//     grievanceOfficer: "Samir Sethi",
//     officerAddress: "4338, Padam Singh Road, Karol Bagh, New Delhi - 110005",
//     officerPhone: "+91 98999-85495",
//   };

//   const downloadPDF = async () => {
//     const element = kfsRef.current;
//     const canvas = await html2canvas(element);
//     const imgData = canvas.toDataURL("image/png");
//     const pdf = new jsPDF();
//     pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
//     pdf.save("KFS_Document.pdf");
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.card} ref={kfsRef}>
//         <h1 className={styles.heading}>Key Fact Statement (KFS)</h1>
//         <img src={kfsData.logo} alt="Company Logo" className={styles.logo} />
//         <p><strong>{kfsData.companyName}</strong></p>
//         <p><strong>Date:</strong> {kfsData.date}</p>
//         <p><strong>Applicant Name:</strong> {kfsData.applicantName}</p>

//         <div className={styles.kfsDetails}>
//           <p><strong>Loan Amount:</strong> {kfsData.loanAmount}</p>
//           <p><strong>Interest Rate:</strong> {kfsData.interestRate}</p>
//           <p><strong>Processing Fee:</strong> {kfsData.processingFee}</p>
//           <p><strong>GST:</strong> {kfsData.gst}</p>
//           <p><strong>Total Charges:</strong> {kfsData.totalCharges}</p>
//           <p><strong>Net Disbursed Amount:</strong> {kfsData.netDisbursedAmount}</p>
//           <p><strong>Total Repayable Amount:</strong> {kfsData.totalRepayAmount}</p>
//           <p><strong>Annual Percentage Rate:</strong> {kfsData.annualPercentageRate}</p>
//           <p><strong>Loan Tenure:</strong> {kfsData.loanTenure}</p>
//           <p><strong>Repayment Frequency:</strong> {kfsData.repaymentFrequency}</p>
//           <p><strong>EMI Amount:</strong> {kfsData.emiAmount}</p>
//           <p><strong>Penal Interest for Delay:</strong> {kfsData.penalInterest}</p>
//           <p><strong>Cooling Off Period:</strong> {kfsData.coolingOffPeriod}</p>
//         </div>

//         <h3>Grievance Officer</h3>
//         <p><strong>Name:</strong> {kfsData.grievanceOfficer}</p>
//         <p><strong>Address:</strong> {kfsData.officerAddress}</p>
//         <p><strong>Phone:</strong> {kfsData.officerPhone}</p>

//         <button className={styles.button} onClick={downloadPDF}>Download PDF</button>
//       </div>
//     </div>
//   );
// };

// export default KFS;



// // import React from "react";
// // import { jsPDF } from "jspdf";
// // import styles from "../styles/KFS.module.css";

// // const KFS = () => {
// //   const kfsData = {
// //     loanAmount: "₹50,000",
// //     interestRate: "12% per annum",
// //     processingFee: "₹500",
// //     emi: "₹4,500",
// //     loanTenure: "12 months",
// //     otherCharges: "₹200 (Late payment fee)",
// //   };

// //   const downloadPDF = () => {
// //     const doc = new jsPDF();
// //     doc.setFontSize(16);
// //     doc.text("Key Fact Statement (KFS)", 20, 20);

// //     let y = 40;
// //     Object.entries(kfsData).forEach(([key, value]) => {
// //       doc.text(`${key.replace(/([A-Z])/g, " $1")}: ${value}`, 20, y);
// //       y += 10;
// //     });

// //     doc.save("KFS_Document.pdf");
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.card}>
// //         <h1 className={styles.heading}>Key Fact Statement (KFS)</h1>

// //         <div className={styles.kfsDetails}>
// //           {Object.entries(kfsData).map(([key, value]) => (
// //             <p key={key} className={styles.text}>
// //               <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value}
// //             </p>
// //           ))}
// //         </div>

// //         <button className={styles.button} onClick={downloadPDF}>
// //           Download PDF
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default KFS;
