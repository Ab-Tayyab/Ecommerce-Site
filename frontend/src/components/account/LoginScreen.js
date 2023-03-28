import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Form, Col, Row, Button } from "react-bootstrap";
import Message from "../message/Message";
import Loader from "../loader/Loader";
import { login } from "../../actions/userActions";
import FormContainer from "./FormContainer";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const location = useLocation();
  const navigate = useNavigate();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="Denger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>Password Address</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" style={{
          background: "#b59677",
          width: "100%",
          border: "none",
          marginTop: "10px"
        }}>
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New Cusomer? {""}
          <Link to={redirect ? `/signup?redirect=${redirect}` : "/signup"} style={{
            color: "#b59677",
            textDecoration: "none",
          }}>
            Create Your Account
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
