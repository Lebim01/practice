import { useState } from 'react'
import styled from 'styled-components'

import Body from './Body'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(true)

  return (
    <LayoutContainer>
      <Sidebar />
      <LayoutBodyContainer>
        <Header />
        <Body />
      </LayoutBodyContainer>
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const LayoutBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export default Layout