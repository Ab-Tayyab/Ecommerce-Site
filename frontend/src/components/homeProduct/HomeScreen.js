import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import { Row, Col, Container } from "react-bootstrap";
import Product from "./Product";
import Loader from "../loader/Loader";
import Message from "../message/Message";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const HomeScreen = () => {
  const [numItems, setNumItems] = useState(8);

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
          paddingTop: "40px",
          paddingBottom: "20px",
        }}
      >
        {" "}
        Advertised Products
      </h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Row>
            {products.slice(0, numItems).map((product) => (
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
            ))}
          </Row>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Link to="allitems">
                <Button style={{
                  background:"#192655",
                  border:"none"
                }}>Explore All Products</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default HomeScreen;
