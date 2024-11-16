import React from 'react';
import cakes from '../data/cakes';
import { Link } from 'react-router-dom';

const CakeCategories = () => {
  const categories = [...new Set(cakes.map(cake => cake.category))];
  
  return (
    <div className="categories">
      <h2>Cake Categories</h2>
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h3>{category}</h3>
          <div className="cake-list">
            {cakes
              .filter(cake => cake.category === category)
              .map(cake => (
                <div key={cake.id} className="cake-card">
                  <img src={cake.imageUrl} alt={cake.name} />
                  <h3>{cake.name}</h3>
                  <p>₹{cake.price}</p>
                  <Link to={`/cake/${cake.id}`}>View Details</Link>
                  <br/>
                  <br/>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CakeCategories;
