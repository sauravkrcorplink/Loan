import React from 'react';

const PaymentPage = ({ formData, setFormData, handleNext, handleBack }) => {
  const paymentOptions = ['Bank Transfer', 'Cheque', 'Cash'];

  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      <h3 className="mb-4">Mode of Payment</h3>
      <div className="row g-3" style={{marginTop:'10px'}}>
      {paymentOptions.map((option, index) => (
         <div className="col-12" key={index}>
         <div
           className="card p-3 text-center"
           style={{ cursor: "pointer" }}
           onClick={handleNext}
         >
           {option}
         </div>
       </div>
      ))}
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

export default PaymentPage;
