import React from 'react'
import "./header.css"
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar className="header" collapseOnSelect expand="md">
      <Container>
        <Navbar.Brand href="/" className="header-brand-txt">Farmagic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="header-nav-links">
            <Nav.Link href="/" className="header-txt">Home</Nav.Link>
            <Nav.Link href="/" className="header-txt">About Us</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown" className="header-txt">
              <NavDropdown.Item href="/">Desi Ghee</NavDropdown.Item>
              <NavDropdown.Item href="/">Oil</NavDropdown.Item>
              <NavDropdown.Item href="/">Black Rice</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/" className="header-txt">Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
