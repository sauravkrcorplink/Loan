import React from 'react';

const CompanyPage = ({ formData, setFormData, handleNext, handleBack }) => {
  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      <h3 className="mb-4">Enter your Company&#39;s name</h3>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your Company's name"
          name="companyName"
        />
      </div>
      <div className=" mb-3 d-flex gap-2">
          <i className="bi bi-shield-fill-check text-success"></i>
          <label className="form-check-label" htmlFor="dataConsent">
            Your data is safe with us
          </label>
        </div>
      <div style={{ display: "flex", gap:"10px", marginTop:'20px' }}>
      <button
        onClick={handleBack}
        style={{
          margin: "10px 10px 30px 0",
          padding: "16px 32px",
          backgroundColor: "white",
          color: "#1a4dbe",
          width: "25%",
          border:'1px solid #1a4dbe'
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

export default CompanyPage;
