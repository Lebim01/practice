import styled from 'styled-components'
import { SearchInput } from "components/UI"
import { Button } from 'react-bootstrap'
import { BiMenu } from 'react-icons/bi'
import { useSidemenu } from 'context/sidemenu'

const HeaderLeft  = () => {
  return (
    <HeaderLeftContainer>
      <ToggleSidemenuButton />
      <SearchInput />
    </HeaderLeftContainer>
  )
}

export const ToggleSidemenuButton = () => {
  const { toggle } = useSidemenu()

  return (
    <CustomButton onClick={toggle}>
      <BiMenu size={25} />
    </CustomButton>
  )
}

const HeaderLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const CustomButton = styled(Button)`
  padding: unset !important;
  background-color: unset !important;
  border: unset !important;
`

export default HeaderLeft