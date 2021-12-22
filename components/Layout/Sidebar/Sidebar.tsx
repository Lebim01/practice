import styled from 'styled-components'
import { useSidemenu } from 'context/sidemenu'

import SidebarHeader from './SidebarHeader'
import SideBarProfile from './SidebarProfile'
import SidebarNavigation from './SidebarNavigation'

const Sidebar = () => {
  const { open } = useSidemenu()

  return (
    <SidebarContainer open={open}>
      <SidebarHeader />
      <SideBarProfile />
      <CustomSidebarNavigation />
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div<any>`
  background-color: var(--bs-dark-sidebar-bg);
  min-height: 100vh;
  width: ${props => props.open ? 236 : 0}px;
  transition: width 0.5s;
`

const CustomSidebarNavigation = styled(SidebarNavigation)`
  margin-top: 20%;
`

export default Sidebar