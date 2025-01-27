import React, { useState } from "react";

const ProfileSection = ({ userData, onUpdateProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(userData);
  const [uploadingDoc, setUploadingDoc] = useState(null);


  const requiredDocuments = [
    {
      id: "income_proof",
      name: "Income Proof",
      description: "Salary slips or Income tax returns",
      acceptedFormats: ".pdf,.doc,.docx",
      required: true,
    },
    {
      id: "bank_statements",
      name: "Bank Statements",
      description: "Last 6 months bank statements",
      acceptedFormats: ".pdf",
      required: true,
    },
    {
      id: "identity_proof",
      name: "Identity Proof",
      description: "Government issued ID (Passport/Driving License)",
      acceptedFormats: ".pdf,.jpg,.jpeg,.png",
      required: true,
    },
    {
      id: "address_proof",
      name: "Address Proof",
      description: "Utility bill or Rental agreement",
      acceptedFormats: ".pdf,.jpg,.jpeg,.png",
      required: true,
    },
    {
      id: "employment_proof",
      name: "Employment Proof",
      description: "Employment contract or Business registration",
      acceptedFormats: ".pdf,.doc,.docx",
      required: false,
    },
  ];

  const handleFileChange = (e, docId) => {
    const file = e.target.files[0];
    if (file) {
      const newDoc = {
        id: docId,
        name: file.name,
        uploadDate: new Date().toISOString().split("T")[0],
        status: "Uploaded",
      };

      setFormData((prev) => ({
        ...prev,
        documents: {
          ...prev.documents,
          [docId]: newDoc,
        },
      }));
    }
  };

  const getDocumentStatus = (docId) => {
    const doc = formData.documents[docId];
    return doc ? "Uploaded" : "Not Uploaded";
  };

  const getButtonText = (docId) => {
    const doc = formData.documents[docId];
    return doc ? "Reupload" : "Upload";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    onUpdateProfile(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Profile Information</h3>
        <button
          className="btn btn-primary"
          onClick={() => setIsEditing(!isEditing)}
        >
          <i className={`bi bi-${isEditing ? "x-lg" : "pencil"} me-2`}></i>
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* User Information Section */}
          <div className="col-md-12">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">User Information</h5>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    ) : (
                      <input
                        type="text"
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        value={formData.name}
                        readOnly
                      />
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    ) : (
                      <input
                        type="email"
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        value={formData.email}
                        readOnly
                      />
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    ) : (
                      <input
                        type="tel"
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        value={formData.phone}
                        readOnly
                      />
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Address</label>
                    {isEditing ? (
                      <textarea
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        rows="3"
                      />
                    ) : (
                      <textarea
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        value={formData.address}
                        readOnly
                        rows="3"
                      />
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Date of Birth</label>
                    {isEditing ? (
                      <input
                        type="date"
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        name="dob"
                        value={formData.dob || "16-02-1987"}
                        onChange={handleChange}
                      />
                    ) : (
                      <input
                        type="date"
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        value={formData.dob || "16-02-1987"}
                        readOnly
                      />
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Gender</label>
                    {isEditing ? (
                      <select
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        name="gender"
                        value={formData.gender || ""}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    ) : (
                      <input
                        type="text"
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        value={formData.gender || ""}
                        readOnly
                      />
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Occupation</label>
                    {isEditing ? (
                      <input
                        type="text"
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                      />
                    ) : (
                      <input
                        type="text"
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        value={formData.occupation}
                        readOnly
                      />
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Annual Income</label>
                    {isEditing ? (
                      <input
                        type="text"
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        name="income"
                        value={formData.income}
                        onChange={handleChange}
                      />
                    ) : (
                      <input
                        type="text"
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        value={formData.income}
                        readOnly
                      />
                    )}
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Credit Score</label>
                    {isEditing ? (
                      <input
                        type="number"
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        name="creditScore"
                        value={formData.creditScore}
                        onChange={handleChange}
                        min="300"
                        max="850"
                      />
                    ) : (
                      <input
                        type="number"
                        className={`form-control ${isEditing ? "border-secondary" : "border-tertiary"}`}
                        value={formData.creditScore}
                        readOnly
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title mb-4">Required Documents</h5>

            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Document Type</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Last Updated</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {requiredDocuments.map((doc) => (
                    <tr key={doc.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <i className="bi bi-file-earmark-text me-2"></i>
                          {doc.name}
                          {doc.required && (
                            <span className="badge bg-danger ms-2">
                              Required
                            </span>
                          )}
                        </div>
                      </td>
                      <td>
                        <small className="text-muted">
                          {doc.description}
                        </small>
                      </td>
                      <td>
                        <span
                          className={`badge ${
                            formData.documents[doc.id]
                              ? "bg-success"
                              : "bg-warning"
                          }`}
                        >
                          {getDocumentStatus(doc.id)}
                        </span>
                      </td>
                      <td>
                        <small>
                          {formData.documents[doc.id]?.uploadDate || "-"}
                        </small>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <button
                            type="button"
                            className={`btn btn-sm ${
                              formData.documents[doc.id]
                                ? "btn-outline-primary"
                                : "btn-primary"
                            }`}
                            onClick={() => setUploadingDoc(doc.id)}
                          >
                            <i className="bi bi-upload me-1"></i>
                            {getButtonText(doc.id)}
                          </button>
                          {uploadingDoc === doc.id && (
                            <input
                              type="file"
                              className="form-control d-none"
                              accept={doc.acceptedFormats}
                              onChange={(e) => {
                                handleFileChange(e, doc.id);
                                setUploadingDoc(null);
                              }}
                              onBlur={() => setUploadingDoc(null)}
                              autoFocus
                            />
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {isEditing && (
          <button
            type="submit"
            className="btn btn-success mt-3 float-end"
          >
            Save Changes
          </button>
        )}
      </form>
    </div>
  );
};

export default ProfileSection;
