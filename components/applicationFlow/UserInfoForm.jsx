import { useState } from "react";
import teamData from "../../data/teamData";
import TeamCard from "../cards/TeamCard";
const UserInfo = ({ handleNext, handleBack }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("7678410290");
  const [panNo, setPanNo] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [loanAmt, setLoanAmt] = useState(0);
  const [dob, setDob] = useState();
  const [selectedAnualIncome, setSelectedAnualIncome] = useState("");
  const [gender, setSelectedGender] = useState("");
  const [purpose, setSelectedPurpose] = useState("");
  const [state, setSelectedState] = useState("");
  const [city, setSelectedCity] = useState();
  const [pincode, setpincode] = useState();
  const [employement_type_id, setEmployement_type_id] = useState(100);
  const [inc_rec_id, setInc_rec_id] = useState(101);
  const [mbl_req_id, SetMbl_req_id] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setSelectedAnualIncome(event.target.value);
  };
  const handleChangeGend = (event) => {
    setSelectedGender(event.target.value);
  };
  const handleChangePurpose = (event) => {
    setSelectedPurpose(event.target.value);
  };
  const handleChangeState = (event) => {
    setSelectedState(event.target.value);
  };
  const handleChangeCity = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleSubmitSummaryData = async (e) => {
    e.preventDefault();
    alert("Submited on handle summary");
  };

  const handleSubmitData = async (e) => {
    // alert("Submited");
    e.preventDefault();
    const SubmitData = {
      firstname: fullName,
      lastname: " ",
      dateOfBirth: dob,
      gender: gender,
      email: email,
      number: number,
      panNo: panNo,
      aadharNo: aadharNo,
      pincode: pincode,
      city_id: city,
      employement_type_id: employement_type_id,
      income_annual: selectedAnualIncome,
      inc_rec_id: inc_rec_id,
      created_by: mbl_req_id,
      mbl_req_id: mbl_req_id,
    };
    //console.log(aadharNo, aadharName);
    try {
      const response = await fetch("http://localhost:5001/user/register-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(SubmitData),
      });

      if (!response) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      //setData(result);
      alert(result.message);
      setMessage(result.message);
      alert(message);

      if (result.status) {
        setTimeout(() => {
          handleNext();
        }, 3000);
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ marginTop: "9rem" }}>
      <h3 className="mb-4">User Information</h3>
      <div className="row justify-content-center">
        <div className="col-xxl-7 col-lg-9 col-md-12">
          <ul className="nav nav-tabs mb-60" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="board-tab"
                data-bs-toggle="tab"
                data-bs-target="#board"
                type="button"
                role="tab"
                aria-controls="board"
                aria-selected="true"
              >
                Client Information
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="leaders-tab"
                data-bs-toggle="tab"
                data-bs-target="#leaders"
                type="button"
                role="tab"
                aria-controls="leaders"
                aria-selected="false"
              >
                Summary
              </button>
            </li>
            {/* <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="designers-tab"
                data-bs-toggle="tab"
                data-bs-target="#designers"
                type="button"
                role="tab"
                aria-controls="designers"
                aria-selected="false"
              >
                Designers
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="developers-tab"
                data-bs-toggle="tab"
                data-bs-target="#developers"
                type="button"
                role="tab"
                aria-controls="developers"
                aria-selected="false"
              >
                Developers
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="hr-tab"
                data-bs-toggle="tab"
                data-bs-target="#hr"
                type="button"
                role="tab"
                aria-controls="hr"
                aria-selected="false"
              >
                HR
              </button>
            </li> */}
          </ul>
        </div>
        <div className="col-lg-12">
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="board"
              role="tabpanel"
              aria-labelledby="board-tab"
            >
              <div className="row">
                {/* {teamData.map((singleTeam, i) => (
                      <div key={i} className="col-md-3 col-sm-6">
                        <TeamCard singleTeam={singleTeam} />
                      </div>
                    ))} */}

                <form action="#">
                  <div className="row">
                    <div className="col-6">
                      <div className="single-input">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                          type="text"
                          id="fullName"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="form-control mb-3"
                          placeholder="What's your name?"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="single-input">
                        <label htmlFor="email">Email</label>
                        <input
                          type="text"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control mb-3"
                          placeholder="What's your email?"
                          required
                        />
                      </div>
                    </div>

                    {/* <div className="col-4">
                      <div className="single-input">
                        <label htmlFor="panNo">Pan Card Number</label>
                        <input
                          type="text"
                          id="panNo"
                          value={panNo}
                          onChange={(e) => setPanNo(e.target.value)}
                          className="form-control mb-3"
                          placeholder="What's your Pan Card Number?"
                          required
                        />
                      </div>
                    </div> */}
                  </div>
                  <div className="row">
                    {/* <div className="col-4">
                      <div className="single-input">
                        <label htmlFor="aadharNo">Aadhar Card Number</label>
                        <input
                          type="text"
                          id="aadharNo"
                          value={aadharNo}
                          onChange={(e) => setAadharNo(e.target.value)}
                          className="form-control mb-3"
                          placeholder="What's your Aadhar Number?"
                          required
                        />
                      </div>
                    </div> */}

                    <div className="col-6">
                      <div className="single-input">
                        <label htmlFor="AnualIncome">Anual Income</label>
                        <select
                          id="AnualIncome"
                          value={selectedAnualIncome}
                          onChange={handleChange}
                          className="form-control dropdown mb-3"
                        >
                          <option className="dropdown-item" value="" disabled>
                            Select an option
                          </option>
                          <option className="dropdown-item" value="1">
                            ₹20000-₹50000
                          </option>
                          <option className="dropdown-item" value="2">
                            ₹50000-₹100000
                          </option>
                          <option className="dropdown-item" value="3">
                            ₹100000-₹300000
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="single-input">
                        <label htmlFor="loanAmt">Loan Amount required</label>
                        <input
                          type="text"
                          id="loanAmt"
                          value={loanAmt}
                          onChange={(e) => setLoanAmt(e.target.value)}
                          className="form-control mb-3"
                          placeholder="What's your Require Loan Amount?"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-4">
                      <div className="single-input">
                        <label htmlFor="dob">Data of Birth</label>
                        <input
                          type="date"
                          id="dob"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          className="form-control mb-3"
                          placeholder="Select your Date of Birth?"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="single-input">
                        <label htmlFor="gender">Gender</label>
                        <select
                          id="gender"
                          value={gender}
                          onChange={handleChangeGend}
                          className="form-control dropdown mb-3"
                        >
                          <option className="dropdown-item" value="" disabled>
                            Select an option
                          </option>
                          <option className="dropdown-item" value="M">
                            Male
                          </option>
                          <option className="dropdown-item" value="F">
                            Female
                          </option>
                          <option className="dropdown-item" value="Other">
                            Others
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="single-input">
                        <label htmlFor="porpuse">Porpuse</label>
                        <select
                          id="porpuse"
                          value={purpose}
                          onChange={handleChangePurpose}
                          className="form-control dropdown mb-3"
                        >
                          <option className="dropdown-item" value="" disabled>
                            Select an option
                          </option>
                          <option className="dropdown-item" value="1">
                            Personal Use
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-4">
                      <div className="single-input">
                        <label htmlFor="state">State</label>
                        <select
                          id="state"
                          value={state}
                          onChange={handleChangeState}
                          className="form-control dropdown mb-3"
                        >
                          <option className="dropdown-item" value="" disabled>
                            Select an State
                          </option>
                          <option className="dropdown-item" value="1">
                            Delhi
                          </option>
                          <option className="dropdown-item" value="2">
                            UP
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="single-input">
                        <label htmlFor="city">City</label>
                        <select
                          id="city"
                          value={city}
                          onChange={handleChangeCity}
                          className="form-control dropdown mb-3"
                        >
                          <option className="dropdown-item" value="" disabled>
                            Select an option
                          </option>
                          <option className="dropdown-item" value="101">
                            Delhi
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="single-input">
                        <label htmlFor="dob">Pincode</label>
                        <input
                          type="text"
                          id="pincode"
                          value={pincode}
                          onChange={(e) => setpincode(e.target.value)}
                          className="form-control mb-3"
                          placeholder="your pincode?"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="btn-area text-center">
                    <button
                      type={"button"}
                      onClick={handleSubmitData}
                      className="cmn-btn"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="leaders"
              role="tabpanel"
              aria-labelledby="leaders-tab"
            >
              <div className="row">
                {/* {teamData.map((singleTeam, i) => (
                  <div key={i} className="col-md-3 col-sm-6">
                    <TeamCard singleTeam={singleTeam} />
                  </div>
                ))} */}
                <div className="row">
                  <div className="col-4">
                    <div className="single-input">
                      <label htmlFor="fullName">Full Name: </label>
                      <p>
                        {" "}
                        {/* {fullName} */}
                        Narayan Singh
                      </p>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="single-input">
                      <label htmlFor="email">Email:</label>
                      <p> narayan @gmail.com</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="single-input">
                      <label htmlFor="AnualIncome">Anual Income:</label>
                      <p> ₹100000-₹300000</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-4">
                    <div className="single-input">
                      <label htmlFor="loanAmt">Loan Amount required:</label>
                      <p> 300000</p>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="single-input">
                      <label htmlFor="dob">Data of Birth:</label>
                      <p> 06/04/1996</p>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="single-input">
                      <label htmlFor="gender">Gender:</label>
                      <p> Male</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-4">
                    <div className="single-input">
                      <label htmlFor="porpuse">Porpuse:</label>
                      <p> For Personal Use</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="single-input">
                      <label htmlFor="state">State:</label>
                      <p> Delhi</p>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="single-input">
                      <label htmlFor="city">City:</label>
                      <p>Delhi</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-4">
                    <div className="single-input">
                      <label htmlFor="dob">Pincode:</label>
                      <p>201301</p>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="single-input">
                      <label htmlFor="dob">Status:</label>
                      <p className="text-success">Verified</p>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="btn-area text-center">
                      <button
                        type={"button"}
                        onClick={handleNext}
                        className="cmn-btn"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="designers"
              role="tabpanel"
              aria-labelledby="designers-tab"
            >
              <div className="row">
                {teamData.map((singleTeam, i) => (
                  <div key={i} className="col-md-3 col-sm-6">
                    <TeamCard singleTeam={singleTeam} />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="developers"
              role="tabpanel"
              aria-labelledby="developers-tab"
            >
              <div className="row">
                {teamData.map((singleTeam, i) => (
                  <div key={i} className="col-md-3 col-sm-6">
                    <TeamCard singleTeam={singleTeam} />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="hr"
              role="tabpanel"
              aria-labelledby="hr-tab"
            >
              <div className="row">
                {teamData.map((singleTeam, i) => (
                  <div key={i} className="col-md-3 col-sm-6">
                    <TeamCard singleTeam={singleTeam} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div style={{ display: "flex", gap: "10px" }}>
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
      </div> */}
    </div>
  );
};

export default UserInfo;
