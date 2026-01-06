// import { useState } from 'react'
import { apiFetch}from './apiFetch.jsx'
import './index.css'

function App() {
  const { data, loading, err } = apiFetch();

 
      if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (err) {
    return <div className="error">Error: {err}</div>;
  }
         if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (err) {
    return <div className="error">Error: {err}</div>;
  }

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="products-grid">
        {data && data.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.images[0]} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );

      
 
};
export default App
