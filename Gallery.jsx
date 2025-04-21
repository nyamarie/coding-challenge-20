// src/components/Gallery.jsx
import React from 'react';
import TourCard from './TourCard';

function Gallery({ tours, loading, error, onRemove, onRefresh }) {
  if (loading) return <h2 className="loading">Loading tours...</h2>;
  if (error) return <h2 className="error">Failed to load tours.</h2>;
  if (tours.length === 0)
    return (
      <div className="no-tours">
        <h2>No tours left. Refresh to reload.</h2>
        <button onClick={onRefresh}>Refresh</button>
      </div>
    );

  return (
    <section className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </section>
  );
}

export default Gallery;

if (tours.length === 0)
    return (
      <div className="no-tours">
        <h2>No tours left. Refresh to reload.</h2>
        <button onClick={onRefresh}>Refresh</button>
      </div>
    );