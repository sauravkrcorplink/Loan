import React, { useState } from "react";

const BankVerificationModal = ({ show, onHide }) => {
  const [isNetBanking, setIsNetBanking] = useState(true); // Track whether to show Net Banking or Statement section
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [statement, setStatement] = useState(null);

  const handleNetBankingSubmit = (e) => {
    e.preventDefault();
    console.log("Net Banking Details Submitted");
    setIsNetBanking(false); // Show the Upload Statement section after clicking Continue
  };

  const handleStatementSubmit = (e) => {
    e.preventDefault();
    console.log("Statement Uploaded");
  };

  return (
    <div
      className={`modal fade ${show ? "show d-block" : ""}`}
      tabIndex="-1"
      style={{ backgroundColor: show ? "rgba(0, 0, 0, 0.5)" : "transparent" }}
      role="dialog"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-body px-4 pb-4">
            <h2 className="fs-2 fw-bold mb-4">Verify Bank Details</h2>

            <div className="d-flex align-items-center mb-4">
              <div
                className="bg-danger d-flex align-items-center justify-content-center"
                style={{ width: "48px", height: "48px", borderRadius: "8px" }}
              >
                <span className="text-white fw-bold">A</span>
              </div>
              <span className="ms-3 fs-5 fw-semibold">Axis Bank</span>
            </div>

            {isNetBanking ? (
              <form onSubmit={handleNetBankingSubmit}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control form-control-lg bg-light"
                    placeholder="Enter your Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg bg-light"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="d-flex align-items-center text-secondary mb-4">
                  <i className="bi bi-shield-check me-2"></i>
                  <small>Your data is safe with us</small>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-100">
                  Continue
                </button>
              </form>
            ) : (
              <form onSubmit={handleStatementSubmit}>
                <div className="mb-4">
                  <p className="mb-3">
                    Please upload your bank statement from:
                  </p>
                  <p className="fw-bold mb-4">1st Jun &#39;23 - 30th Aug &#39;23</p>

                  <div className="p-4 bg-light rounded text-center mb-3">
                    <i className="bi bi-cloud-upload fs-2 mb-2"></i>
                    <input
                      type="file"
                      className="d-none"
                      id="statementUpload"
                      onChange={(e) => setStatement(e.target.files[0])}
                    />
                    <label
                      htmlFor="statementUpload"
                      className="d-block cursor-pointer"
                    >
                      <span className="text-primary">
                        Upload your Bank Statement
                      </span>
                    </label>
                    {statement && <p className="mb-0 mt-2">{statement.name}</p>}
                  </div>

                  <small className="text-secondary">
                    To verify your bank statement please upload your statement.
                  </small>
                </div>

                <div className="d-flex align-items-center text-secondary mb-4">
                  <i className="bi bi-shield-check me-2"></i>
                  <small>Your data is safe with us</small>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                  onClick={onHide}
                >
                  Verify
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankVerificationModal;
