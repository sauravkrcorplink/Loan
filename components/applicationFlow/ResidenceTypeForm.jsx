import React from 'react';

const ResidenceTypeForm = ({ formData, setFormData, handleNext, handleBack }) => {
  return (
    <div className="container" style={{ marginTop: "8rem" }}>     
      <h3 className="mb-4">Your Residence</h3>
      <div
        className="card mb-3 cursor-pointer"
        onClick={() => {
          setFormData({ ...formData, residenceType: 'Owned' });
          handleNext();
        }}
      >
        <div className="card-body">Owned</div>
      </div>
      <div
        className="card mb-3 cursor-pointer"
        onClick={() => {
          setFormData({ ...formData, residenceType: 'Rented' });
          handleNext();
        }}
      >
        <div className="card-body">Rented</div>
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

export default ResidenceTypeForm;
