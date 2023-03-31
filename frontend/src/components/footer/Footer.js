import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{
      background: "#f4f3fc"
    }}>
      <footer>
        <Container>
          <Row style={{
            position: "relative"
          }}>
            <Col className="text-center py-3"> CopyRight &copy; Sitara Studio</Col>
            <Col className="text-center py-3"> Designed and Powered by Self Production.</Col>
            <Col className="text-center py-3">
              <a
                href="https://wa.me/+923085630574"
                class="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-whatsapp" style={{
                  fontSize: "50px",
                  position: "absolute",
                  bottom: 30,
                  right: 20,
                  position: "fixed",
                  color: "green",
                  cursor: "pointer"
                }}></i>
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
