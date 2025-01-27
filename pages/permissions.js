import React, { useState } from 'react';
import { FaLocationArrow, FaMobileAlt, FaSms } from 'react-icons/fa';

function Permissions() {
    const [screen, setScreen] = useState(1);
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');

    const handleNext = (e) => {
        e.preventDefault();
        if (screen === 1) {
            setScreen(2);
        } else if (screen === 2) {
            // Handle OTP verification logic here
            setScreen(3);
        }
    };

    return (
        <div className="container my-8 mx-auto d-flex justify-center">
            {screen === 1 && (
                <div className="otp-container mt-150 mb-5 text-center">
                    <h2>Permissions</h2>
                    <p>Allow permissions for a better account experience</p>
                    <div className="permission-item">
                        <FaLocationArrow size={24} />
                        <p>Location</p>
                        <p>To assess servicing of products to you</p>
                    </div>
                    <div className="permission-item">
                        <FaMobileAlt size={24} />
                        <p>Device</p>
                        <p>To collect your primary and social account information to verify your identity</p>
                    </div>
                    <div className="permission-item">
                        <FaSms size={24} />
                        <p>SMS</p>
                        <p>To send and read SMS for authentication</p>
                    </div>
                    <button className="btn btn-primary mt-4 px-8 py-3" onClick={handleNext}>
                        Allow
                    </button>
                </div>
            )}

            {screen === 2 && (
                <div className="mobile-number-container mt-150 mb-5 text-center">
                    <h5>Enter Mobile Number</h5>
                    <form onSubmit={handleNext}>
                        <label htmlFor="mobileNumber">Please enter your mobile number</label>
                        <input
                            type="tel"
                            id="mobileNumber"
                            name="mobileNumber"
                            placeholder="Enter your mobile number"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            required
                        />
                        <p className="d-flex justify-center my-10">or</p>
                        <input
                            type="tel"
                            id="truecaller"
                            name="truecaller"
                            placeholder="Verify using Truecaller"
                        />
                        <input
                            type="tel"
                            id="whatsapp"
                            name="whatsapp"
                            placeholder="Verify using WhatsApp"
                        />
                        <button type="submit" className="btn btn-primary mt-4 px-8 py-3">
                            Get OTP
                        </button>
                    </form>
                </div>
            )}

            {screen === 3 && (
                <div className="permissions-container mt-150 mb-5 text-center">
                    <h5>Enter OTP</h5>
                    <form onSubmit={handleNext}>
                        <h2 className="font-weight-normal">Please enter the OTP</h2>
                        <div className="input-group gap-2">
                            {[...Array(6)].map((_, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    size="1"
                                    className="form-control rounded"
                                    value={otp[index] || ''}
                                    onChange={(e) => {
                                        const newOtp = otp.split('');
                                        newOtp[index] = e.target.value;
                                        setOtp(newOtp.join(''));
                                    }}
                                    required
                                />
                            ))}
                        </div>
                        <button type="submit" className="btn btn-primary mt-4 px-8 py-3">
                            Verify
                        </button>
                        <p>Have not received your OTP? Resend in 60 seconds</p>
                    </form>
                </div>
            )}

            <style jsx>{`
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    text-align: center;
                }
                .permission-item {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 20px 0;
                }
                .permission-item p {
                    margin-left: 10px;
                }
                input {
                    margin: 10px 0;
                    padding: 10px;
                    width: 100%;
                }
                button {
                    padding: 10px 20px;
                    background-color: #0070f3;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                .input-group {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                }
            `}</style>
        </div>
    );
}

export default Permissions;
