import { styled } from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  gap: 32px;
`

export const OrderData = styled.div`
  width: 60%;
`

export const ShoppingCart = styled.div``

export const DeliveryAddress = styled.div`
  padding: 40px;
  border-radius: 6px;
  background: ${(props) => props.theme['base-100']};
  margin-top: 16px;

  & .title {
    color: ${(props) => props.theme['base-800']};
  }

  & > form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
  }
`

export const Payment = styled.div`
  padding: 40px;
  border-radius: 6px;
  background: ${(props) => props.theme['base-100']};
  margin-top: 12px;

  & .payments {
    display: flex;
    gap: 12px;
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 32px;
`

export const Flex = styled.div`
  display: flex;
  gap: 12px;
  align-self: stretch;
`
