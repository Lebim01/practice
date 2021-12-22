import styled from 'styled-components'
import { InputGroup, FormControl } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
    <CustomInputGroup size="sm" className="mb-3">
      <CustomInputGroupIcon>
        <BsSearch />
      </CustomInputGroupIcon>
      <CustomFormControl aria-label="Small" placeholder="Search securities, transactions, info or help" />
    </CustomInputGroup>
  )
}

const CustomInputGroup = styled(InputGroup)`
  height: 36px;
  margin: unset !important;
`

const CustomInputGroupIcon = styled(InputGroup.Text)`
  border-top-left-radius: 20px !important;
  border-bottom-left-radius: 20px !important;
  background-color: var(--bs-dark-input-bg);
  border: unset;
`

const CustomFormControl = styled(FormControl)`
  border-top-right-radius: 20px !important;
  border-bottom-right-radius: 20px !important;
  background-color: var(--bs-dark-input-bg);
  border: unset;
  width: 300px !important;
  font-size: 12px !important;
`

export default SearchInput