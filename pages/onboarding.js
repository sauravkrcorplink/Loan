import { useState, useEffect } from 'react';
import Image from 'next/image';
// import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      
      title: 'Get Flexible Loan Amount',
      description: 'Tailor your loan to fit your needs, with flexibility at its core.',
    },
    {

      title: 'Instant Disbursal',
      description: 'Get funds in a flash, because your aspirations can’t wait.',
    },
    {
      
      title: 'Secured Process',
      description: 'Your data is safeguarded with top-notch encryption for a trustworthy loan experience.',
    },
    {
      
      title: 'Lowest Interest Rates',
      description: 'Benefit from competitive rates, optimizing your financial commitments.',
    },
  ];

  useEffect(() => {
    if (currentScreen === 0) {
      setTimeout(() => {
        setCurrentScreen(1); 
      }, 3000); 
    }
  }, [currentScreen]);

  if (currentScreen === 0) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100 bg-primary">
        <div className="text-center text-white">
          <Image src="/logo.png" alt="Loan1 Logo" width={150} height={150} />
          <h1 className="mt-4 display-4">Loan1</h1>
        </div>
      </div>
    );
  }

  const screenData = screens[currentScreen - 1];

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100 bg-light p-4 px-auto">
      <div className="w-100 max-w-3xl bg-white shadow-lg rounded-3 p-4 text-center">
        <h2 className="h5 font-weight-bold text-dark">{screenData.title}</h2>
        <p className="mt-3 text-muted">{screenData.description}</p>
        <button
          className="mt-4 btn btn-primary w-100"
          onClick={() => {
            if (currentScreen < screens.length) {
              setCurrentScreen(currentScreen + 1);
            } else {
              setCurrentScreen(1); 
            }
          }}
        >
          {currentScreen < screens.length ? 'Get Started' : 'Start Again'}
        </button>
      </div>
    </div>
  );
}
