import { usePath } from 'context/path'
import IPath from 'interfaces/IPath'
import styled from 'styled-components'
import Link from 'next/Link'

interface Props {
  path: IPath;
  sidemenu?: boolean;
}

const SidebarItem = ({ sidemenu = true, ...props }: Props) => {
  const { path: currentPath } = usePath()

  if(!sidemenu){
    return (
      <SidebarItemContainer>
        <SidebarItemColor color={props.path.color} />
        <SidebarItemText>{props.path.title}</SidebarItemText>
      </SidebarItemContainer>
    )
  }

  return (
    <Link href={props.path.url} shallow>
      <SidebarItemContainer active={props.path.url === currentPath.url} sidemenu={sidemenu}>
        <SidebarItemColor color={props.path.color} />
        <SidebarItemText>{props.path.title}</SidebarItemText>
      </SidebarItemContainer>
    </Link>
  )
}

const SidebarItemContainer = styled.div<any>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 29px;
  padding-top: 5px;
  padding-bottom: 5px;
  ${props => props.active && `
    background-color: #283141;
  `}
  ${props => props.sidemenu && `
    cursor: pointer;
  `}
`

const SidebarItemColor = styled.div`
  background-color: ${props => props.color};
  border-radius: 50%;
  height: 16px;
  width: 16px;
`

const SidebarItemText = styled.div`
  margin-left: 7px;
  color: #FFFFFFD9;
`

export default SidebarItem