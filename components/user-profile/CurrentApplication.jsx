import React from "react";

const CurrentApplication = ({ application }) => {
  const steps = ["Processing", "Bank Allocated", "Approved", "Disbursed"];
  const currentStep = steps.indexOf(application.status);

  return (
    <div>
      <h3 className="mb-4">Current Loan Application</h3>
      <div className="card shadow-sm p-4 mb-4" style={{ borderRadius: '12px', backgroundColor: '#f9f9f9' }}>
        <div className="d-flex justify-content-between align-items-center">
          <h5>Home Loan</h5>
          <span className="text-muted">{application.submittedDate}</span>
        </div>
        <div className="d-flex flex-column align-items-center my-4">
          <h6>Application ID: {application.applicationId}</h6>
          <p className="text-success fw-bold mb-0">Congratulations!</p>
          <p className="text-muted">
            Your loan has been approved. We will contact you for disbursal.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="progress mb-4" style={{ height: '12px', borderRadius: '5px', backgroundColor: '#e9ecef' }}>
          {steps.map((step, index) => (
             <div
             key={step}
             className={`progress-bar ${index <= currentStep ? "bg-success" : "bg-secondary"}`}
             role="progressbar"
             style={{
               width: `${100 / steps.length}%`,
               height: "100%",
               borderRadius: '5px',
             }}
             aria-valuenow={index + 1}
             aria-valuemin="0"
             aria-valuemax={steps.length}
           ></div>
          ))}
        </div>

        {/* Step Labels */}
        <div className="d-flex justify-content-between">
          {steps.map((step, index) => (
            <span
              key={step}
              className={`text-${index <= currentStep ? "success" : "muted"} small`}
            >
              {step}
            </span>
          ))}
        </div>
      </div>

      {/* User Application Details */}
      <div className="card shadow-sm p-4" style={{ borderRadius: '12px', backgroundColor: '#f9f9f9' }}>
        <h5 className="mb-4">Application Preview</h5>
        <div className="row">
          {/* Personal Information Section */}
          <div className="col-md-4">
            <h6 className="text-muted">Personal Information</h6>
            <div className="mb-2">
              <strong>Name:</strong> {application.applicantName || "N/A"}
            </div>
            <div className="mb-2">
              <strong>Email:</strong> {application.email || "N/A"}
            </div>
            <div className="mb-2">
              <strong>Phone:</strong> {application.phone || "N/A"}
            </div>
            <div className="mb-2">
              <strong>Residence Type:</strong> {application.residenceType || "N/A"}
            </div>
          </div>

          {/* Loan Details Section */}
          <div className="col-md-4">
            <h6 className="text-muted">Loan Details</h6>
            <div className="mb-2">
              <strong>Loan Type:</strong> {application.type || "N/A"}
            </div>
            <div className="mb-2">
              <strong>Amount:</strong> ₹{application.amount || "N/A"}
            </div>
            <div className="mb-2">
              <strong>Status:</strong>{" "}
              <span className="badge bg-success">{application.status}</span>
            </div>
            <div className="mb-2">
              <strong>Submitted:</strong> {application.submittedDate || "N/A"}
            </div>
          </div>

          {/* Bank Details Section */}
          <div className="col-md-4">
            <h6 className="text-muted">Bank Details</h6>
            <div className="mb-2">
              <strong>Bank Allocated:</strong> {application.bankName || "N/A"}
            </div>
            <div className="mb-2">
              <strong>Last Updated:</strong> {application.lastUpdated || "N/A"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentApplication;
