import React from 'react';

const DocumentList = ({ documents }) => {
  return (
    <div className="col-12">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Uploaded Documents</h5>
          <div className="row">
            {documents.map(doc => (
              <div key={doc.id} className="col-md-4 mb-3">
                <div className="card">
                  <div className="card-body">
                    <i className="bi bi-file-earmark-pdf h1 text-danger"></i>
                    <h6 className="mt-2">{doc.name}</h6>
                    <p className="text-muted small mb-0">{doc.type}</p>
                    <p className="text-muted small">Uploaded: {doc.uploadDate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentList;