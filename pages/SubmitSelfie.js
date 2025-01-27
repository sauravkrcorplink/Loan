import { useState, useRef } from "react";
import { useRouter } from "next/router"; // Import useRouter
import Image from "next/image";
import styles from "../styles/SubmitSelfie.module.css";

export default function SubmitSelfie() {
  const [selfie, setSelfie] = useState(null); // Stores the captured selfie
  const [cameraOpen, setCameraOpen] = useState(false); // Controls camera visibility
  const [stream, setStream] = useState(null); // Stores media stream
  const videoRef = useRef(null); // Ref for the video element
  const canvasRef = useRef(null); // Ref for the canvas element
  const router = useRouter(); // Initialize router

  // Open the camera
  const handleOpenCamera = async () => {
    setCameraOpen(true);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  // Take a photo
  const handleTakePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");

      // Draw the video frame on the canvas
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

      // Create an oval mask
      context.globalCompositeOperation = "destination-in";
      context.beginPath();
      context.ellipse(
        canvasRef.current.width / 2, // Center X
        canvasRef.current.height / 2, // Center Y
        canvasRef.current.width / 2, // Horizontal radius
        canvasRef.current.height / 2, // Vertical radius
        0,
        0,
        2 * Math.PI
      );
      context.fill();

      // Get the oval-shaped image
      const imageData = canvasRef.current.toDataURL("image/png");
      setSelfie(imageData); // Save the captured image
      handleCloseCamera(); // Stop camera feed
    }
  };

  // Close the camera feed
  const handleCloseCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    setCameraOpen(false);
  };

  // Handle retake selfie
  const handleRetake = () => {
    setSelfie(null); // Clear the captured image
    handleOpenCamera(); // Reopen the camera
  };

  // Handle Selfie Submission
  const handleSubmit = () => {
    router.push("/AddressConfirmation"); // Navigate to the next page on success
  };

  return (
    <div className={styles.container}>
      {/* Progress Indicator */}
      <div className={styles.progressContainer}>
        {[5, 6, 7, 8].map((step, index) => (
          <div key={index} className={styles.step}>
            <div
              className={`${styles.circle} ${
                step === 5 ? styles.activeCircle : ""
              }`}
            >
              {step}
            </div>
            {step !== 8 && <div className={styles.line}></div>}
          </div>
        ))}
      </div>

      {/* Heading and Subheading */}
      <h1 className={styles.heading}>Submit Your Selfie</h1>
      <p className={styles.subheading}>Your Data is Completely Secure with us</p>

      {/* Selfie Section */}
      <div className={styles.selfieSection}>
        {/* Oval Selfie Placeholder */}
        <div className={styles.ovalShape}>
          {selfie ? (
            <Image 
              src={selfie} 
              alt="Selfie" 
              className={styles.selfieImage} 
              width={200} // Replace with your desired width
              height={250} // Replace with your desired height
              unoptimized // Use this if `selfie` is a base64 string
            />
          ) : (
            cameraOpen && <video ref={videoRef} autoPlay playsInline className={styles.video}></video>
          )}
        </div>

        {/* Camera and Buttons */}
        {!cameraOpen && !selfie && (
          <button className={styles.selfieButton} onClick={handleOpenCamera}>
            Selfie
          </button>
        )}

        {cameraOpen && (
          <div className={styles.cameraControls}>
            <canvas ref={canvasRef} width="300" height="300" className={styles.canvas}></canvas>
            <button className={styles.readyButton} onClick={handleTakePhoto}>
              Ready
            </button>
          </div>
        )}

        {selfie && (
          <button className={styles.retakeButton} onClick={handleRetake}>
            Retake
          </button>
        )}
      </div>

      {/* Next Button */}
      <button className={styles.nextButton} disabled={!selfie} onClick={handleSubmit}>
        Next
      </button>
    </div>
  );
}


// import { useState, useRef } from "react";
// // import { useRouter } from "next/router";
// import Image from "next/image";
// import styles from "../styles/SubmitSelfie.module.css";

// export default function SubmitSelfie() {
//     const [selfie, setSelfie] = useState(null); // Stores the captured selfie
//     const [cameraOpen, setCameraOpen] = useState(false); // Controls camera visibility
//     const [stream, setStream] = useState(null); // Stores media stream
//     const videoRef = useRef(null); // Ref for the video element
//     const canvasRef = useRef(null); // Ref for the canvas element

