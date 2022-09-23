import React from 'react'
import "./header.css"
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar className="header">
      <Container>
        <Navbar.Brand href="/" className="header-brand-txt">FarMagic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="header-nav-links">
            <Nav.Link href="/" className="header-txt">Home</Nav.Link>
            <Nav.Link href="/" className="header-txt">About Us</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown" className="header-txt">
              <NavDropdown.Item href="#action/3.1">Desi Ghee</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Oil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Black Rice</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
