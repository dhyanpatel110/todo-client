/** @format */

import React from 'react';
import NavLinks from './NavLinks';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from './../../atoms/Button';
import './Navbar.css';

const Header = () => {
  return (
    <Navbar className="todo-app-navbar" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="logo"
            alt="image"
            src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6336fc55cb300f0d11348305_checkmate-p-500.png"
            data-src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6336fc55cb300f0d11348305_checkmate-p-500.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <NavLinks />
      </Container>
    </Navbar>
  );
};

export default Header;
