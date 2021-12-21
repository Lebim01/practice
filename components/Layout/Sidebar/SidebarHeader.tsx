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
            <Text>mx</Text>market
          </Text>
        </CustomNarbarBrand>
      </Container>
    </CustomNavbar>
  )
}

const CustomNavbar = styled(Navbar)`
  background-color: #000000 !important;
  border-bottom: 1px solid #FFFFFF;
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

  svg {
    height: 20px;
    width: 20px;
    position: absolute;
  }
`

const Text = styled.span`
  letter-spacing: 0px;
`

export default Header