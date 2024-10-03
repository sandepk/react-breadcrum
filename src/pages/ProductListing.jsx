import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';


const ProductListing = () => {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.products);
      });
  }, []);
  return (
    <div>
      <h2>Products Listing</h2>
      <div className="product-grid">
        {
          products?.map((prod) => {
            return (
              <div className="product-card" key={prod.id}>
                <Link to={`/products/${prod.id}`}>
                  <img src={prod.thumbnail} title={prod.title} />
                  <h3>{prod.title}</h3>
                  <h3>${prod.price}</h3>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  )
}

export default ProductListing
