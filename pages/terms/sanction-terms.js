
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 2rem auto;
    padding: 2rem;
    max-width: 800px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    text-align: center;
    color: #333;
    margin-bottom: 1rem;
`;

const Paragraph = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1rem;
`;

const List = styled.ul`
    margin-left: 1rem;
`;

const ListItem = styled.li`
    font-size: 1rem;
    line-height: 1.5;
    color: #555;
    margin-bottom: 0.5rem;
`;

const SanctionTerms = () => {
    return (
        <Container>
            <Title>Sanction Terms</Title>
            <Paragraph>Please read the following terms and conditions carefully before accepting the loan:</Paragraph>
            <List>
                <ListItem>The loan amount is sanctioned based on the information provided by the applicant.</ListItem>
                <ListItem>Repayment of the loan must be made within the agreed tenure.</ListItem>
                <ListItem>Failure to repay on time will result in penalties and interest charges.</ListItem>
                <ListItem>Applicant must maintain a good credit score throughout the tenure of the loan.</ListItem>
                <ListItem>Any changes in contact information must be reported immediately.</ListItem>
                <ListItem>The lender reserves the right to modify the terms and conditions at any time.</ListItem>
            </List>
        </Container>
    );
};

export default SanctionTerms;



// // pages/terms/sanction-terms.js
// import React from 'react';

// const SanctionTerms = () => {
//     return (
//         <div style={{ margin: '2rem' }}>
//             <h1>Sanction Terms</h1>
//             <p>Please read the following terms and conditions carefully before accepting the loan:</p>
//             <ul>
//                 <li>The loan amount is sanctioned based on the information provided by the applicant.</li>
//                 <li>Repayment of the loan must be made within the agreed tenure.</li>
//                 <li>Failure to repay on time will result in penalties and interest charges.</li>
//                 <li>Applicant must maintain a good credit score throughout the tenure of the loan.</li>
//                 <li>Any changes in contact information must be reported immediately.</li>
//                 <li>The lender reserves the right to modify the terms and conditions at any time.</li>
//             </ul>
//         </div>
//     );
// };

// export default SanctionTerms;
