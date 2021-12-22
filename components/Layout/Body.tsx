import styled, { CSSProperties } from 'styled-components'

interface Props {
  className?: string;
  style?: CSSProperties;
}

const Body = (props: Props) => {
  return (
    <BodyContainer {...props}>
      Body
    </BodyContainer>
  )

}

const BodyContainer = styled.div`
  background-color: var(--bs-dark-bg);
`

export default Body