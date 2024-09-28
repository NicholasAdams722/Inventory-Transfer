import React, { useState } from 'react';
import InventoryForm from './Components/InventoryForm/InventoryForm';
import TransferHistory from './Components/TransferHistory/TransferHistory';
import './App.css';

const App = () => {
  const [transfers, setTransfers] = useState([]); // Store all transfers
  const [currentPage, setCurrentPage] = useState('form'); // Track which page to display

  const handleFormSubmit = (formData) => {
    setTransfers([...transfers, formData]); // Add new transfer to the array
  };

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav>
        <ul>
          <li>
            <button onClick={() => setCurrentPage('form')}>Transfer Form</button>
          </li>
          <li>
            <button onClick={() => setCurrentPage('history')}>Transfer History</button>
          </li>
        </ul>
      </nav>

      {/* Conditional Rendering */}
      {currentPage === 'form' ? (
        <InventoryForm onSubmit={handleFormSubmit} />
      ) : (
        <TransferHistory transfers={transfers} />
      )}
    </div>
  );
};

export default App;