// // Open the camera
//   const handleOpenCamera = async () => {
//     setCameraOpen(true);
//     try {
//       const mediaStream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//       });
//       setStream(mediaStream);
//       if (videoRef.current) {
//         videoRef.current.srcObject = mediaStream;
//       }
//     } catch (error) {
//       console.error("Error accessing camera:", error);
//     }
//   };

// // Take a photo
// const handleTakePhoto = () => {
//     if (videoRef.current && canvasRef.current) {
//       const context = canvasRef.current.getContext("2d");

//       // Draw the video frame on the canvas
//       context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

//       // Create an oval mask
//       context.globalCompositeOperation = "destination-in";
//       context.beginPath();
//       context.ellipse(
//         canvasRef.current.width / 2, // Center X
//         canvasRef.current.height / 2, // Center Y
//         canvasRef.current.width / 2, // Horizontal radius
//         canvasRef.current.height / 2, // Vertical radius
//         0,
//         0,
//         2 * Math.PI
//       );
//       context.fill();

//       // Get the oval-shaped image
//       const imageData = canvasRef.current.toDataURL("image/png");
//       setSelfie(imageData); // Save the captured image
//       handleCloseCamera(); // Stop camera feed
//     }
//   };

//   // Close the camera feed
//   const handleCloseCamera = () => {
//     if (stream) {
//       stream.getTracks().forEach((track) => track.stop());
//       setStream(null);
//     }
//     setCameraOpen(false);
//   };

//   // Handle retake selfie
//   const handleRetake = () => {
//     setSelfie(null); // Clear the captured image
//     handleOpenCamera(); // Reopen the camera
//   };

//   // Handle Selfie Submission
//   const handleSubmit = () => {
//       router.push("/AddressConfirmation"); // Navigate to the next page on success
//   };

//   return (
//     <div className={styles.container}>
//       {/* Progress Indicator */}
//       <div className={styles.progressContainer}>
//         {[5, 6, 7, 8].map((step, index) => (
//           <div key={index} className={styles.step}>
//             <div
//               className={`${styles.circle} ${
//                 step === 5 ? styles.activeCircle : ""
//               }`}
//             >
//               {step}
//             </div>
//             {step !== 8 && <div className={styles.line}></div>}
//           </div>
//         ))}
//       </div>

//       {/* Heading and Subheading */}
//       <h1 className={styles.heading}>Submit Your Selfie</h1>
//       <p className={styles.subheading}>Your Data is Completely Secure with us</p>

//      {/* Selfie Section */}
//      <div className={styles.selfieSection}>
//         {/* Oval Selfie Placeholder */}
//         <div className={styles.ovalShape}>
//           {selfie ? (
//             <Image 
//   src={selfie} 
//   alt="Selfie" 
//   className={styles.selfieImage} 
//   width={200} // Replace with your desired width
//   height={250} // Replace with your desired height
//   unoptimized // Use this if `selfie` is a base64 string
// />
//           ) : (
//             cameraOpen && <video ref={videoRef} autoPlay playsInline className={styles.video}></video>
//           )}
//         </div>

//         {/* Camera and Buttons */}
//         {!cameraOpen && !selfie && (
//           <button className={styles.selfieButton} onClick={handleOpenCamera}>
//             Selfie
//           </button>
//         )}

//         {cameraOpen && (
//           <div className={styles.cameraControls}>
//             <canvas ref={canvasRef} width="300" height="300" className={styles.canvas}></canvas>
//             <button className={styles.readyButton} onClick={handleTakePhoto}>
//               Ready
//             </button>
//           </div>
//         )}

//         {selfie && (
//           <button className={styles.retakeButton} onClick={handleRetake}>
//             Retake
//           </button>
//         )}
//       </div>




//       {/* Next Button */}
//       <button className={styles.nextButton} disabled={!selfie} onClick={handleSubmit}>
//         Next
//       </button>
//     </div>
//   );
// }


// import { useState, useRef } from "react";
// import styles from "../styles/SubmitSelfie.module.css";

// export default function SubmitSelfie() {
//   const [selfie, setSelfie] = useState(null); // Stores the captured selfie
//   const [cameraOpen, setCameraOpen] = useState(false); // Controls camera visibility
//   const [stream, setStream] = useState(null); // Stores media stream
//   const videoRef = useRef(null); // Ref for the video element
//   const canvasRef = useRef(null); // Ref for the canvas element

