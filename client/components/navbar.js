import React from 'react'
import {connect} from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Coffee from './Coffee'

export function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" id="navbar" bg="dark" variant="dark">
      <Navbar.Brand href="/" style={{paddingTop: 0, paddingBottom: 0}}>
        <img
          src="/SiqBeets_Face.png"
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt="Siq Beets logo"
        />
        <img
          src="/SiqBeets_Text_S.png"
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt="Siq Beets Text logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/beetmaker">The Playground</Nav.Link>
          <Nav.Link href="/beetmaker2">Beet Maker</Nav.Link>

          {/* <Nav.Link href="/beetdropper">Beet Dropper</Nav.Link> */}
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        <Nav>
          {/* <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link> */}
          <Coffee />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default connect()(Navbar)
