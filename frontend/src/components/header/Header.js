import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <>
      <Container
        fluid
        style={{
          background: "#192655",
          color: "white",
          paddingTop:"15px"
        }}
      >
        <Row>
          <Col xs={6} md={4}>
            <p>UAN: 0311-0000000 , 0300-0000000</p>
          </Col>
          <Col xs={6} md={4}>
            <p>Free Delivery on orders above PKR 4000/-</p>
          </Col>
          <Col xs={6} md={4}>
            <p>customerservicesitarastudio@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
