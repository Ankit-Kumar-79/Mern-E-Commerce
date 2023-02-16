import React from "react";
import dummyImg from "../../assets/naruto.jpeg";
import { AiOutlineClose } from "react-icons/ai";
import "./CartItem.scss";

function CartItem() {
  return (
    <div className="CartItem">
      <div className="item-img">
        <img src={dummyImg} alt="" />
      </div>

      <div className="item-info-wrapper">
        <div className="item-info">
          <h4 className="title">Product Title Here</h4>
          <p className="price">₹ 459</p>
          <div className="quantity-selector">
            <span className="btn decrement">-</span>
            <span className="quantity">3</span>
            <span className="btn increment">+</span>
          </div>
          <p className="total-price">Subtotal: ₹ 4593</p>
        </div>

        <div className="item-remove">
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
