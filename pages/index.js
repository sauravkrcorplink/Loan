import LoginPage from "./login"; // Import the LoginPage component
import HowItWork from "../components/accountDetail/HowItWork";
import Planning from "../components/common/Planning";
import Faq from "../components/faq/Faq";
import Features from "../components/home/Features";
import HomeBanner from "../components/home/HomeBanner";
import Personalized from "../components/home/Personalized";

export default function Index() {
  return (
    <>
      {/* Main Page Content */}
      <HomeBanner />

      {/* Login Component */}
      <LoginPage />

      {/* Other Sections */}
      <Features />
      <HowItWork />
      <Planning />
      <Personalized />
      <Faq />
    </>
  );
}


// import { useState } from "react";
// import { useRouter } from "next/router";
// import HowItWork from "../components/accountDetail/HowItWork";
// import Planning from "../components/common/Planning";
// import Faq from "../components/faq/Faq";
// import Features from "../components/home/Features";
// import HomeBanner from "../components/home/HomeBanner";
// import Personalized from "../components/home/Personalized";
// import styles from "../styles/Login.module.css";

// export default function Index() {
//   const [mobile, setMobile] = useState("");
//   const [showOtpDialog, setShowOtpDialog] = useState(false);
//   const [otp, setOtp] = useState(["", "", "", ""]); // For the 4 OTP inputs
//   const [timer, setTimer] = useState(60); // Countdown timer
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const correctOtp = "1234"; // Simulated OTP for verification

