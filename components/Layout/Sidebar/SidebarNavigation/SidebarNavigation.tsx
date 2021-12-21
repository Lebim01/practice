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
        <SidebarItem key={path.key} path={path} />
      )}
    </SidebarNavigationContainer>
  )
}

const SidebarNavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default SidebarNavigation