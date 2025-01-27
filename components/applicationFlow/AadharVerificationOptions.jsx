import React, { useState } from "react";

const AadhaarVerificationOptions = ({ handleNext, handleBack }) => {
  const [showAadhaarInputs, setShowAadhaarInputs] = useState(false);
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [aadhaarName, setaAdhaarName] = useState("Narayan Singh");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [otp, setOtp] = useState("");

  const handleAadhaarOptionClick = () => {
    setShowAadhaarInputs(true);
  };
  
  const handleSendAadharOTP = async (e) => {
    e.preventDefault();
    const dataAadhar = {
      aaddharNo: aadhaarNumber,
      aaddharName: aadhaarName,
    };
    //console.log(aadharNo, aadharName);
    try {
      const response = await fetch("http://localhost:5001/user/register-aadhar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataAadhar),
      });

      if (!response) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      //setData(result);
      setMessage(result.message);
      
      //alert(message);
      
      if(result.status){
        setTimeout(() => {
          handleNext();
        }, 3000);
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

 const handleVerifyAadharOTP=(e)=>{
  e.preventDefault();
  alert("Verified Aadhar card")
 }

  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      <h3 className="mb-4">Verify Aadhaar</h3>

      <div
        className="card mb-3"
        onClick={handleNext}
        style={{ cursor: "pointer" }}
      >
        <div className="card-body d-flex justify-content-between align-items-center">
          <span>Verify with DigiLocker</span>
          <span className="badge bg-success">Recommended</span>
        </div>
      </div>

      <div
        className="card"
        onClick={handleAadhaarOptionClick}
        style={{ cursor: "pointer" }}
      >
        <div className="card-body">Via Aadhaar OTP</div>
      </div>
      {showAadhaarInputs && (
          <div className="m-3">
          <div className="flex-row">
            <label htmlFor="aadhaarNumber" className="form-label">
              Enter Aadhaar Number:
            </label>
            <input
              type="text"
              id="aadhaarNumber"
              value={aadhaarNumber}
              onChange={(e) => setAadhaarNumber(e.target.value)}
              className="form-control mb-3"
              placeholder="Enter Aadhaar Number"
            />
            <button className="btn btn-primary btn-sm" onClick={handleSendAadharOTP}>Get OTP</button>
            </div>

            <p>{message}</p>

            <label htmlFor="otp" className="form-label">
              Enter OTP:
            </label>
            <div style={{ display: "flex", gap: "4px" }}>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="form-control"
                style={{ width: "5%" }}
              />
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="form-control"
                style={{ width: "5%" }}
              />
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="form-control"
                style={{ width: "5%" }}
              />
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="form-control"
                style={{ width: "5%" }}
              />
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="form-control"
                style={{ width: "5%" }}
              />
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="form-control"
                style={{ width: "5%" }}
              />
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <span style={{ fontSize: "14px" }}>Have not received your OTP?</span>
              <span style={{ fontSize: "14px", color: "#1a4dbe" }}>
                Resend
              </span>
            </div>

            <button className="btn btn-primary btn-sm" onClick={handleVerifyAadharOTP}>Verify Aadhar</button>
          </div>
        )}
      <div style={{ display: "flex", gap: "5px", marginBottom:'20px' }}>
        <span style={{ fontSize: "14px" }}>Facing any issue?</span>
        <span style={{ fontSize: "14px", color: "#1a4dbe" }}>Contact Us</span>
      </div>

      <div className=" mb-3 d-flex gap-2">
          <i className="bi bi-shield-fill-check text-success"></i>
          <label className="form-check-label" htmlFor="dataConsent">
            Your data is safe with us
          </label>
        </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={handleBack}
          style={{
            margin: "10px 10px 30px 0",
            padding: "16px 32px",
            backgroundColor: "white",
            color: "#1a4dbe",
            width: "25%",
            border: "1px solid #1a4dbe",
          }}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          style={{
            margin: "10px 10px 30px 0",
            padding: "16px 32px",
            backgroundColor: "#1a4dbe",
            color: "white",
            width: "25%",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default AadhaarVerificationOptions;
