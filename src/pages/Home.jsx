import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((result) => {
        const slicedTrending = result.products.slice(0, 6);
        console.log(slicedTrending);
        setTrendingProducts(slicedTrending);
      });
  }, []);
  return (
    <div>
      <h2>Home Page</h2>
      <span>Trending Products</span>
      <div className="product-grid">
        {trendingProducts.length &&
          trendingProducts.map((prod) => {
            return (
              <div className="product-card" key={prod.id}>
                <Link to={`/products/${prod.id}`}>
                  <img src={prod.thumbnail} title={prod.title} />
                  <h3>{prod.title}</h3>
                </Link>
              </div>
            );
          })}
      </div>
      <Link to="/products">
        <button style={{ padding: "20px", width: "50%" }}>
          {" "}
          View All Products
        </button>
      </Link>
    </div>
  );
};

export default Home;
