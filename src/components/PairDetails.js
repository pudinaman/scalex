// src/components/PairDetails.js

import React, { useState } from 'react';

const PairDetails = () => {
  const [pairId, setPairId] = useState('');
  const [pairData, setPairData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/v1/pair/${pairId}`);
      if (!response.ok) {
        throw new Error('Pair not found');
      }
      const data = await response.json();
      setPairData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Pair Details</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pairId}
          onChange={(e) => setPairId(e.target.value)}
          placeholder="Enter Pair ID"
        />
        <button type="submit">Fetch Data</button>
      </form>
      {error && <p>{error}</p>}
      {pairData && (
        <div>
          <h2>Price: {pairData.priceUsd}</h2>
          <h2>Volume: {pairData.volume}</h2>
          {/* Add more fields as needed */}
        </div>
      )}
    </div>
  );
};

export default PairDetails;
