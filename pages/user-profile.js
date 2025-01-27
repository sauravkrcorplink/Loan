import React, { useState } from 'react';
import Sidebar from '../components/user-profile/Sidebar';
import ProfileSection from '../components/user-profile/ProfileSection';
import CurrentApplication from '../components/user-profile/CurrentApplication';
import PastLoans from '../components/user-profile/PastLoans';
import { userData as initialUserData, currentApplication, pastLoans } from '../components/user-profile/mockData';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState(initialUserData);

  const handleUpdateProfile = (updatedData) => {
    setUserData(updatedData);
    console.log('Profile updated:', updatedData);
  };

  const handleUploadDocument = (newDoc) => {
    setUserData(prev => ({
      ...prev,
      documents: [...prev.documents, newDoc]
    }));
    console.log('Document uploaded:', newDoc);
  };

  const handleDeleteDocument = (docId) => {
    setUserData(prev => ({
      ...prev,
      documents: prev.documents.filter(doc => doc.id !== docId)
    }));
    console.log('Document deleted:', docId);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="col-md-9 col-lg-10 p-4">
          {activeTab === 'profile' && (
            <ProfileSection 
              userData={userData}
              onUpdateProfile={handleUpdateProfile}
              onUploadDocument={handleUploadDocument}
              onDeleteDocument={handleDeleteDocument}
            />
          )}
          {activeTab === 'current' && <CurrentApplication application={currentApplication} />}
          {activeTab === 'past' && <PastLoans loans={pastLoans} />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;