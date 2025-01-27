import React from 'react';

const PastLoans = ({ loans }) => {
  return (
    <div>
      <h3 className="mb-4">Past Loans</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {loans.map(loan => (
              <tr key={loan.id}>
                <td>{loan.id}</td>
                <td>{loan.type}</td>
                <td>₹{loan.amount}</td>
                <td>
                  <span className={`badge ${loan.status === 'Closed' ? 'bg-success' : 'bg-warning'}`}>
                    {loan.status}
                  </span>
                </td>
                <td>{loan.startDate}</td>
                <td>{loan.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PastLoans;