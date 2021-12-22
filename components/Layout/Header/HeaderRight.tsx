import styled from 'styled-components'
import { MdSettings, MdNotifications } from 'react-icons/md'
import { useAuth } from 'context/auth'
import { Dropdown, Image } from 'react-bootstrap'

const HeaderRight  = () => {  
  const {user} = useAuth()
  return (
    <HeaderRightContainer>
      <div className="badge-container">
        <MdSettings size={20} />
      </div>
      <div className="badge-container">
        <MdNotifications size={20} />
        <span className="badge-notify">5</span>
      </div>
      <Separator />
      <Dropdown align='end'>
        <CustomDropdownToggle id="dropdown-button-dark-example1" variant="secondary">
          {user.short_name} 
        </CustomDropdownToggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <ProfileImage src={user.photo} />
    </HeaderRightContainer>
  )
}

const Separator = styled.div`
  height: 100%;
  width: 1px;
  background-color: var(--bs-dark-borders);
`

const HeaderRightContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 15px;
`

const CustomDropdownToggle = styled(Dropdown.Toggle)`
  background-color: unset !important;
  border: unset !important;
`

const ProfileImage = styled(Image)`
  width: 39px;
  height: 39px;
`

export default HeaderRight