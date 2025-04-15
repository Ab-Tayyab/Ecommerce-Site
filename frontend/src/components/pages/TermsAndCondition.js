import React from 'react';
import { Container } from 'react-bootstrap';

const TermsAndConditions = () => {
  return (
    <Container className="my-5">
      <h2>Terms and Conditions</h2>
      <p>Last updated: April 15, 2025</p>

      <p>
        By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.
      </p>

      <h5>1. Use of Site</h5>
      <p>
        You agree to use this site for lawful purposes only and in a way that does not infringe the rights of others or restrict their use of the site.
      </p>

      <h5>2. Account Responsibility</h5>
      <p>
        You are responsible for maintaining the confidentiality of your account and password and for all activities under your account.
      </p>

      <h5>3. Product Information</h5>
      <p>
        We strive to ensure that all product descriptions and prices are accurate, but errors may occur. We reserve the right to correct such errors.
      </p>

      <h5>4. Limitation of Liability</h5>
      <p>
        We are not liable for any direct or indirect loss or damage arising from the use of this site or from the purchase of products through it.
      </p>

      <h5>5. Changes to Terms</h5>
      <p>
        We reserve the right to modify these terms at any time. Continued use of the site after changes means you accept the new terms.
      </p>
    </Container>
  );
};

export default TermsAndConditions;
