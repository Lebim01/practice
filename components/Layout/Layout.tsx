import styled from 'styled-components'

import Body from './Body'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <LayoutBodyContainer>
        <Header />
        <CustomBody />
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

const CustomBody = styled(Body)`
  flex: 1;
`

export default Layout