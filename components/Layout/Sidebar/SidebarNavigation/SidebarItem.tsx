import { usePath } from 'context/path'
import IPath from 'interfaces/IPath'
import styled from 'styled-components'
import Link from 'next/Link'
import clsx from 'clsx';

interface Props {
  path: IPath;
  sidemenu?: boolean;
  className?: string;
}

const SidebarItem = ({ sidemenu = true, ...props }: Props) => {
  const { path: currentPath } = usePath()

  if(!sidemenu){
    return (
      <SidebarItemContainer className={props.className}>
        <SidebarItemColor color={props.path.color} />
        <SidebarItemText>{props.path.title}</SidebarItemText>
      </SidebarItemContainer>
    )
  }

  return (
    <Link href={props.path.url} shallow>
      <SidebarItemContainer active={props.path.url === currentPath.url} sidemenu={sidemenu} className={clsx("route-link", props.className)}>
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

const SidebarItemText = styled.span`
  margin-left: 7px;
  color: #FFFFFFD9;
`

export default SidebarItem