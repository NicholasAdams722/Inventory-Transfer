import React, { useState } from 'react';
import "./InventoryForm.css";

const InventoryForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    sku: '',
    quantity: '1', // Default to 1
    fromStore: 'Store 2',
    toStore: 'Store 4',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentDate = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD
    const dataToSubmit = { ...formData, date: currentDate };

    // Call the parent component's onSubmit function
    onSubmit(dataToSubmit);

    // Reset form after submission
    setFormData({
      sku: '',
      quantity: '1',
      fromStore: 'Store 2',
      toStore: 'Store 4',
    });
  };

  const quantityOptions = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <div className="container">
      <h2>Inventory Transfer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>SKU Number:</label>
          <input
            type="text"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Quantity:</label>
          <select
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          >
            {quantityOptions.map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>From Store:</label>
          <select name="fromStore" value={formData.fromStore} onChange={handleChange}>
            <option value="Store 2">Store 2</option>
            <option value="Store 4">Store 4</option>
          </select>
        </div>
        <div>
          <label>To Store:</label>
          <select name="toStore" value={formData.toStore} onChange={handleChange}>
            <option value="Store 2">Store 2</option>
            <option value="Store 4">Store 4</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InventoryForm;

