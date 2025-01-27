// LoanApplication.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  userData,
  currentApplication,
  pastLoans,
} from "../user-profile/mockData";
import Image from "next/image";

const LoanApplication = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    panNumber: "",
    aadharNumber: "",
    selfieImage: null,
    loanDetails: {
      reason: "",
      amount: "",
      type: "Personal Loan",
    },
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
      gender: "",
      dob: "",
      occupation: "",
      income: "",
      residenceType: "",
    },
  });
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);

  const [timer, setTimer] = useState(10);
  const [canResend, setCanResend] = useState(false);
  const [stream, setStream] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNumber] = useState(    `#${Math.random().toString(36).substr(2, 9).toUpperCase()}`  );

  // Load user data when component mounts
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      personalInfo: {
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
        gender: userData.gender,
        dob: userData.dob,
        occupation: userData.occupation,
        income: userData.income,
        residenceType: currentApplication.residenceType,
      },
    }));
  }, [otpValues, formData.aadharNumber.length]); // Add these as dependencies
  

  const handlePanVerification = (e) => {
    e.preventDefault();
    // In real app, verify PAN
    setStep(2);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Prevent multiple digits in one box
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const startTimer = () => {
    setTimer(10);
    setCanResend(false);
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };


  const handleAadharVerification = (e) => {
    e.preventDefault();
    if (formData.aadharNumber.length === 12) {
      setShowOtp(true);
      setOtpSent(true); // Set OTP sent state to true
      startTimer(); // Start OTP resend timer
    }
  };

  const handleResendOtp = () => {
    startTimer();
    setOtpValues(["", "", "", "", "", ""]);
    alert("New OTP sent to registered mobile number");
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();
    const enteredOtp = otpValues.join("");
    if (enteredOtp === "123456") {
      setOtpVerified(true);
      setStep(3);
    } else {
      alert("Invalid OTP");
    }
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert(
        "Unable to access camera. Please ensure you have given camera permissions."
      );
    }
  };

  const captureSelfie = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        const file = new File([blob], "selfie.jpg", { type: "image/jpeg" });
        setFormData({ ...formData, selfieImage: file });
        setCapturedImage(canvas.toDataURL("image/jpeg"));
      }, "image/jpeg");
    }
  };

  const retakeSelfie = () => {
    setCapturedImage(null);
    setFormData({ ...formData, selfieImage: null });
    startCamera();
  };

  // Add this verification function
