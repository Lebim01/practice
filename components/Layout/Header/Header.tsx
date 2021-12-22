import { Navbar, Container, Nav } from 'react-bootstrap'
import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'
import useWindowSize, { LG, MD } from 'hooks/useWindowSize'
import ResponsiveHeader from './ResponsiveHeader/ResponsiveHeader'

const Header = () => {
  const { deviceSize } = useWindowSize()

  if(deviceSize <= MD){
    // phone header
    return <ResponsiveHeader />
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Nav className="me-auto">
          <HeaderLeft />
        </Nav>
        <Nav>
          <HeaderRight />
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header