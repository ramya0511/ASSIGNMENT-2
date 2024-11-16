import React from 'react';
import { useParams } from 'react-router-dom';
import cakes from '../data/cakes';
import './CakeDetails.css';

const CakeDetails = () => {
  const { id } = useParams();
  const cake = cakes.find((c) => c.id === parseInt(id));

  if (!cake) return <p>Cake not found.</p>;

  return (
    <div className="cake-details">
      <img src={cake.imageUrl} alt={cake.name}/>
      <h2>{cake.name}</h2>
      <p>{cake.description}</p>
      <p>Price: ₹ {cake.price}</p>
    </div>
  );
};

export default CakeDetails;
