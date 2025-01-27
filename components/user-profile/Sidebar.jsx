import React from 'react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="col-md-3 col-lg-2 p-3 bg-dark text-white min-vh-100">
      <div className="nav flex-column nav-pills">
        <button 
          className={`nav-link text-white text-start w-100 ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <i className="bi bi-person-circle me-2"></i>
          Profile
        </button>
        <button 
          className={`nav-link text-white text-start w-100 ${activeTab === 'current' ? 'active' : ''}`}
          onClick={() => setActiveTab('current')}
        >
          <i className="bi bi-file-earmark-text me-2"></i>
          Current Application
        </button>
        <button 
          className={`nav-link text-white text-start w-100 ${activeTab === 'past' ? 'active' : ''}`}
          onClick={() => setActiveTab('past')}
        >
          <i className="bi bi-clock-history me-2"></i>
          Past Loans
        </button>
      </div>
    </div>
  );
};

export default Sidebar;