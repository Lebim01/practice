import styled from 'styled-components'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <HeaderLeft />
          </Nav>
          <Nav>
            <HeaderRight />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header