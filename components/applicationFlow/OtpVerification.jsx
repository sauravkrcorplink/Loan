import React, { useState } from 'react';
import { useRouter } from 'next/router';

const OtpVerification = ({ selectedBank }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const router = useRouter();

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleVerify = () => {
    if (otp.every(digit => digit)) {
      // Verification logic here
      alert('Verified!');
    }
  };

  return (
    <div className="container">
      <h5>Enter OTP for {selectedBank?.name}</h5>
      <div className="d-flex">
        {otp.map((digit, index) => (
          <input
            key={index}
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            maxLength={1}
            className="form-control text-center mx-1"
            style={{ width: '50px' }}
          />
        ))}
      </div>
      <button onClick={handleVerify} className="btn btn-primary mt-3" disabled={otp.some(digit => !digit)}>
        Verify
      </button>
    </div>
  );
};

export default OtpVerification;
