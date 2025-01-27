// pages/home.js
const Home = () => {
    return <div>Welcome to the Home page!</div>;
  };
  
  export default Home;

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

// export default function Home() {
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



// import HowItWork from "../components/accountDetail/HowItWork";
// import CallToAction from "../components/callToAction/CallToAction";
// import Planning from "../components/common/Planning";
// import Faq from "../components/faq/Faq";
// import BusinessSolutions from "../components/home/BusinessSolutions";
// import Features from "../components/home/Features";
// import HomeBanner from "../components/home/HomeBanner";
// import Personalized from "../components/home/Personalized";

// export default function Home() {
//   return (
//     <>
//       <HomeBanner />
//       <Features />
//       <HowItWork />
//       <Planning />
//       <Personalized />
//       <Faq />
//     </>
//   );
// }
