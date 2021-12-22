import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import styled from 'styled-components'
import { RiArrowUpDownLine } from 'react-icons/ri'

const Header = () => {
  return (
    <CustomNavbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <CustomNarbarBrand href="/">
          <Icon>
            <RiArrowUpDownLine color="black" />
          </Icon>
          <Text>
            <Text color={'#56D1A1'}>mx</Text>market
          </Text>
        </CustomNarbarBrand>
      </Container>
    </CustomNavbar>
  )
}

const CustomNavbar = styled(Navbar)`
  background-color: var(--bs-dark-sidebar-bg) !important;
  border-bottom: 1px solid var(--bs-dark-borders);
`

const CustomNarbarBrand = styled(Navbar.Brand)`
  align-items: center;
  display: flex;
  flex-direction: row;
`

const Icon = styled.div`
  width: 22px;
  height: 22px;
  background-color: #56D1A1;
  position: relative;
  margin-right: 5px;

  svg {
    height: 20px;
    width: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const Text = styled.span`
  letter-spacing: 0px;
  ${props => props.color && `color: ${props.color}`}
`

export default Header