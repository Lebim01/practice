import IPath from 'interfaces/IPath'
import styled from 'styled-components'

interface Props {
  path: IPath;
}

const SidebarItem = (props: Props) => {
  return (
    <SidebarItemContainer>
      <SidebarItemColor color={props.path.color} />
      <SidebarItemText>{props.path.title}</SidebarItemText>
    </SidebarItemContainer>
  )
}

const SidebarItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 29px;
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