//   // Open the camera
//   const handleOpenCamera = async () => {
//     setCameraOpen(true);
//     try {
//       const mediaStream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//       });
//       setStream(mediaStream);
//       if (videoRef.current) {
//         videoRef.current.srcObject = mediaStream;
//       }
//     } catch (error) {
//       console.error("Error accessing camera:", error);
//     }
//   };

//   // Take a photo
//   const handleTakePhoto = () => {
//     if (videoRef.current && canvasRef.current) {
//       const context = canvasRef.current.getContext("2d");

//       // Draw the video frame on the canvas
//       context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);

//       // Create an oval mask
//       context.globalCompositeOperation = "destination-in";
//       context.beginPath();
//       context.ellipse(
//         canvasRef.current.width / 2, // Center X
//         canvasRef.current.height / 2, // Center Y
//         canvasRef.current.width / 2, // Horizontal radius
//         canvasRef.current.height / 2, // Vertical radius
//         0,
//         0,
//         2 * Math.PI
//       );
//       context.fill();

//       // Get the oval-shaped image
//       const imageData = canvasRef.current.toDataURL("image/png");
//       setSelfie(imageData); // Save the captured image
//       handleCloseCamera(); // Stop camera feed
//     }
//   };

//   // Close the camera feed
//   const handleCloseCamera = () => {
//     if (stream) {
//       stream.getTracks().forEach((track) => track.stop());
//       setStream(null);
//     }
//     setCameraOpen(false);
//   };

//   // Handle retake selfie
//   const handleRetake = () => {
//     setSelfie(null); // Clear the captured image
//     handleOpenCamera(); // Reopen the camera
//   };

//   return (
//     <div className={styles.container}>
//       {/* Heading */}
//       <h1 className={styles.heading}>Submit Your Selfie</h1>
//       <p className={styles.subheading}>Your Data is Completely Secure with us</p>

//       {/* Selfie Section */}
//       <div className={styles.selfieSection}>
//         {/* Oval Selfie Placeholder */}
//         <div className={styles.ovalShape}>
//           {selfie ? (
//             <img src={selfie} alt="Selfie" className={styles.selfieImage} />
//           ) : (
//             cameraOpen && <video ref={videoRef} autoPlay playsInline className={styles.video}></video>
//           )}
//         </div>

//         {/* Camera and Buttons */}
//         {!cameraOpen && !selfie && (
//           <button className={styles.selfieButton} onClick={handleOpenCamera}>
//             Selfie
//           </button>
//         )}

//         {cameraOpen && (
//           <div className={styles.cameraControls}>
//             <canvas ref={canvasRef} width="300" height="300" className={styles.canvas}></canvas>
//             <button className={styles.readyButton} onClick={handleTakePhoto}>
//               Ready
//             </button>
//           </div>
//         )}

//         {selfie && (
//           <button className={styles.retakeButton} onClick={handleRetake}>
//             Retake
//           </button>
//         )}
//       </div>

//       {/* Submit Button */}
//       <button className={styles.submitButton} disabled={!selfie}>
//         Submit
//       </button>
//     </div>
//   );
// }



// import { useState, useRef } from "react";
// import styles from "../styles/SubmitSelfie.module.css";

// export default function SubmitSelfie() {
//   const [selfie, setSelfie] = useState(null); // Stores the captured selfie
//   const [cameraOpen, setCameraOpen] = useState(false); // Controls camera visibility
//   const [stream, setStream] = useState(null); // Stores media stream
//   const videoRef = useRef(null); // Ref for the video element
//   const canvasRef = useRef(null); // Ref for the canvas element

//   // Open the camera
//   const handleOpenCamera = async () => {
//     setCameraOpen(true);
//     try {
//       const mediaStream = await navigator.mediaDevices.getUserMedia({
//         video: true,
//       });
//       setStream(mediaStream);
//       if (videoRef.current) {
//         videoRef.current.srcObject = mediaStream;
//       }
//     } catch (error) {
//       console.error("Error accessing camera:", error);
//     }
//   };

//   // Take a photo
//   const handleTakePhoto = () => {
//     if (videoRef.current && canvasRef.current) {
//       const context = canvasRef.current.getContext("2d");
//       context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
//       const imageData = canvasRef.current.toDataURL("image/png");
//       setSelfie(imageData); // Save the captured image
//       handleCloseCamera(); // Stop camera feed
//     }
//   };

