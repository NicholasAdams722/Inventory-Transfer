import React from 'react';
import './TransferHistory.css';

const TransferHistory = ({ transfers }) => {
  return (
    <div className="history-container">
      <h2>Transfer History</h2>
      {transfers.length === 0 ? (
        <p>No transfers available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>SKU</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>From Store</th>
              <th>To Store</th>
            </tr>
          </thead>
          <tbody>
            {transfers.map((transfer, index) => (
              <tr key={index}>
                <td>{transfer.sku}</td>
                <td>{transfer.quantity}</td>
                <td>{transfer.date}</td>
                <td>{transfer.fromStore}</td>
                <td>{transfer.toStore}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransferHistory;



