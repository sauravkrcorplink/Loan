import styles from "../../styles/LoanManagement.module.css";
import Image from "next/image"; // Import the Image component from next/image

export default function NoDues() {
  return (
    <div className={styles.noDuesContainer}>
      {/* Icon Section */}
      <div className={styles.iconContainer}>
        <Image
          src="/images/nodue.png" // Replace with the actual path to your icon
          alt="No Dues Icon"
          width={190} // Specify width
          height={100} // Specify height
          className={styles.noDuesIcon}
        />
      </div>

      {/* Text Section */}
      <div className={styles.textContainer}>
        <h1 className={styles.noDuesHeading}>No Due Payment</h1>
        <p className={styles.noDuesMessage}>
          You don’t have any active loan for now.
        </p>
      </div>
    </div>
  );
}


// // components/NoDues.js
// import styles from "../../styles/LoanManagement.module.css";

// export default function NoDues() {
//     return (
//       <div className={styles.container}>
//       <div style={{ textAlign: "center", padding: "50px", background: "#f3f3f3" }}>
//         <h1>No Due Payment</h1>
//         <p>You don’t have any active loan for now.</p>
//       </div>
//       </div>
//     );
//   }
  