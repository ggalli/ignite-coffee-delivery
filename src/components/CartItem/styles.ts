import styled from 'styled-components'

export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 368px;
  padding: 8px 4px;
  background: ${(props) => props.theme['base-100']};
`

export const CartItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & > img {
    width: 64px;
    height: 64px;
  }

  & .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  & .actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`
