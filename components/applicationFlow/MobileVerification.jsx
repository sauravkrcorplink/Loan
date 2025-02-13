import React, { useState, useRef, useEffect } from "react";
import BankVerificationModal from "./BankVerificationModal";

const MobileVerification = () => {
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(30);
  const [showModal, setShowModal] = useState(false);
  const otpRefs = [useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    let interval;
    if (showOtpScreen && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showOtpScreen, timer]);

  const handleMobileSubmit = (e) => {
    e.preventDefault();
    if (mobileNumber.length === 10) {
      setShowOtpScreen(true);
      setTimer(30);
    }
  };

  const handleOtpChange = (value, index) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        otpRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpRefs[index - 1].current.focus();
    }
  };

  const handleResendOtp = () => {
    if (timer === 0) {
      setTimer(30);
    }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 4) {
      setShowModal(true);
    }
  };

  return (
    <div className="container bg-white min-vh-100">
      <div className="row ">
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <div className="d-flex align-items-center mb-4">
            <button className="btn btn-link p-0 me-2">
              <i className="bi bi-arrow-left fs-4"></i>
            </button>
            <h1 className="mb-0 fs-4">Bank Details</h1>
          </div>

          <h2 className="fs-2 fw-bold mb-4">Verify Bank Details</h2>

          <div className="d-flex align-items-center mb-4 border border-black p-2">
            <div
              className="bg-danger d-flex align-items-center justify-content-center"
              style={{ width: "48px", height: "48px", borderRadius: "8px" }}
            >
              <span className="text-white fw-bold">A</span>
            </div>
            <span className="ms-3 fs-5 fw-semibold">Axis Bank</span>
          </div>

          {!showOtpScreen ? (
            <form onSubmit={handleMobileSubmit}>
              <div className="mb-4">
                <label className="form-label text-secondary">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="form-control form-control-lg bg-light border-0"
                  placeholder="Enter your mobile number"
                  value={mobileNumber}
                  onChange={(e) => {
                    if (
                      e.target.value.length <= 10 &&
                      /^\d*$/.test(e.target.value)
                    ) {
                      setMobileNumber(e.target.value);
                    }
                  }}
                  maxLength={10}
                />
                <small className="text-secondary mt-2 d-block">
                  To verify your bank statement please enter your number.
                </small>
              </div>

              <div className="d-flex align-items-center text-secondary mb-4">
                <i className="bi bi-shield-check me-2"></i>
                <small>Your data is safe with us</small>
              </div>

              <button
                type="submit"
                className={`btn btn-lg w-100 ${
                  mobileNumber.length === 10 ? "btn-primary" : "btn-secondary"
                }`}
                disabled={mobileNumber.length !== 10}
              >
                Get OTP
              </button>
            </form>
          ) : (
            <div>
              <div className="mb-4">
                <label className="form-label text-secondary mb-3">
                  Enter OTP
                </label>
                <div className="d-flex gap-3 mb-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      ref={otpRefs[index]}
                      className="form-control text-center fs-4 bg-light border-0"
                      style={{ width: "48px", height: "48px" }}
                      value={digit}
                      onChange={(e) => handleOtpChange(e.target.value, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      maxLength={1}
                    />
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-secondary mb-1">
                    Have not received your OTP?
                  </p>
                  <button
                    onClick={handleResendOtp}
                    className={`btn btn-link text-primary p-0 text-decoration-none ${
                      timer > 0 ? "disabled" : ""
                    }`}
                    disabled={timer > 0}
                  >
                    Resend {timer > 0 ? `in ${timer} seconds` : ""}
                  </button>
                </div>
              </div>

              <div className="d-flex align-items-center text-secondary mb-4">
                <i className="bi bi-shield-check me-2"></i>
                <small>Your data is safe with us</small>
              </div>

              <button
                onClick={handleVerifyOtp}
                className={`btn btn-lg w-100 ${
                  otp.every((digit) => digit) ? "btn-primary" : "btn-secondary"
                }`}
                disabled={!otp.every((digit) => digit)}
              >
                Verify
              </button>
            </div>
          )}
          <BankVerificationModal
            show={showModal}
            onHide={() => setShowModal(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileVerification;
