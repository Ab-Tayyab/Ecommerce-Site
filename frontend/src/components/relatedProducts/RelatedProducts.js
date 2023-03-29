import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import { Row, Col } from "react-bootstrap";
import Product from "../homeProduct/Product";
import Loader from "../loader/Loader";
import Message from "../message/Message";

const RelatedProducts = ({ category }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;


  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);


  return (
    <>
      <h3
        style={{
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        Product you Like
      </h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => {
              if (product.category === category) {
                return (
                  <Col
                    style={{
                      marginBottom: "20px",
                    }}
                    key={product._id}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={3}
                  >
                    <Product product={product} />
                  </Col>
                );
              }
            })}
          </Row>
        </>
      )}
    </>
  );
};

export default RelatedProducts;