import React from "react";

const IndustryPage = ({ formData, setFormData, handleNext, handleBack }) => {
  const industryOptions = [
    "Information Technology (IT)",
    "Healthcare",
    "Education",
    "Automotive",
    "E-commerce",
    "Hospitality",
    "Other",
  ];

  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      <h3 className="mb-4">Industry</h3>
      <div className="row g-3" style={{ marginTop: "10px" }}>
        {industryOptions.map((option, index) => (
          <div
            key={index}
            className={`card p-3 text-center ${
              formData.industry === option
                ? "bg-primary text-white"
                : "bg-light"
            }`}
            onClick={() => setFormData({ ...formData, industry: option })}
            style={{ cursor: "pointer" }}
          >
            {option}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
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

export default IndustryPage;
