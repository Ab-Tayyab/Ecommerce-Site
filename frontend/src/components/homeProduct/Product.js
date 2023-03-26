import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="container page-wrapper">
      <div className="page-inner">
        <div className="row">
          <div className="el-wrapper">
            <div className="box-up">
              <img
                className="img"
                src={product.image}
                alt=""
                width="200px"
                height="200px"
              />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">{product.name}</span>
                </div>
                <div className="a-size">
                  <span className="size">
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <Link
                className="cart"
                to={`/product/${product._id}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <span className="price">{product.price}</span>
                <span className="add-to-cart">
                  <span className="txt">Details</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