const handleSelfieVerification = async (e) => {
    e.preventDefault();
    
    if (!formData.selfieImage) {
      alert('Please capture a selfie first');
      return;
    }
  
    try {
      // Here you would typically:
      // 1. Create a FormData object
      const formDataToSend = new FormData();
      formDataToSend.append('selfie', formData.selfieImage);
  
      // 2. Send the image to your backend
      // In a real application, you would make an API call here
      // const response = await fetch('/api/verify-selfie', {
      //   method: 'POST',
      //   body: formDataToSend
      // });
      
      // 3. For this demo, we'll simulate a successful verification
      console.log('Selfie verification successful');
      
      // 4. Move to next step
      setStep(4);
    } catch (error) {
      console.error('Error verifying selfie:', error);
      alert('Failed to verify selfie. Please try again.');
    }
  };

  const handleLoanDetails = (e) => {
    e.preventDefault();
    setStep(5);
  };

  const handleProfileReview = (e) => {
    e.preventDefault();
    setStep(6);
  };

  const handleFinalSubmission = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Step 1: PAN Verification</h5>
              <form onSubmit={handlePanVerification}>
                <div className="mb-3">
                  <label className="form-label">PAN Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.panNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, panNumber: e.target.value.toUpperCase() })
                    }
                    required
                    pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                    placeholder="ABCDE1234F"
                  />
                  <small className="text-muted">
                    Enter 10-digit PAN number
                  </small>
                </div>
                <button type="submit" className="btn btn-primary">
                  <i className="bi bi-check-circle"></i> Verify PAN
                </button>
              </form>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Step 2: Aadhar Verification</h5>
              <form
                onSubmit={
                  !showOtp ? handleAadharVerification : handleOtpVerification
                }
              >
                <div className="mb-3">
                  <label className="form-label">Aadhar Number</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.aadharNumber}
                    onChange={(e) => {
                      const value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 12);
                      setFormData({ ...formData, aadharNumber: value });
                    }}
                    placeholder="123456789012"
                    required
                    disabled={showOtp}
                  />
                  {!showOtp && otpSent && (
              <small className="text-success">
                OTP has been sent to your registered mobile number.
              </small>
            )}
                </div>

                {!showOtp ? (
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={formData.aadharNumber.length !== 12}
                  >
                    <i className="bi bi-send"></i> Send OTP
                  </button>
                ) : (
                  <div>
                    <div className="mb-3">
                      <label className="form-label">Enter OTP</label>
                      <div className="d-flex gap-2 mb-2">
                        {otpValues.map((value, index) => (
                          <input
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            className="form-control text-center"
                            value={value}
                            onChange={(e) =>
                              handleOtpChange(index, e.target.value)
                            }
                            maxLength={1}
                            style={{ width: "45px" }}
                            required
                          />
                        ))}
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">
                          For testing, use OTP: 123456
                        </small>
                        {timer > 0 ? (
                          <small className="text-muted">
                            Resend OTP in {timer}s
                          </small>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-link btn-sm p-0"
                            onClick={handleResendOtp}
                            disabled={!canResend}
                          >
                            Resend OTP
                          </button>
                        )}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={otpValues.some((value) => !value)}
                    >
                      <i className="bi bi-shield-check"></i> Verify OTP
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        );

        case 3:
            return (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Step 3: Selfie Verification</h5>
                  <form onSubmit={handleSelfieVerification}>
                    <div className="mb-3">
                      {!capturedImage ? (
                        <div className="text-center">
                          <div className="position-relative mb-3" style={{ maxWidth: '400px', margin: '0 auto' }}>
                            {!stream && (
                              <div className="d-grid">
                                <button 
                                  type="button" 
                                  className="btn btn-primary mb-3"
                                  onClick={startCamera}
                                >
                                  <i className="bi bi-camera"></i> Open Camera
                                </button>
                              </div>
                            )}
                            <video
                              ref={videoRef}
                              autoPlay
                              playsInline
                              muted
                              style={{
                                width: '100%',
                                borderRadius: '8px',
                                display: stream ? 'block' : 'none'
                              }}
                            />
                            {stream && (
                              <button
                                type="button"
                                className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x mb-3"
                                onClick={captureSelfie}
                              >
                                <i className="bi bi-camera"></i> Capture Selfie
                              </button>
                            )}
                          </div>
                          <canvas ref={canvasRef} style={{ display: 'none' }} />
                        </div>
                      ) : (
                        <div className="text-center">
                          <Image
                            src={capturedImage}
                            alt="Captured selfie"
                            className="img-fluid mb-3"
                            style={{ 
                              maxWidth: '400px', 
                              borderRadius: '8px'
                            }}
                            width={400}
                            height={400}
                          />
                          <div className="d-grid gap-2" style={{ maxWidth: '400px', margin: '0 auto' }}>
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={retakeSelfie}
                            >
                              <i className="bi bi-arrow-counterclockwise"></i> Retake Selfie
                            </button>
                            <button
                              type="submit"
                              className="btn btn-primary"
                            >
                              <i className="bi bi-check-circle"></i> Submit Selfie
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            );

            case 4:
                return (
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Step 4: Loan Details</h5>
                      <div className="alert alert-info">
                        <h6><i className="bi bi-info-circle"></i> Credit Score</h6>
                        <p className="mb-0">Your current credit score: {userData.creditScore}</p>
                      </div>
                      <form onSubmit={handleLoanDetails}>
                        <div className="mb-3">
                          <label className="form-label">Loan Type</label>
                          <select
                            className="form-select"
                            value={formData.loanDetails.type}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                loanDetails: {
                                  ...formData.loanDetails,
                                  type: e.target.value,
                                },
                              })
                            }
                          >
                            <option value="Personal Loan">Personal Loan</option>
                            <option value="Home Loan">Home Loan</option>
                            <option value="Car Loan">Car Loan</option>
                            <option value="Education Loan">Education Loan</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Reason for Loan</label>
                          <textarea
                            className="form-control"
                            value={formData.loanDetails.reason}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                loanDetails: {
                                  ...formData.loanDetails,
                                  reason: e.target.value,
                                },
                              })
                            }
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Loan Amount</label>
                          <div className="input-group">
                            <span className="input-group-text">₹</span>
                            <input
                              type="number"
                              className="form-control"
                              value={formData.loanDetails.amount}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  loanDetails: {
                                    ...formData.loanDetails,
                                    amount: e.target.value,
                                  },
                                })
                              }
                              required
                            />
                          </div>
                        </div>
                        <div className="mb-3">
                          <h6>Past Loans</h6>
                          <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                              <thead className="table-light">
                                <tr>
                                  <th>Type</th>
                                  <th>Amount</th>
                                  <th>Status</th>
                                  <th>Start Date</th>
                                  <th>End Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                {pastLoans.map((loan) => (
                                  <tr key={loan.id}>
                                    <td>{loan.type}</td>
                                    <td>₹{loan.amount.toLocaleString()}</td>
                                    <td>
                                      <span className={`badge ${
                                        loan.status === 'Completed' ? 'bg-success' :
                                        loan.status === 'Active' ? 'bg-primary' :
                                        'bg-warning'
                                      }`}>
                                        {loan.status}
                                      </span>
                                    </td>
                                    <td>{loan.startDate}</td>
                                    <td>{loan.endDate}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          <i className="bi bi-arrow-right"></i> Next
                        </button>
                      </form>
                    </div>
                  </div>
                );

      case 5:
        return (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Step 5: Profile Information</h5>
              <form onSubmit={handleProfileReview}>
                {Object.entries(formData.personalInfo).map(([key, value]) => (
                  <div className="mb-3" key={key}>
                    <label className="form-label">
                      {key.charAt(0).toUpperCase() +
                        key.slice(1).replace(/([A-Z])/g, " $1")}
                    </label>
                    <input
                      type={
                        key === "email"
                          ? "email"
                          : key === "dob"
                          ? "date"
                          : "text"
                      }
                      className="form-control"
                      value={value}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          personalInfo: {
                            ...formData.personalInfo,
                            [key]: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                ))}
                <div className="mb-3">
                  <h6>Uploaded Documents</h6>
                  <div className="list-group">
                    {userData.documents.map((doc) => (
                      <div key={doc.id} className="list-group-item">
                        <i className="bi bi-file-earmark-pdf text-danger me-2"></i>
                        {doc.name}
                        <small className="text-muted ms-2">({doc.type})</small>
                        <small className="float-end">{doc.uploadDate}</small>
                      </div>
                    ))}
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  <i className="bi bi-arrow-right"></i> Review Application
                </button>
              </form>
            </div>
          </div>
        );

        case 6:
            return isSubmitted ? (
                <div className="card">
      <div className="card-body text-center">
        <div className="mb-4">
          <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '4rem' }}></i>
        </div>
        <h4 className="card-title mb-4">Application Submitted Successfully!</h4>
        <div className="alert alert-success mb-4">
          <p className="mb-1">
            Application Reference Number: <strong>{referenceNumber}</strong>
          </p>
          <p className="mb-0">Date: {new Date().toLocaleDateString()}</p>
        </div>
        <div className="text-start mb-4">
          <h6>What&apos;s Next?</h6>
          <ol className="list-group list-group-numbered mb-4">
            <li className="list-group-item">
              Our team will review your application within 24-48 hours
            </li>
            <li className="list-group-item">You&apos;ll receive updates via SMS and email</li>
            <li className="list-group-item">
              Additional documents may be requested if needed
            </li>
            <li className="list-group-item">Final approval decision will be communicated</li>
          </ol>
        </div>
        <div className="d-grid gap-2">
          <button
            className="btn btn-primary"
            onClick={() => (window.location.href = '/')}
          >
            <i className="bi bi-house"></i> Back to Home
          </button>
          <button className="btn btn-outline-primary" onClick={() => window.print()}>
            <i className="bi bi-printer"></i> Print Summary
          </button>
        </div>
      </div>
    </div>
            ) : (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Step 6: Application Summary</h5>
                  
                  {/* Verification Details */}
                  <div className="mb-4">
                    <h6 className="border-bottom pb-2">Identity Verification</h6>
                    <div className="row">
                      <div className="col-md-6">
                        <p><strong>PAN Number: </strong>{formData.panNumber}</p>
                        <p><strong>Aadhar Number: </strong>{formData.aadharNumber}</p>
                      </div>
                      <div className="col-md-6">
                        {formData.selfieImage && (
                          <div className="text-center">
                            <p><strong>Selfie Verification</strong></p>
                            <Image 
                              src={URL.createObjectURL(formData.selfieImage)} 
                              alt="Verified Selfie" 
                              className="img-thumbnail" 
width={150}                            
height={150}                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
          
                  {/* Personal Information */}
                  <div className="mb-4">
                    <h6 className="border-bottom pb-2">Personal Information</h6>
                    <div className="row">
                      {Object.entries(formData.personalInfo).map(([key, value]) => (
                        <div className="col-md-6" key={key}>
                          <p>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}: </strong>
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
          
                  {/* Loan Details */}
                  <div className="mb-4">
                    <h6 className="border-bottom pb-2">Loan Details</h6>
                    <div className="row">
                      <div className="col-md-6">
                        <p><strong>Type: </strong>{formData.loanDetails.type}</p>
                        <p><strong>Amount: </strong>₹{Number(formData.loanDetails.amount).toLocaleString()}</p>
                      </div>
                      <div className="col-md-6">
                        <p><strong>Credit Score: </strong>{userData.creditScore}</p>
                        <p><strong>Purpose: </strong>{formData.loanDetails.reason}</p>
                      </div>
                    </div>
                  </div>
          
                  {/* Documents */}
                  <div className="mb-4">
                    <h6 className="border-bottom pb-2">Documents Submitted</h6>
                    <div className="table-responsive">
                      <table className="table table-sm">
                        <thead className="table-light">
                          <tr>
                            <th>Document Type</th>
                            <th>Name</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userData.documents.map((doc) => (
                            <tr key={doc.id}>
                              <td><i className="bi bi-file-earmark-pdf text-danger me-2"></i>{doc.type}</td>
                              <td>{doc.name}</td>
                              <td><span className="badge bg-success">Verified</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
          
                  {/* Terms and Conditions */}
                  <div className="mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="termsCheck" required />
                      <label className="form-check-label" htmlFor="termsCheck">
                        I confirm that all the information provided is accurate and I agree to the terms and conditions
                      </label>
                    </div>
                  </div>
          
                  {/* Action Buttons */}
                  <div className="d-flex gap-2">
                    <button onClick={() => setStep(5)} className="btn btn-secondary">
                      <i className="bi bi-pencil"></i> Edit Details
                    </button>
                    <button 
                      onClick={handleFinalSubmission} 
                      className="btn btn-success"
                      form="loanForm"
                    >
                      <i className="bi bi-check2-circle"></i> Submit Application
                    </button>
                  </div>
                </div>
              </div>
            );

      default:
        return null;
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="text-center mb-4">
            <h2>Loan Application</h2>
            <p className="text-muted">
              Complete all steps to submit your loan application
            </p>
          </div>

          <div className="progress mb-4" style={{ height: "25px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${(step / 6) * 100}%`,
                transition: "width 0.5s ease-in-out",
              }}
              aria-valuenow={(step / 6) * 100}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              Step {step} of 6
            </div>
          </div>

          <div className="step-content">{renderStep()}</div>

          <div className="text-center mt-4">
            <p className="text-muted">
              Need help? Contact our support at support@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanApplication;
