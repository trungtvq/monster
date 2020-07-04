import React, { Component, useState } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, NavDropdown, Nav, Navbar, Form, FormControl, Modal } from 'react-bootstrap';
import logo from './bb.jpg';
import LoginComponent from '../login'
import RegisterComponent from "../register";
export default function Header() {
  const [loginModal, setShowLoginModal] = useState(false);
  const [registerModal, setShowRegisterModal] = useState(false);

  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowLoginModal = () => setShowLoginModal(true);

  const handleCloseRegisterModal = () => setShowRegisterModal(false);
  const handleShowRegisterModal = () => setShowRegisterModal(true);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#pricing"></Nav.Link>
          <Nav.Link href="#features">Donation</Nav.Link>
          <Nav.Link href="#pricing">Change theme</Nav.Link>
          <NavDropdown title="Price" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Free</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Free-Ad</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Not-Free</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">All</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <Nav>
          <Form inline>
            <Button variant="outline-primary" onClick={handleShowLoginModal}>Login</Button>
            <Modal show={loginModal} onHide={handleCloseLoginModal}>
            <LoginComponent closer={handleCloseLoginModal} registerOpenHandler={handleShowRegisterModal}/>
             
            </Modal>
          </Form>
          <Form inline>
            <Button variant="outline-primary" onClick={handleShowRegisterModal}>Register</Button>
            <Modal show={registerModal} onHide={handleCloseRegisterModal}>
              <RegisterComponent closer={handleCloseRegisterModal} loginOpenHandler={handleShowLoginModal}/>
            </Modal>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

}