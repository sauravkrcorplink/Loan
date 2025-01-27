import React from 'react';

const WorkExperienceForm = ({ formData, setFormData, handleNext, handleBack }) => {
  const workExperienceOptions = [
    '0 - 2 Years',
    '2 - 5 Years',
    '5 - 8 Years',
    '8 - 10 Years',
    'More than 10 years'
  ];

  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      <h3 className="mb-4">Work Experience</h3>
      {workExperienceOptions.map((option, index) => (
        <div
          key={index}
          className="card mb-3 cursor-pointer"
          onClick={() => {
            setFormData({ ...formData, workExperience: option });
            handleNext();
          }}
        >
          <div className="card-body">{option}</div>
        </div>
      ))}
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

export default WorkExperienceForm;
