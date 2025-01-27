import React, { useState } from 'react';

const CompanyNamePage = ({ formData, setFormData, handleNext, handleBack }) => {
  const companySuggestions = [
    'Other',
    'Sam Fincorp',
    'R.K Bansal Finance Pvt. Ltd.',
    'Reliance Industries Limited',
    'S.K Bansal Finance Pvt. Ltd.'
  ];

  const [searchTerm, setSearchTerm] = useState('');

  // Filter suggestions based on search term
  const filteredSuggestions = companySuggestions.filter(company =>
    company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      <h3 className="mb-4">Enter your Company&apos;s name</h3>
      <div className="dropdown mb-4">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Search company"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} 
          name="companyName"
        />
        {searchTerm && (
          <div className="list-group">
            {filteredSuggestions.map((company, index) => (
              <button
                key={index}
                className="list-group-item list-group-item-action"
                onClick={() => {
                  setFormData({ ...formData, companyName: company });
                  setSearchTerm(company); 
                }}
              >
                {company}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className=" mb-3 d-flex gap-2">
          <i className="bi bi-shield-fill-check text-success"></i>
          <label className="form-check-label" htmlFor="dataConsent">
            Your data is safe with us
          </label>
        </div>

        
      <div style={{ display: "flex", gap: "10px", marginTop: '20px' }}>
        <button
          onClick={handleBack}
          style={{
            margin: "10px 10px 30px 0",
            padding: "16px 32px",
            backgroundColor: "white",
            color: "#1a4dbe",
            width: "25%",
            border: '1px solid #1a4dbe'
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

export default CompanyNamePage;
