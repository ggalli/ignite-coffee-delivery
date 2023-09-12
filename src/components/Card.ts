import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  border-radius: 6px 44px;
  background: ${(props) => props.theme['base-100']};
`
