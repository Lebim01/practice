import styled, { CSSProperties } from 'styled-components'
import { paths } from 'routes'
import SidebarItem from './SidebarItem'

interface Props {
  className?: string;
  style?: CSSProperties;
}

const SidebarNavigation = (props: Props) => {
  return (
    <SidebarNavigationContainer {...props}>
      {paths.map((path) => 
        <CustomSidebarItem key={path.url} path={path} />
      )}
    </SidebarNavigationContainer>
  )
}

const SidebarNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const CustomSidebarItem = styled(SidebarItem)`
  padding-left: 25px;
`

export default SidebarNavigation