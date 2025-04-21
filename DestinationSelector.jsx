// src/components/DestinationSelector.jsx
import React from 'react';

function DestinationSelector({ tours, selected, onSelect }) {
  const destinations = ['All', ...new Set(tours.map(tour => tour.name))];

  return (
    <div className="dropdown">
      <label htmlFor="destination">Select Destination: </label>
      <select
        id="destination"
        value={selected}
        onChange={(e) => onSelect(e.target.value)}
      >
        {destinations.map((name, idx) => (
          <option key={idx} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DestinationSelector;