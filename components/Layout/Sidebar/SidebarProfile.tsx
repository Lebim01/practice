import styled from 'styled-components'
import Image from 'react-bootstrap/Image'
import { useAuth } from 'context/auth'

const SidebarProfile = () => {
  const { user } = useAuth()

  return (
    <SidebarProfileContainer>
      <SidebarProfileImage src={user.photo} />
      <SidebarProfileName>{user.name}</SidebarProfileName>
      <SidebarProfileEmail>{user.email}</SidebarProfileEmail>
    </SidebarProfileContainer>
  )
}

const SidebarProfileContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid var(--bs-dark-font-color);

  span {
    color: var(--bs-dark-font-color);
  }
`

const SidebarProfileImage = styled(Image)`
  width: 68px;
  height: 68px;
`

const SidebarProfileName = styled.span`
  font-size: 14px;
  font-weight: bold;
  margin-top: 16px;
`

const SidebarProfileEmail = styled.span`
  font-size: 14px;
`

export default SidebarProfile