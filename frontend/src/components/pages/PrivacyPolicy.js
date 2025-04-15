import React from 'react';
import { Container } from 'react-bootstrap';

const PrivacyPolicy = () => {
  return (
    <Container className="my-5">
      <h2>Privacy Policy</h2>
      <p>Last updated: April 15, 2025</p>

      <p>
        This Privacy Policy explains how we collect, use, and protect your personal information when you visit or make a purchase from our site.
      </p>

      <h5>1. Information We Collect</h5>
      <p>
        We collect personal details like your name, email address, shipping address, and payment information when you use our services.
      </p>

      <h5>2. How We Use Your Information</h5>
      <p>
        We use your information to process orders, communicate with you, provide customer support, and improve our services.
      </p>

      <h5>3. Sharing Your Information</h5>
      <p>
        We do not sell or rent your personal information. We only share data with third parties necessary to fulfill your orders (like payment processors).
      </p>

      <h5>4. Cookies</h5>
      <p>
        We use cookies to enhance user experience. You can disable cookies in your browser settings if you prefer.
      </p>

      <h5>5. Security</h5>
      <p>
        We implement strong security measures to protect your information, but no method is 100% secure.
      </p>

      <h5>6. Your Rights</h5>
      <p>
        You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
      </p>
    </Container>
  );
};

export default PrivacyPolicy;
