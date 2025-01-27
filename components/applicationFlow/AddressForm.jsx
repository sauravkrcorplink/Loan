import React, { useState } from "react";

// const AddressForm = ({ formData, setFormData, handleNext, handleBack }) => {
const AddressForm = ({ handleNext, handleBack }) => {
  const [client_id, setClient_id] = useState(0);
  const [c_building, setc_Building] = useState("");
  const [c_city, setc_city] = useState(0);
  const [c_state, setc_state] = useState(0);
  const [c_pinCode, setc_PinCode] = useState();
  const [c_landmark, setc_Landmark] = useState();
  const [p_building, setp_Building] = useState("");
  const [p_city, setp_city] = useState(0);
  const [p_state, setp_state] = useState(0);
  const [p_pinCode, setp_PinCode] = useState("");
  const [p_landmark, setp_Landmark] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChangeC_City = (event) => {
    setc_city(event.target.value);
  };
  const handleChangeC_State = (event) => {
    setc_state(event.target.value);
  };

  const handleChangeP_City = (event) => {
    setp_city(event.target.value);
  };
  const handleChangeP_State = (event) => {
    setp_state(event.target.value);
  };

  const handleSaveParmanentAddress = async (e) => {
    e.preventDefault();
    // handleNext();
    const SubmitParmanentData = {
      client_id: client_id,
      address_type_id: 2,
      house_no: "0",
      building: p_building,
      street: "",
      town: 0,
      landmark: p_landmark,
      city_id: p_city,
      district_id: 0,
      state_id: p_state,
      pincode: p_pinCode,
      status: true,
      created_by: "Admin",
    };
    //console.log(aadharNo, aadharName);
    try {
      
      const response = await fetch(
        "http://localhost:5001/user/SaveClientAddress",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(SubmitParmanentData),
        }
      );

      if (!response) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      //setData(result);
      setMessage(result.message);

      if (result.status) {
        setTimeout(() => {
          alert(message);
        }, 3000);
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveCurrentaddress = async (e) => {
    e.preventDefault();
    // handleNext();
    alert("Click on current address button");
    const SubmitCurrentData = {
      client_id: client_id,
      address_type_id: 1,
      house_no: "0",
      building: c_building,
      street: "",
      town: 0,
      landmark: c_landmark,
      city_id: c_city,
      district_id: 0,
      state_id: c_state,
      pincode: c_pinCode,
      status: true,
      created_by: "Admin",
    };
    //console.log(aadharNo, aadharName);
    try {
      
      const response = await fetch(
        "http://localhost:5001/user/SaveClientAddress",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(SubmitCurrentData),
        }
      );

      if (!response) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      //setData(result);
      setMessage(result.message);

      if (result.status) {
        setTimeout(() => {
          // handleNext();
          alert(result);
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
      <h5 className="mb-4">Enter your Current Address</h5>
      <p>{message}</p>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Flat / House no. / Floor / Building"
              id="c_building"
              value={c_building}
              onChange={(e) => setc_Building(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3">
            {/* <input
              type="text"
              className="form-control"
              placeholder="City"
              id="c_city"
              value={c_city}
              onChange={(e) => setc_city(e.target.value)}
            /> */}
            <select
              id="c_city"
              value={c_city}
              onChange={handleChangeC_City}
              className="form-control dropdown mb-3"
            >
              <option className="dropdown-item" value="" disabled>
                Select an option
              </option>
              <option className="dropdown-item" value="1">
                Delhi
              </option>
              <option className="dropdown-item" value="2">
                New Delhi
              </option>
              <option className="dropdown-item" value="3">
                Noida
              </option>
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3">
            <select
              id="c_state"
              value={c_state}
              onChange={handleChangeC_State}
              className="form-control dropdown mb-3"
            >
              <option className="dropdown-item" value="" disabled>
                Select an option
              </option>
              <option className="dropdown-item" value="1">
                Delhi
              </option>
              <option className="dropdown-item" value="2">
                UP
              </option>
              <option className="dropdown-item" value="3">
                Bihar
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Pincode"
              id="c_pincode"
              value={c_pinCode}
              onChange={(e) => setc_PinCode(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nearby Landmark"
              id="c_landmark"
              value={c_landmark}
              onChange={(e) => setc_Landmark(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className=" mb-3 d-flex gap-2">
        <i className="bi bi-shield-fill-check text-success"></i>
        <label className="form-check-label" htmlFor="dataConsent">
          Your data is safe with us
        </label>
      </div>
      <button
        type={"button"}
        onClick={handleSaveCurrentaddress}
        className="cmn-btn"
      >
        Save
      </button>
              
      <hr />
      <h5 className="mb-4">Enter your Parmanent Address</h5>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Flat / House no. / Floor / Building"
              id="p_building"
              value={p_building}
              onChange={(e) => setp_Building(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3">
            {/* <input
              type="text"
              className="form-control"
              placeholder="City"
              id="c_city"
              value={c_city}
              onChange={(e) => setc_city(e.target.value)}
            /> */}
            <select
              id="p_city"
              value={p_city}
              onChange={handleChangeP_City}
              className="form-control dropdown mb-3"
            >
              <option className="dropdown-item" value="" disabled>
                Select an option
              </option>
              <option className="dropdown-item" value="1">
                Delhi
              </option>
              <option className="dropdown-item" value="2">
                New Delhi
              </option>
              <option className="dropdown-item" value="3">
                Noida
              </option>
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3">
            <select
              id="p_state"
              value={p_state}
              onChange={handleChangeP_State}
              className="form-control dropdown mb-3"
            >
              <option className="dropdown-item" value="" disabled>
                Select an option
              </option>
              <option className="dropdown-item" value="11">
                Delhi
              </option>
              <option className="dropdown-item" value="12">
                UP
              </option>
              <option className="dropdown-item" value="13">
                Bihar
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Pincode"
              id="p_pincode"
              value={p_pinCode}
              onChange={(e) => setp_PinCode(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nearby Landmark"
              id="p_landmark"
              value={p_landmark}
              onChange={(e) => setp_Landmark(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className=" mb-3 d-flex gap-2">
        <i className="bi bi-shield-fill-check text-success"></i>
        <label className="form-check-label" htmlFor="dataConsent">
          Your data is safe with us
        </label>
      </div>
      <button
        type={"button"}
        onClick={handleSaveParmanentAddress}
        className="cmn-btn"
      >
        Save
      </button>
      <hr />
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

export default AddressForm;
