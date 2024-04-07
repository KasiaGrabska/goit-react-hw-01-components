import PropTypes from 'prop-types';
import styles from '../styles/TransactionHistory.module.css';

export const TransactionHistory = ({ itemsArray: { transactionsArray } }) => {
  return (
    <>
      <div className={styles.transactionHistory}>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr className={styles.tableRow}>
              <th className={styles.tableHeading}>Type</th>
              <th className={styles.tableHeading}>Amount</th>
              <th className={styles.tableHeading}>Currency</th>
            </tr>
          </thead>
          <tbody>
            {transactionsArray.map(transaction => (
              <tr className={styles.tableRow} key={transaction.id}>
                <td className={styles.tableData}>{transaction.type}</td>
                <td className={styles.tableData}>{transaction.amount}</td>
                <td className={styles.tableData}>{transaction.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

TransactionHistory.propTypes = {
  itemsArray: PropTypes.shape({
    transactionsArray: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};
