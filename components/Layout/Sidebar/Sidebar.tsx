import styled from 'styled-components'

import SidebarHeader from './SidebarHeader'
import SideBarProfile from './SidebarProfile'
import SidebarNavigation from './SidebarNavigation'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader />
      <SideBarProfile />
      <CustomSidebarNavigation />
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  background-color: #000000;
  height: 100vh;
  width: 236px;
`

const CustomSidebarNavigation = styled(SidebarNavigation)`
  margin-top: 20%;
`

export default Sidebar