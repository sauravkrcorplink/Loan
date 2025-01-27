import React from "react";

const BankSelection = ({ handleBankSelect, handleNext, handleBack }) => {
  const popularBanks = [
    { id: "sbi", name: "SBI", logo: "S" },
    { id: "hdfc", name: "HDFC", logo: "H" },
    { id: "icici", name: "ICICI", logo: "I" },
    { id: "axis", name: "Axis", logo: "A" },
    { id: "kotak", name: "Kotak", logo: "K" },
    { id: "indusind", name: "IndusInd", logo: "I" },
  ];

  const allBanks = [
    { id: "boi", name: "Bank of India", logo: "B" },
    { id: "au", name: "AU Small Finance Bank", logo: "A" },
    { id: "abhyudaya", name: "Abhyudaya Co-operative Bank Ltd", logo: "A" },
    { id: "bob", name: "Bank of Baroda", logo: "B" },
    { id: "syndicate", name: "Syndicate Bank", logo: "S" },
  ];

  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      <h3 className="mb-4">Select your Bank</h3>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search your Bank"
        />
      </div>
      <div className="card p-4">
        <h6 className="text-primary mb-3">Popular Banks</h6>
        <div className="row my-4">
          {popularBanks.map((bank) => (
            <div key={bank.id} className="col-6 col-md-4 mb-4">
              <div className="d-flex align-items-center border border-black p-2">
                <div
                  className="bg-danger d-flex align-items-center justify-content-center"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                  }}
                >
                  <span className="text-white fw-bold">{bank.logo}</span>
                </div>
                <span className="ms-3 fs-5 fw-semibold">{bank.name}</span>
              </div>
            </div>
          ))}
        </div>

        <h6 className="mb-3">All Banks</h6>
        <div className="list-group">
          {allBanks.map((bank) => (
            <div key={bank.id} className="d-flex align-items-center mb-4 border border-black p-2">
              <button
                className="bg-danger d-flex align-items-center justify-content-center"
                style={{ width: "48px", height: "48px", borderRadius: "8px" }}
                onClick={() => {
                  handleBankSelect(bank);
                  handleNext();
                }}
              >
                <span className="text-white fw-bold">{bank.logo}</span>
              </button>
              <span className="ms-3 fs-5 fw-semibold">{bank.name}</span>
            </div>
          ))}
        </div>
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

export default BankSelection;



// import React from "react";

// const BankSelection = ({ handleBankSelect, handleNext, handleBack }) => {
//   const popularBanks = [
//     { id: "sbi", name: "SBI", logo: "S" },
//     { id: "hdfc", name: "HDFC", logo: "H" },
//     { id: "icici", name: "ICICI", logo: "I" },
//     { id: "axis", name: "Axis", logo: "A" },
//     { id: "kotak", name: "Kotak", logo: "K" },
//     { id: "indusind", name: "IndusInd", logo: "I" },
//   ];

//   const allBanks = [
//     { id: "boi", name: "Bank of India", logo: "B" },
//     { id: "au", name: "AU Small Finance Bank", logo: "A" },
//     { id: "abhyudaya", name: "Abhyudaya Co-operative Bank Ltd", logo: "A" },
//     { id: "bob", name: "Bank of Baroda", logo: "B" },
//     { id: "syndicate", name: "Syndicate Bank", logo: "S" },
//   ];

//   return (
//     <div className="container" style={{ marginTop: "8rem" }}>
//       <h3 className="mb-4">Select your Bank</h3>

//       <div className="mb-4">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search your Bank"
//         />
//       </div>
//       <div className="card p-4">
//         <h6 className="text-primary mb-3">Popular Banks</h6>
//         <div className="row my-4">
//           {popularBanks.map((bank, index) => (
//             <div key={index} className="col-6 col-md-4 mb-4">
//               <div className="d-flex align-items-center border border-black p-2">
//                 <div
//                   className="bg-danger d-flex align-items-center justify-content-center"
//                   style={{
//                     width: "48px",
//                     height: "48px",
//                     borderRadius: "8px",
//                   }}
//                 >
//                   <span className="text-white fw-bold">{bank.logo}</span>
//                 </div>
//                 <span className="ms-3 fs-5 fw-semibold">{bank.name}</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         <h6 className="mb-3">All Banks</h6>
//         <div className="list-group">
//           {allBanks.map((bank) => (
//             <div className="d-flex align-items-center mb-4 border border-black p-2">
//               <button
//                 key={bank.id}
//                 className="bg-danger d-flex align-items-center justify-content-center"
//                 style={{ width: "48px", height: "48px", borderRadius: "8px" }}
//                 onClick={() => {
//                   handleBankSelect(bank);
//                   onNext();
//                 }}
//               >
//                 <span className="text-white fw-bold">{bank.logo}</span>
//               </button>
//               <span className="ms-3 fs-5 fw-semibold">{bank.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
//         <button
//           onClick={handleBack}
//           style={{
//             margin: "10px 10px 30px 0",
//             padding: "16px 32px",
//             backgroundColor: "white",
//             color: "#1a4dbe",
//             width: "25%",
//             border: "1px solid #1a4dbe",
//           }}
//         >
//           Back
//         </button>
//         <button
//           onClick={handleNext}
//           style={{
//             margin: "10px 10px 30px 0",
//             padding: "16px 32px",
//             backgroundColor: "#1a4dbe",
//             color: "white",
//             width: "25%",
//           }}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BankSelection;
