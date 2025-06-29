import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import ProductListing from "./pages/ProductListing";
import Breadcrumbs from "./components/Breadcrumbs";
import Welcome from "./components/Welcome";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>RoadsideCode store</h1>
        {/* Breadcrumbs  */}
        {/* Routes  */}
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetails />}>
              <Route path="welcome" element={<Welcome />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
