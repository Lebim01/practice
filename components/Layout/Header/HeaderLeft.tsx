import styled from 'styled-components'
import { SearchInput } from "components/UI"
import { Button } from 'react-bootstrap'
import { BiMenu } from 'react-icons/bi'
import { useSidemenu } from 'context/sidemenu'

const HeaderLeft  = () => {
  const { toggle } = useSidemenu()
  
  return (
    <HeaderLeftContainer>
      <CustomButton onClick={toggle}>
        <BiMenu size={25} />
      </CustomButton>
      <SearchInput />
    </HeaderLeftContainer>
  )
}

const HeaderLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const CustomButton = styled(Button)`
  padding: unset !important;
  background-color: unset !important;
  border: unset !important;
`

export default HeaderLeft