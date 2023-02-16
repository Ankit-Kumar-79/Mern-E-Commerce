import React from "react";
import { useParams } from "react-router-dom";
import dummyImg from "../../assets/naruto.jpeg";
import "./ProductDetail.scss";

function ProductDetail() {
  const params = useParams();
  console.log("params", params);
  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="product-layout">
          <div className="product-img center">
            <img src={dummyImg} alt="product img" />
          </div>
          <div className="product-info">
            <h1 className="heading">This is the title, wall poster</h1>
            <h3 className="price">₹ 549</h3>
            <p className="description">
              300 GSM Fine Art Matte Paper Elegant Block Frame Made up of
              Premium Quality Synthetic Wood industry-Recognized High-Quality
              Print Protective Matte Coating provides a Vivid, Sharp and
              Non-Reflective Appearance
            </p>
            <div className="cart-options">
              <div className="quantity-selector">
                <span className="btn decrement">-</span>
                <span className="quantity">3</span>
                <span className="btn increment">+</span>
              </div>
              <button className="btn-primary add-to-cart"> Add to Cart</button>
            </div>

            <div className="return-policy">
              <ul>
                <li>
                  We know that you care how information about you is used and
                  shared, and we appreciate your trust that we will do so
                  carefully and sensibly.
                </li>
                <li>
                  Personal information subject to this Privacy Notice will be
                  collected and retained by Poterz
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
