import React, { useState } from "react";
import AadhaarVerificationOptions from "./AadharVerificationOptions";

const PANVerificationScreen = ({
  // formData,
  // handleInputChange,
  handleNext,
  handleBack,
}) => {
  const [panNo, setPanNo] = useState("");
  const [panName, setPanName] = useState("");
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [dataStatus, setdataStatus] = useState(false);
   const [message, setMessage] = useState("");
  const handleNetBankingSubmit = async (e) => {
    e.preventDefault();
    const dataPan = {
      panNo: panNo,
      panName: panName,
    };
    console.log(panNo, panName);
    try {
      const response = await fetch("http://localhost:5001/user/register-pan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataPan),
      });

      if (!response) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
      setMessage(result.message);
      
      alert(message);
      setPanName("");
      setPanNo("");
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

  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      <form onSubmit={handleNetBankingSubmit}>
        <h3>PAN Details</h3>
        <div className="row">
          <div className="col-md-4">
          <label>Enter your PAN</label>
          {/* <span style={{ fontSize: "14px" }}>Please enter your PAN Number</span> */}
          <input
            type="text"
            name="pan"
            placeholder="Enter your PAN"
            value={panNo}
            onChange={(e) => setPanNo(e.target.value)}
          />
          </div>
          <div className="col-md-8"></div>
          <div className="col-md-4">
          <label>Enter your PAN name</label>
          {/* <span style={{ fontSize: "14px" }}>Please enter your PAN name</span> */}
          <input
            type="text"
            name="pan"
            placeholder="Enter your PAN name"
            value={panName}
            onChange={(e) => setPanName(e.target.value)}
          />
          </div>
          <div className="col-md-8"></div>
          
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: "14px" }}>
            Your PAN Number must be like this: RRRRR0000R
          </span>
          <div style={{ display: "flex", gap: "5px", marginBottom: "20px" }}>
            <span style={{ fontSize: "14px" }}>Facing any issue?</span>
            <span style={{ fontSize: "14px", color: "#1a4dbe" }}>
              Contact Us
            </span>
          </div>
          <div className=" mb-3 d-flex gap-2">
            <i className="bi bi-shield-fill-check text-success"></i>
            <label className="form-check-label" htmlFor="dataConsent">
              Your data is safe with us
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">
          Save Pan
        </button>
      </form>
      <p>{message}</p>
      {/* <AadhaarVerificationOptions
          handleNext=""
          handleBack=""
        /> */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={handleBack}
          style={{
            margin: "10px 10px 30px 0",
            padding: "16px 32px",
            backgroundColor: "white",
            color: "#1a4dbe",
            width: "100%",
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

export default PANVerificationScreen;
