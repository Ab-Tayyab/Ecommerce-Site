import React from "react";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import logo from "./logo.png";
import CartDrawer from "../Drawer/DrawerCart";
import { Link } from "react-router-dom";

const Navebar = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // var id = userInfo._id
  // console.log(id,"ma b hun")
  const logoutHandler = () => {
    dispatch(logout());
  };

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <header>
      <Navbar bg="bright" variant="white" expand="lg">
        <Container>
          <LinkContainer
            to="/"
            style={{
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <img src={logo} alt="Logo" width="150px" />
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  {userInfo.isAdmin ? (

                    <LinkContainer to="/dashboard">
                      <NavDropdown.Item>Dashboard</NavDropdown.Item>
                    </LinkContainer>
                  ) : (
                    <LinkContainer
                      to={`/profile/${userInfo._id}`}
                    >
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                  )}
                  <LinkContainer to="/" style={{
                    textDecoration: "none"
                  }}>
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user" style={{
                      color: "#b59677",
                      fontSize: "30px"
                    }}></i>
                  </Nav.Link>
                </LinkContainer>
              )}
              <CartDrawer />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navebar;
