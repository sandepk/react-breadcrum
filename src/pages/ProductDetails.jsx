import React, { useState, useEffect } from "react";
import { Outlet, useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      });
  }, []);
  return (
    <div>
      {product ? (
        <div className="product-card" style={{ display: "flex", width: '50%' }}>
          <img src={product.thumbnail} alt={product.title} />
          <div>
            <h2>{product.title}</h2>
            <h3>Price: ${product.price}</h3>
            <p>{product.description}</p>
          <Link to={`/products/${id}/welcome`}><h1>Welcome!!!</h1></Link>
          </div>
          <div style={{position: 'absolute', top:0, right: 0, width: '200px', padding:'20px'}}><Outlet /></div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ProductDetails;
