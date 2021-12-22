import styled from 'styled-components'
import { useSidemenu } from 'context/sidemenu'
import { Offcanvas } from 'react-bootstrap'
import SidebarBody from './SidebarBody'

const SidebarOffcanvas = () => {
  const { open, setOpen } = useSidemenu()

  return (
    <CustomOffcanvas
      placement="start"
      show={open} 
      onHide={() => setOpen(false)}
    >
      <SidebarBody />
    </CustomOffcanvas>
  )
}

const CustomOffcanvas = styled(Offcanvas)`
  width: unset !important;
`

export default SidebarOffcanvas