import React, { useState } from "react";
import PersonalDetailsScreen from "../components/applicationFlow/PersonalDetailsScreen";
import PANVerificationScreen from "../components/applicationFlow/PANVerificationScreen";
import AadhaarVerificationOptions from "./../components/applicationFlow/AadharVerificationOptions";
import LoanPurposeScreen from "../components/applicationFlow/LoanPurposeScreen";
import LoanAmountScreen from "../components/applicationFlow/LoanAmountScreen";
import GenderScreen from "../components/applicationFlow/GenderScreen";
import MaritalStatusScreen from "../components/applicationFlow/MaritalStatusScreen";
import EducationPage from "./../components/applicationFlow/EducationPage";
import EmploymentPage from "./../components/applicationFlow/EmploymentPage";
import PaymentPage from "./../components/applicationFlow/PaymentPage";
import CompanyPage from "../components/applicationFlow/CompanyPage";
import CompanyNamePage from "../components/applicationFlow/CompanyNamePage";
import IndustryPage from "../components/applicationFlow/IndustryPage";
import DesignationPage from "../components/applicationFlow/DesignationPage";
import MonthlyIncomePage from "../components/applicationFlow/MonthlyIncomePage";
import WorkExperienceForm from "../components/applicationFlow/WorkExperienceForm";
import SalaryDateForm from "../components/applicationFlow/SalaryDateForm";
import ResidenceTypeForm from "../components/applicationFlow/ResidenceTypeForm";
import AddressForm from "../components/applicationFlow/AddressForm";
import BankSelection from "../components/applicationFlow/BankSelection";
import MobileVerification from "../components/applicationFlow/MobileVerification";
import OtpVerification from "../components/applicationFlow/OtpVerification";
import FirstMobileVerification from "../components/applicationFlow/FirstMobileVerification";
import UserInfo from "../components/applicationFlow/UserInfoForm";
import UserOtherInfo from "../components/applicationFlow/OtherUserInfo";

const ApplicationFlow = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pan: "",
    dob: "27/09/2023",
    workExperience: "",
    dateOfSalary: "",
    residenceType: "",
    address: {
      building: "",
      city: "",
      state: "",
      pincode: "",
      landmark: "",
    },
  });

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <>
      {/* {step === 0 && (
        <PersonalDetailsScreen
          formData={formData}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
        />
      )} */}
      
       {step === 0 && (
        <FirstMobileVerification
          handleNext={handleNext}
        />
      )}
      {step === 1 && (
        <UserInfo
          // formData={formData}
          // handleInputChange={handleInputChange}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 2 && (
        <PANVerificationScreen
          // formData={formData}
          // handleInputChange={handleInputChange}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 3 && (
        <AadhaarVerificationOptions
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 4 && (
        <AddressForm
          // formData={formData}
          // setFormData={setFormData}
           handleNext={handleNext}
           handleBack={handleBack}
        />
      )}
       {step === 5 && (
        <UserOtherInfo 
        handleNext={handleNext} handleBack={handleBack}/>
      )}
      {/* {step === 5 && (
        <LoanAmountScreen handleNext={handleNext} handleBack={handleBack} />
      )}
      {step === 5 && (
        <GenderScreen handleNext={handleNext} handleBack={handleBack} />
      )}
      {step === 6 && (
        <MaritalStatusScreen handleNext={handleNext} handleBack={handleBack} />
      )} */}
      {/* {step === 5 && (
        <EducationPage handleNext={handleNext} handleBack={handleBack} />
      )} */}
      {step === 6 && (
        <EmploymentPage handleNext={handleNext} handleBack={handleBack} />
      )}
      {step === 7 && (
        <PaymentPage handleNext={handleNext} handleBack={handleBack} />
      )}
      {step === 8 && (
        <CompanyNamePage
          formData={formData}
          setFormData={setFormData}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 9 && (
        <IndustryPage
          formData={formData}
          setFormData={setFormData}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 10 && (
        <DesignationPage
          formData={formData}
          setFormData={setFormData}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 11 && (
        <MonthlyIncomePage
          formData={formData}
          setFormData={setFormData}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 12 && (
        <WorkExperienceForm
          formData={formData}
          setFormData={setFormData}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 13 && (
        <SalaryDateForm
          formData={formData}
          setFormData={setFormData}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 16 && (
        <ResidenceTypeForm
          formData={formData}
          setFormData={setFormData}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 17 && (
        <LoanPurposeScreen handleNext={handleNext} handleBack={handleBack} />
      )}
      {step === 18 && (
        <BankSelection
          formData={formData}
          setFormData={setFormData}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 19 && (
        <MobileVerification
          formData={formData}
          setFormData={setFormData}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
      {step === 20 && (
        <OtpVerification
          formData={formData}
          setFormData={setFormData}
          handleNext={handleNext}
          handleBack={handleBack}
        />
      )}
    </>
  );
};

export default ApplicationFlow;