//   const startTimer = () => {
//     setTimer(60);
//     const countdown = setInterval(() => {
//       setTimer((prev) => {
//         if (prev <= 1) {
//           clearInterval(countdown);
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (mobile.length !== 10 || !/^[0-9]+$/.test(mobile)) {
//       alert("Please enter a valid 10-digit mobile number.");
//       return;
//     }
//     setShowOtpDialog(true); // Show OTP dialog
//     startTimer(); // Start timer
//   };

//   const handleOtpChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;
//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setOtp(newOtp);

//     if (value && index < otp.length - 1) {
//       document.getElementById(`otp-${index + 1}`).focus();
//     }
//   };

//   const handleNext = () => {
//     const enteredOtp = otp.join("");
//     if (enteredOtp === correctOtp) {
//       alert("Login Successful!");
//       router.push("/dashboard"); // Redirect to dashboard or another page
//     } else {
//       setError("Incorrect OTP. Please try again.");
//       setOtp(["", "", "", ""]); // Clear OTP inputs
//       document.getElementById("otp-0").focus();
//     }
//   };

//   return (
//     <>
//       <HomeBanner />
//       {!showOtpDialog ? (
//         <div className={styles.loginContainer}>
//           <h2>Login to Your Account</h2>
//           <form onSubmit={handleSubmit} className={styles.form}>
//             <label htmlFor="mobile">Mobile Number</label>
//             <input
//               type="text"
//               id="mobile"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               placeholder="Enter your mobile number"
//               maxLength={10}
//               required
//             />
//             <button type="submit">Continue</button>
//           </form>
//         </div>
//       ) : (
//         <div className={styles.otpContainer}>
//           <h4>Verify Mobile Number</h4>
//           <p>A 4-digit code has been sent to your mobile number ({mobile}).</p>
//           <div className={styles.otpInputContainer}>
//             {otp.map((digit, index) => (
//               <input
//                 key={index}
//                 id={`otp-${index}`}
//                 type="text"
//                 maxLength="1"
//                 value={digit}
//                 onChange={(e) => handleOtpChange(index, e.target.value)}
//                 onFocus={(e) => e.target.select()}
//                 onKeyDown={(e) => {
//                   if (e.key === "Backspace" && index > 0 && !otp[index]) {
//                     document.getElementById(`otp-${index - 1}`).focus();
//                   }
//                 }}
//               />
//             ))}
//           </div>
//           {error && <p className={styles.errorMessage}>{error}</p>}
//           <div className={styles.otpFooter}>
//             <button
//               onClick={() => {
//                 startTimer();
//                 setError("");
//               }}
//               disabled={timer > 0}
//             >
//               Resend OTP
//             </button>
//             <span>{`00:${timer.toString().padStart(2, "0")}`}</span>
//           </div>
//           <button onClick={handleNext}>Next</button>
//         </div>
//       )}
//       <Features />
//       <HowItWork />
//       <Planning />
//       <Personalized />
//       <Faq />
//     </>
//   );
// }


// import { useState } from "react";
// import { useRouter } from "next/router";
// import HowItWork from "../components/accountDetail/HowItWork";
// import CallToAction from "../components/callToAction/CallToAction";
// import Planning from "../components/common/Planning";
// import Faq from "../components/faq/Faq";
// import BusinessSolutions from "../components/home/BusinessSolutions";
// import Features from "../components/home/Features";
// import HomeBanner from "../components/home/HomeBanner";
// import Personalized from "../components/home/Personalized";
// import styles from "../styles/Login.module.css";

// export default function Index() {
//   const [mobile, setMobile] = useState("");
//   const router = useRouter();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate mobile number
//     if (mobile.length !== 10 || !/^[0-9]+$/.test(mobile)) {
//       alert("Please enter a valid 10-digit mobile number.");
//       return;
//     }

//     // Redirect to OTP flow
//     router.push(`/otp?mobile=${mobile}`);
//   };

//   return (
//     <>
//       <HomeBanner />
//       <div className={styles.loginContainer}>
//         <h2>Login to Your Account</h2>
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <label htmlFor="mobile">Mobile Number</label>
//           <input
//             type="text"
//             id="mobile"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             placeholder="Enter your mobile number"
//             maxLength={10}
//             required
//           />
//           <button type="submit">Continue</button>
//         </form>
//       </div>
//       <Features />
//       <HowItWork />
//       <Planning />
//       <Personalized />
//       <Faq />
//     </>
//   );
// }


// import { useEffect } from "react";
// import { useRouter } from "next/router";

// export default function Index() {
//   const router = useRouter();

//   useEffect(() => {
//     // Redirect to /home when the website is accessed
//     router.push("/home");
//   }, [router]);

//   return null; // No visual component; only handles redirection
// }


// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image"; // Import the Image component
// import styles from "../styles/SplashScreen.module.css"; // Ensure this CSS file includes new styles for the added section

// export default function SplashScreen() {
//   const [showSplash, setShowSplash] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     // Timer to transition to the login page
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//       router.push("/login"); // Redirect to login page
//     }, 5000); // Display splash screen for 3 seconds

//     return () => clearTimeout(timer); // Cleanup the timer
//   }, [router]);

//   if (showSplash) {
//     return (
//       <div className={styles.splashContainer}>
//         <div className={styles.logoContainer}>
//           <h1 className={styles.logoText}>LoanOne</h1>
//           <p className={styles.subtitle}>Financial Support when you need it most</p>
//         </div>
        
//         {/* Add new section below the logo */}
//         <div className={styles.featuresSection}>
//           <div className={styles.feature}>
//             <Image 
//               src="/images/splash1.jpg" // Update with the actual path to your image in the public folder
//               alt="Minimum Documents"
//               width={150}
//               height={100}
//             />
//             <h3>Minimum Documents</h3>
//             <p>We require only the essential documents for easy processing.</p>
//           </div>
//           <div className={styles.feature}>
//             <Image 
//               src="/images/splash2.jpg" // Update with the actual path to your image in the public folder
//               alt="Instant Loan Disbursal"
//               width={150}
//               height={100}
//             />
//             <h3>Instant Loan Disbursal</h3>
//             <p>Quick disbursal of loans without delays.</p>
//           </div>
//           <div className={styles.feature}>
//             <Image 
//               src="/images/splash4.jpg" // Update with the actual path to your image in the public folder
//               alt="Transparent Pricing"
//               width={150}
//               height={100}
//             />
//             <h3>Transparent Pricing</h3>
//             <p>No hidden charges, complete transparency in pricing.</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return null;
// }


// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import styles from "../styles/SplashScreen.module.css"; // Create this CSS file for styling

// export default function SplashScreen() {
//   const [showSplash, setShowSplash] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     // Timer to transition to the login page
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//       router.push("/login"); // Redirect to login page
//     }, 3000); // Display splash screen for 3 seconds

//     return () => clearTimeout(timer); // Cleanup the timer
//   }, [router]);

//   if (showSplash) {
//     return (
//       <div className={styles.splashContainer}>
//         <div className={styles.logoContainer}>
//           <h1 className={styles.logoText}>LoanOne</h1>
//           <p className={styles.subtitle}>Financial Support when you need it most</p>
//         </div>
//       </div>
//     );
//   }

//   return null;
// }


// // import { useEffect, useState } from "react";
// // import { useRouter } from "next/router";
// // import styles from "../styles/SplashScreen.module.css";
// // import HowItWork from "../components/accountDetail/HowItWork";
// // import CallToAction from "../components/callToAction/CallToAction";
// // import Planning from "../components/common/Planning";
// // import Faq from "../components/faq/Faq";
// // // import AppInfo from "../components/home/AppInfo";
// // // import BankioCard from "../components/home/BankioCard";
// // import BusinessSolutions from "../components/home/BusinessSolutions";
// // import Features from "../components/home/Features";
// // import HomeBanner from "../components/home/HomeBanner";
// // // import LatestArticles from "../components/home/LatestArticles";
// // import Personalized from "../components/home/Personalized";
// // // import Testimonials from "../components/home/Testimonials";

// // export default function Home() {
// //   const [showSplash, setShowSplash] = useState(true);
// //   const router = useRouter();

// //   useEffect(() => {
// //     // Timer to hide the splash screen
// //     const timer = setTimeout(() => {
// //       setShowSplash(false);
// //     }, 3000); // Display splash screen for 3 seconds

// //     return () => clearTimeout(timer); // Cleanup the timer
// //   }, []);

// //   if (showSplash) {
// //     return (
// //       <div className={styles.splashContainer}>
// //         <div className={styles.logoContainer}>
// //           <h1 className={styles.logoText}>LoanOne</h1>
// //           <p className={styles.subtitle}>Financial Support when you need it most</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Original homepage content
// //   return (
// //     <>
// //       <HomeBanner />
// //       <Features />
// //       {/* <BusinessSolutions /> */}
// //       <HowItWork />
// //       <Planning />
// //       <Personalized />
// //       {/* <AppInfo /> */}
// //       {/* <BankioCard /> */}
// //       {/* <CallToAction /> */}
// //       {/* <Testimonials /> */}
// //       {/* <LatestArticles /> */}
// //       <Faq />
// //     </>
// //   );
// // }


// // import HowItWork from "../components/accountDetail/HowItWork";
// // import CallToAction from "../components/callToAction/CallToAction";
// // import Planning from "../components/common/Planning";
// // import Faq from "../components/faq/Faq";
// // //import AppInfo from "../components/home/AppInfo";
// // //import BankioCard from "../components/home/BankioCard";
// // import BusinessSolutions from "../components/home/BusinessSolutions";
// // import Features from "../components/home/Features";
// // import HomeBanner from "../components/home/HomeBanner";
// // //import LatestArticles from "../components/home/LatestArticles";
// // import Personalized from "../components/home/Personalized";
// // //import Testimonials from "../components/home/Testimonials";

// // export default function Home() {
// //   return (
// //     <>
// //       <HomeBanner />
// //       <Features />
// //       {/* <BusinessSolutions /> */}
// //       <HowItWork/>
// //       <Planning />
// //       <Personalized />
      
// //       {/* <AppInfo /> */}
      
// //       {/* <BankioCard />
// //       <CallToAction />
      
// //       <Testimonials />
// //       <LatestArticles /> */}
// //       <Faq />
// //     </>
// //   );
// // }
