import { useState } from "react";

const UserOtherInfo = ({ handleNext, handleBack }) => {
  const [client_id, setClient_id] = useState(2);
  const [residence_type_id, setResidence_type_id] = useState(2);
  const [company_name, setCompany_name] = useState("");
  const [designation, setDesignation] = useState("");
  const [company_address, setCompany_address] = useState("");
  const [company_email, setCompany_email] = useState("");
  const [qualification_id, setQualification_id] = useState(0);
  const [reference1_name, setReference1_name] = useState();
  const [reference1_number, setReference1_number] = useState();
  const [reference1_relation, setReference1_relation] = useState("");
  const [reference2_name, setReference2_name] = useState("");
  const [reference2_number, setReference2_number] = useState("");
  const [reference2_relation, setReference2_relation] = useState("");
  const [address_type_id, setAddress_type_id] = useState(1);
  const [status, setStatus] = useState(true);
  const [created_by, setCreated_by] = useState("User");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChangeQualification = (event) => {
    console.log(event.target.value);
    setQualification_id(event.target.value);
  };
//   const handleChangeGend = (event) => {
//     setSelectedGender(event.target.value);
//   };
//   const handleChangePurpose = (event) => {
//     setSelectedPurpose(event.target.value);
//   };
//   const handleChangeState = (event) => {
//     setSelectedState(event.target.value);
//   };
//   const handleChangeCity = (event) => {
//     setSelectedCity(event.target.value);
//   };

  
const handleSubmitData = async (e) => {
    e.preventDefault();
    console.log(reference1_number);
    console.log(reference2_number);
    const SubmitData = {
    //   client_id: client_id,
    //   residence_type_id: residence_type_id,
    //   company_name: company_name,
    //   designation: designation,
    //   company_address: company_address,
    //   company_email: company_email,
    //   qualification_id: qualification_id,
    //   reference1_name: reference1_name,
       //reference1_number: reference1_number,
    //   reference1_relation: reference1_relation,
    //   reference2_name: reference2_name,
    //   reference2_number: reference2_number,
    //   reference2_relation: reference2_relation,
    //   address_type_id: address_type_id,
    //   status: status,
    //   created_by: created_by,

      client_id: 1,
      residence_type_id: 2,
      company_name: company_name,
      designation: designation,
      company_address: company_address,
      company_email: company_email,
      qualification_id: 3,
      reference1_name: reference1_name,
      reference1_number: reference1_number,
      reference1_relation: reference1_relation,
      reference2_name: reference2_name,
      reference2_number: reference2_number,
      reference2_relation: reference2_relation,
      address_type_id: 1,
      status: true,
      created_by: created_by
    };
    
    
    try {
      const response = await fetch("http://localhost:5001/user/SaveOtherData", {
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
      setMessage(result.message);

      if (result.status) {
        setTimeout(() => {
          //handleNext();
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
      <h5 className="mb-4">User Other Information</h5>
      <p>{message}</p>
      <div className="row">
        <div className="col-4">
          <div className="single-input">
            <label htmlFor="company_name">company_name</label>
            <input
              type="text"
              id="company_name"
              value={company_name}
              onChange={(e) => setCompany_name(e.target.value)}
              className="form-control mb-3"
              placeholder="What's your Company?"
              required
            />
          </div>
        </div>

        <div className="col-4">
          <div className="single-input">
            <label htmlFor="designation">Designation</label>
            <input
              type="text"
              id="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="form-control mb-3"
              placeholder="What's your designation?"
              required
            />
          </div>
        </div>
        <div className="col-4">
          <div className="single-input">
            <label htmlFor="company_email">Company email</label>
            <input
              type="email"
              id="company_email"
              value={company_email}
              onChange={(e) => setCompany_email(e.target.value)}
              className="form-control mb-3"
              placeholder="Company email"
              required
            />
          </div>
        </div>
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="company_address">company_address</label>
            <input
              type="text"
              id="company_address"
              value={company_address}
              onChange={(e) => setCompany_address(e.target.value)}
              className="form-control mb-3"
              placeholder="your company address?"
              required
            />
          </div>
        </div>

        <div className="col-6">
          <div className="single-input">
            <label htmlFor="gender">Qualification</label>
            <select
              id="qualification_id"
              value={qualification_id}
              onChange={handleChangeQualification}
              className="form-control dropdown mb-3"
            >
              <option className="dropdown-item" value="" disabled>
                Select Qualification
              </option>
              <option className="dropdown-item" value="1">
                MCA
              </option>
              <option className="dropdown-item" value="2">
                BCA
              </option>
              <option className="dropdown-item" value="3">
                MBA
              </option>
            </select>
        </div>
        </div>
        <div className="col-4">
          <div className="single-input">
            <label htmlFor="reference1_name">Reference Name</label>
            <input
              type="text"
              id="reference1_name"
              value={reference1_name}
              onChange={(e) => setReference1_name(e.target.value)}
              className="form-control mb-3"
              placeholder="Reference Name"
              required
            />
          </div>
        </div>
        <div className="col-4">
          <div className="single-input">
            <label htmlFor="reference1_number">Reference Number</label>
            <input
              type="text"
              id="reference1_number"
              value={reference1_number}
              onChange={(e) => setReference1_number(e.target.value)}
              className="form-control mb-3"
              placeholder="Reference Number"
              required
            />
          </div>
        </div>

        <div className="col-4">
          <div className="single-input">
            <label htmlFor="reference1_relation">Reference Relation</label>
            <input
              type="text"
              id="reference1_relation"
              value={reference1_relation}
              onChange={(e) => setReference1_relation(e.target.value)}
              className="form-control mb-3"
              placeholder="Reference Relation"
              required
            />
          </div>
        </div>

        <div className="col-4">
          <div className="single-input">
            <label htmlFor="reference2_name">2nd Reference Name</label>
            <input
              type="text"
              id="reference2_name"
              value={reference2_name}
              onChange={(e) => setReference2_name(e.target.value)}
              className="form-control mb-3"
              placeholder="2nd Reference Name"
              required
            />
          </div>
        </div>
        <div className="col-4">
          <div className="single-input">
            <label htmlFor="reference2_number">2nd Reference Number</label>
            <input
              type="text"
              id="reference2_number"
              value={reference2_number}
              onChange={(e) => setReference2_number(e.target.value)}
              className="form-control mb-3"
              placeholder="Reference Number"
              required
            />
          </div>
        </div>

        <div className="col-4">
          <div className="single-input">
            <label htmlFor="reference2_relation">2nd Reference Relation</label>
            <input
              type="text"
              id="reference2_relation"
              value={reference2_relation}
              onChange={(e) => setReference2_relation(e.target.value)}
              className="form-control mb-3"
              placeholder="2nd Reference Relation"
              required
            />
          </div>
        </div>

       
        <div className="btn-area float-right">
          <button
            type={"button"}
            onClick={handleSubmitData}
            className="cmn-btn"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserOtherInfo;
