import React, { useEffect, useState } from "react";
import Category from "../../components/category/Category";
import Hero from "../../components/hero/Hero";
import Product from "../../components/product/Product";
import { axiosClient } from "../../utils/axiosClient";
import "./Home.scss";

function Home() {
  const [categories, setCategories] = useState(null);
  const [topProducts, setTopProducts] = useState(null);

  async function fetchData() {
    const categoryResponse = await axiosClient.get(
      "/categories?populate=image"
    );
    const topProductsResponse = await axiosClient.get(
      "/products?filters[isTopPick][$eq]=true"
    );

    console.log(categoryResponse);
    console.log(topProductsResponse);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="Home">
      <Hero />
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop By Categories</h2>
          <p className="subheading">
            Shop from the best, our film and TV Posters Collections
          </p>
        </div>
        <div className="content">
          <Category />
          <Category />
          <Category />
        </div>
      </section>

      <section className="collection container">
        <div className="info">
          <h2 className="heading">Our Top Picks</h2>
          <p className="subheading">All New Designs, Same Old Details</p>
        </div>
        <div className="content">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </div>
  );
}

export default Home;
