import React from 'react';

const SalaryDateForm = ({ formData, setFormData, handleNext, handleBack }) => {
  const generateCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days;
  };

  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      
      <h3 className="mb-4">Date of Salary</h3>
      <div className="row row-cols-6 g-2">
        {generateCalendarDays().map((day) => (
          <div key={day} className="col">
            <div
              className="card text-center p-3 cursor-pointer"
              onClick={() => {
                setFormData({ ...formData, dateOfSalary: day });
                handleNext();
              }}
              style={{
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s ease-in-out'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {day}
            </div>
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

export default SalaryDateForm;