//   // Close the camera feed
//   const handleCloseCamera = () => {
//     if (stream) {
//       stream.getTracks().forEach((track) => track.stop());
//       setStream(null);
//     }
//     setCameraOpen(false);
//   };

//   // Handle retake selfie
//   const handleRetake = () => {
//     setSelfie(null); // Clear the captured image
//     handleOpenCamera(); // Reopen the camera
//   };

//   return (
//     <div className={styles.container}>
//       {/* Heading */}
//       <h1 className={styles.heading}>Submit Your Selfie</h1>
//       <p className={styles.subheading}>Your Data is Completely Secure with us</p>

//       {/* Selfie Section */}
//       <div className={styles.selfieSection}>
//         {/* Oval Selfie Placeholder */}
//         <div className={styles.ovalShape}>
//           {selfie ? (
//             <img src={selfie} alt="Selfie" />
//           ) : (
//             <p className={styles.placeholderText}>Your selfie will appear here</p>
//           )}
//         </div>

//         {/* Camera and Buttons */}
//         {!cameraOpen && !selfie && (
//           <button className={styles.selfieButton} onClick={handleOpenCamera}>
//             Selfie
//           </button>
//         )}

//         {cameraOpen && (
//           <div className={styles.cameraFeed}>
//             <video ref={videoRef} autoPlay playsInline className={styles.video}></video>
//             <canvas ref={canvasRef} className={styles.canvas}></canvas>
//             <button className={styles.readyButton} onClick={handleTakePhoto}>
//               Ready
//             </button>
//           </div>
//         )}

//         {selfie && (
//           <button className={styles.retakeButton} onClick={handleRetake}>
//             Retake
//           </button>
//         )}
//       </div>

//       {/* Submit Button */}
//       <button className={styles.submitButton} disabled={!selfie}>
//         Submit
//       </button>
//     </div>
//   );
// }




// import React, { useState } from "react";
// import styles from "../styles/SubmitSelfie.module.css";
// import Image from "next/image";

// export default function SubmitSelfie() {
//   const [selfie, setSelfie] = useState(null); // State to store the selfie
//   const [error, setError] = useState(""); // State to handle errors

//   // Function to handle selfie capture
//   const captureSelfie = () => {
//     setError("");
//     navigator.mediaDevices
//       .getUserMedia({ video: true })
//       .then((stream) => {
//         const videoElement = document.createElement("video");
//         videoElement.srcObject = stream;
//         videoElement.play();

//         const canvas = document.createElement("canvas");
//         const context = canvas.getContext("2d");

//         setTimeout(() => {
//           context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
//           const imageData = canvas.toDataURL("image/png");
//           setSelfie(imageData);
//           videoElement.pause();
//           stream.getTracks().forEach((track) => track.stop());
//         }, 3000); // Capture the selfie after 3 seconds
//       })
//       .catch((err) => {
//         setError("Unable to access camera. Please check permissions.");
//         console.error(err);
//       });
//   };

//   // Function to handle retake
//   const handleRetake = () => {
//     setSelfie(null);
//   };

//   // Function to handle submit
//   const handleSubmit = () => {
//     if (!selfie) {
//       setError("Please capture a selfie before submitting.");
//       return;
//     }
//     console.log("Selfie submitted: ", selfie);
//     // Add logic to save the selfie (e.g., send it to a server)
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.heading}>Submit your Selfie</h1>
//       <p className={styles.subheading}>Your Data is Completely Secure with us</p>

//       <div className={styles.selfieContainer}>
//         {selfie ? (
//           <img
//             src={selfie}
//             alt="Captured Selfie"
//             className={styles.selfieImage}
//           />
//         ) : (
//           <div className={styles.selfiePlaceholder}></div>
//         )}

//         <button className={styles.captureButton} onClick={captureSelfie}>
//           <Image src="/camera-icon.png" alt="Camera Icon" width={24} height={24} />
//         </button>

//         {selfie && (
//           <button className={styles.retakeButton} onClick={handleRetake}>
//             Retake
//           </button>
//         )}
//       </div>

//       {error && <p className={styles.errorMessage}>{error}</p>}

//       <button className={styles.submitButton} onClick={handleSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// }
