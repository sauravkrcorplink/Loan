import React from 'react';
import styles from "../../styles/EmandateSelect.module.css";

const banks = ['SBI', 'HDFC', 'ICICI', 'AXIS', 'KOTAK', 'INDUSIND'];

const EmandateSelectBank = ({ onNext }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Select Your Bank</h1>
        <ul className={styles.bankList}>
          {banks.map((bank) => (
            <li key={bank} className={styles.bankItem} onClick={() => onNext(bank)}>
              {bank}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmandateSelectBank;



// import React from 'react';
// import "../../styles/EmandatePage.module.css"

// const banks = ['SBI', 'HDFC', 'ICICI', 'AXIS', 'KOTAK', 'INDUSIND'];

// const EmandateSelectBank = ({ onNext }) => {
//   return (
//     <div>
//       <h1>Select Your Bank</h1>
//       <ul>
//         {banks.map((bank) => (
//           <li key={bank}>
//             <button onClick={() => onNext(bank)}>{bank}</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EmandateSelectBank;
