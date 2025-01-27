// pages/loan-application.js
import Head from 'next/head';
import LoanApplication from '../components/loan-application/LoanApplication';

export default function LoanApplicationPage() {
  return (
    <>
      <Head>
        <title>Loan Application | Your Bank Name</title>
        <meta name="description" content="Apply for a loan online with our easy application process" />
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
          rel="stylesheet"
        />
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
      </Head>

      <main>
        <LoanApplication />
      </main>

      <style jsx global>{`
        body {
          background-color: #f8f9fa;
        }
      `}</style>
    </>
  );
}