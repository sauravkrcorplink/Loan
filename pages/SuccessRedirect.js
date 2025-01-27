// pages/SuccessRedirect.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from '../styles/SuccessRedirect.module.css'

export default function SuccessRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Simulate a delay for the transaction success
    setTimeout(() => {
      router.push("/BankInfo?redirectToBankInfo=true");
    }, 3000); // Redirect after 3 seconds
  }, [router]);

  return (
    <div className={styles.container}>
      <h2>Transaction Successful!</h2>
      <p>You will be redirected to complete the rest of the information.</p>
    </div>
  );
}



// // pages/SuccessRedirect.js
// import { useEffect } from "react";
// import { useRouter } from "next/router";

// export default function SuccessRedirect() {
//   const router = useRouter();

//   useEffect(() => {
//     // Simulate a delay for the transaction success
//     setTimeout(() => {
//       router.push("/BankInfo?redirectToBankInfo=true");
//     }, 3000); // Redirect after 3 seconds
//   }, [router]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Transaction Successful!</h1>
//       <p>You will be redirected to complete the rest of the information.</p>
//     </div>
//   );
// }
