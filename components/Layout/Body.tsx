import { usePath } from 'context/path'
import useWindowSize, { MD } from 'hooks/useWindowSize'
import { ReactElement, useMemo } from 'react'
import styled, { CSSProperties } from 'styled-components'
import SidebarItem from './Sidebar/SidebarNavigation/SidebarItem'

interface Props {
  className?: string;
  style?: CSSProperties;
  children?: ReactElement;
}

const Body = ({ children, ...props }: Props) => {
  const { path } = usePath()
  const { deviceSize } = useWindowSize()
  const isMobile = useMemo(() => deviceSize <= MD, [deviceSize])

  return (
    <BodyContainer {...props}>
      {!isMobile && <SidebarItem path={path} sidemenu={false} />}
      <br />
      {children}
    </BodyContainer>
  )

}

const BodyContainer = styled.div`
  background-color: var(--bs-dark-bg);
  padding: 25px 30px;
`

export default Body