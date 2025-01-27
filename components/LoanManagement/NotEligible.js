import { useRouter } from "next/router";
import styles from "../../styles/LoanManagement.module.css";
import Image from "next/image"; // Import Image component from next/image

export default function NotEligible() {
  const router = useRouter();

  return (
    <div className={styles.notEligibleContainer}>
      <div className={styles.notEligibleContent}>
        {/* Icon */}
        <div className={styles.iconContainer}>
          <Image
            src="/images/noteligible.png" // Replace with the actual path to your icon
            alt="Not Eligible Icon"
            width={200} // Specify width
            height={100} // Specify height
            className={styles.notEligibleIcon}
          />
        </div>

        <h1 className={styles.notEligibleHeading}>Sorry! You are not eligible.</h1>
        
        <button
          className={styles.backButton}
          onClick={() => router.push("/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}


// // components/NotEligible.js
// import { useRouter } from "next/router";
// import styles from "../../styles/LoanManagement.module.css";

// export default function NotEligible() {
//   const router = useRouter();

//   return (
//     <div className={styles.container}>
//     <div style={{ textAlign: "center", padding: "50px", background: "#f3f3f3" }}>
//       <div style={{ fontSize: "50px", color: "#ff4d4f" }}>❌</div>
//       <h1>Sorry! You are not eligible.</h1>
//       <button
//         style={{
//           padding: "10px 20px",
//           background: "#007bff",
//           color: "#fff",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//         onClick={() => router.push("/")}
//       >
//         Back to Home
//       </button>
//     </div>
//     </div>
//   );
// }
