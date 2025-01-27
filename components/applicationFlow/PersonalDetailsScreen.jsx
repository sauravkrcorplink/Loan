import React from 'react';

const PersonalDetailsScreen = ({ formData, handleInputChange, handleNext }) => (
  <div className="container" style={{marginTop: '12rem'}}>
    <h2>Ensuring Authenticity, Just For You!</h2>
    <div style={{display:'flex', flexDirection:'column'}}>
      <label style={{fontWeight: 'bold'}}>Enter your name</label>
      <span style={{fontSize:'14px'}}>Please enter your name as per PAN</span>
      <input  
        type="text" 
        name="name" 
        placeholder="Enter your name as per PAN" 
        value={formData.name} 
        onChange={handleInputChange}
        style={{margin:'10px 10px 10px 0'}} 
      />
    </div>
    <div>
      <label style={{fontWeight: 'bold'}}>Enter your e-mail</label>
      <input 
        type="email" 
        name="email" 
        placeholder="Enter your e-mail" 
        value={formData.email} 
        onChange={handleInputChange}
        style={{margin:'10px 10px 10px 0'}} 

      />
    </div>
    <div className=" mb-3 d-flex gap-2">
          <i className="bi bi-shield-fill-check text-success"></i>
          <label className="form-check-label" htmlFor="dataConsent">
            Your data is safe with us
          </label>
        </div>
    <button onClick={handleNext}style={{margin:'10px 10px 30px 0' , padding:'16px 32px', backgroundColor:'#1a4dbe', color:'white', width:'25%', }}>Next</button>
  </div>
);

export default PersonalDetailsScreen;
