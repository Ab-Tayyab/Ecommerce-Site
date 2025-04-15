// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";

// const Footer = () => {
//   return (
//     <div style={{
//       background: "#f4f3fc"
//     }}>
//       <footer>
//         <Container>
//           <Row style={{
//             position: "relative"
//           }}>
//             <Col className="text-center py-3"> CopyRight &copy; Sitara Studio</Col>
//             <Col className="text-center py-3"> Designed and Powered by Self Production.</Col>
//             <Col className="text-center py-3">
//               <a
//                 href="https://wa.me/+923085630574"
//                 class="whatsapp_float"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <i class="fa-brands fa-whatsapp" style={{
//                   fontSize: "50px",
//                   position: "absolute",
//                   bottom: 30,
//                   right: 20,
//                   position: "fixed",
//                   color: "green",
//                   cursor: "pointer"
//                 }}></i>
//               </a>
//             </Col>
//           </Row>
//         </Container>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#e0e0e0' }} className="text-dark pt-5 pb-3 mt-5">
      <Container>
        <Row>
          {/* About Us */}
          <Col md={3} sm={6} className="mb-4">
            <h5>About Us</h5>
            <p style={{ fontSize: '0.9rem' }}>
              We are a modern e-commerce platform providing best quality products at your doorstep.
            </p>
          </Col>

          {/* Contact */}
          <Col md={3} sm={6} className="mb-4">
            <h5>Contact Us</h5>
            <p style={{ fontSize: '0.9rem' }}>
              Email: support@example.com <br />
              Phone: +123 456 7890
            </p>
          </Col>

          {/* Pages */}
          <Col md={3} sm={6} className="mb-4">
            <h5>Pages</h5>
            <Nav className="flex-column">
              <Nav.Link href="/" className="text-dark p-0 mb-2">Home</Nav.Link>
              <Nav.Link href="/allitems" className="text-dark p-0 mb-2">Shop</Nav.Link>
              <Nav.Link href="/login" className="text-dark p-0 mb-2">My Orders</Nav.Link>
              <Nav.Link href="/cart" className="text-dark p-0">Cart</Nav.Link>
            </Nav>
          </Col>

          {/* Policies */}
          <Col md={3} sm={6} className="mb-4">
            <h5>Legal</h5>
            <Nav className="flex-column">
              <Nav.Link href="/privacy" className="text-dark p-0 mb-2">Privacy Policy</Nav.Link>
              <Nav.Link href="/terms" className="text-dark p-0">Terms & Conditions</Nav.Link>
            </Nav>
          </Col>
        </Row>

        {/* Social Media */}
        <Row className="text-center mt-4">
          <Col>
            <a href="#" className="text-dark mx-2 fs-5"><FaFacebookF /></a>
            <a href="#" className="text-dark mx-2 fs-5"><FaTwitter /></a>
            <a href="#" className="text-dark mx-2 fs-5"><FaInstagram /></a>
            <a href="#" className="text-dark mx-2 fs-5"><FaLinkedinIn /></a>
          </Col>
        </Row>

        <hr className="bg-secondary my-4" />

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <p style={{ fontSize: '0.85rem' }}>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
