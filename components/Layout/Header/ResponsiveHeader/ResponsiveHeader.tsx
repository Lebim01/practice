import styled from 'styled-components'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { ToggleSidemenuButton } from 'components/Layout/Header/HeaderLeft'
import SidebarItem from 'components/Layout/Sidebar/SidebarNavigation/SidebarItem'
import { usePath } from 'context/path'
import { BsSearch } from 'react-icons/bs'

const ResponsiveHeader = () => {
  const { path: currentPath } = usePath()
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <ToggleSidemenuButton />
        <SidebarItem path={currentPath} sidemenu={false} />
        <BsSearch />
      </Container>
    </Navbar>
  )
}

const CustomContainer = styled(Container)`
  display: flex;
  flex-direction: row;
`

export default ResponsiveHeader