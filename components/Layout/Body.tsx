import { usePath } from 'context/path'
import { ReactElement } from 'react'
import styled, { CSSProperties } from 'styled-components'
import SidebarItem from './Sidebar/SidebarNavigation/SidebarItem'

interface Props {
  className?: string;
  style?: CSSProperties;
  children?: ReactElement;
}

const Body = ({ children, ...props }: Props) => {
  const { path } = usePath()
  return (
    <BodyContainer {...props}>
      <SidebarItem path={path} sidemenu={false} />
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