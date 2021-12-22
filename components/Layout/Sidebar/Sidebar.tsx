import SidebarBody from './SidebarBody'
import SidebarOffcanvas from './SidebarOffcanvas'
import useWindowSize, { LG } from 'hooks/useWindowSize'

const Sidebar = () => {
  const { deviceSize } = useWindowSize()

  if(deviceSize <= LG){
    // offcanvas
    return <SidebarOffcanvas />
  }

  return (
    <SidebarBody />
  )
}

export default Sidebar