import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../actions/userActions';
import { Form, Button, Alert } from 'react-bootstrap';
import { Col, Row } from "react-bootstrap";
import FormContainer from './FormContainer';
import { useLocation, useNavigate, Link } from "react-router-dom";


const SignupScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userRegister = useSelector(state => state.userSignup);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      alert('Account created successfully!');
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      dispatch(signUp(name, email, password));
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <FormContainer>
      <h1>Create account</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {loading && <p>Loading...</p>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </Form.Group>
        <Button type="submit" style={{
          background: "#b59677",
          width: "100%",
          border: "none",
          marginTop: "10px"
        }}>Register</Button>
      </Form>
      <Row className="py-3">
        <Col>
          Already have a account? {""}
          <Link to={redirect ? `/Login?redirect=${redirect}` : "/Login"} style={{
            color: "#b59677",
            textDecoration: "none",
          }}>
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default SignupScreen;
