import { ReactElement } from 'react'
import styled from 'styled-components'

import Body from './Body'
import Header from './Header'
import Sidebar from './Sidebar'

interface Props {
  children?: ReactElement;
}

const Layout = (props: Props) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <LayoutBodyContainer>
        <Header />
        <CustomBody>{props.children}</CustomBody>
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
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
`

const CustomBody = styled(Body)`
  flex: 1;
`

export default Layout