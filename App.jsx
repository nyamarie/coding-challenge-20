// src/App.jsx
import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import DestinationSelector from './components/DestinationSelector';
import './styles/styles.css';

const API_URL = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState('All');

  const fetchTours = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTours(data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const handleRemove = (id) => {
    setTours(prev => prev.filter(tour => tour.id !== id));
  };

  const handleSelect = (name) => {
    setSelected(name);
  };

  const filteredTours =
    selected === 'All'
      ? tours
      : tours.filter(tour => tour.name === selected);

  return (
    <main>
      <h1>🌍 Tour Explorer</h1>
      <DestinationSelector
        tours={tours}
        selected={selected}
        onSelect={handleSelect}
      />
      <Gallery
        tours={filteredTours}
        loading={loading}
        error={error}
        onRemove={handleRemove}
        onRefresh={fetchTours}
      />
    </main>
  );
}

export default App;