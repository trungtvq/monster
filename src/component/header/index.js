import React, { Component, useState } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GetTheme } from '../../assets/theme'
import { faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faThemeisle } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter as Router } from 'react-router-dom';
import { Button, NavDropdown, Nav, Navbar, Form, FormControl, Modal, Spinner,Image  } from 'react-bootstrap';
import logo from './logo500300.png';
import LoginComponent from '../login'
import RegisterComponent from "../register";
export default function Header() {
  const [loginModal, setShowLoginModal] = useState(false);
  const [registerModal, setShowRegisterModal] = useState(false);
  const [themeModal, setShowThemeModal] = useState(false);

  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleShowThemeModal = () => setShowThemeModal(true);
  const handleCloseRegisterModal = () => setShowRegisterModal(false);
  const handleShowRegisterModal = () => setShowRegisterModal(true);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
      <Image src={logo} width={80}
    height={48} fluid />
       
      Anything
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#pricing"></Nav.Link>
          <Nav.Link href="#features">Donation</Nav.Link>
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
          <Button variant="link" style={{ color: GetTheme().c2 }} onClick={handleShowLoginModal}>
            <FontAwesomeIcon icon={faSignInAlt} /> Login
</Button>
          <Modal show={loginModal} onHide={handleCloseLoginModal}>
            <LoginComponent closer={handleCloseLoginModal} registerOpenHandler={handleShowRegisterModal} />

          </Modal>

          <Button variant="link" style={{ color: GetTheme().c1 }} onClick={handleShowRegisterModal}>
            <FontAwesomeIcon icon={faUserPlus} /> Register
        </Button>
          <Modal show={registerModal} onHide={handleCloseRegisterModal}>
            <RegisterComponent closer={handleCloseRegisterModal} loginOpenHandler={handleShowLoginModal} />
          </Modal>

          <Button variant="link" style={{ color: GetTheme().c2 }} onClick={handleShowLoginModal}>
            <FontAwesomeIcon icon={faThemeisle} /> Theme
</Button>
          <Button variant="link" style={{ color: GetTheme().c2 }} onClick={handleShowLoginModal}>
            <Spinner animation="border" variant="primary" />
          </Button>


        </Nav>


      </Navbar.Collapse>
    </Navbar>
  );

}