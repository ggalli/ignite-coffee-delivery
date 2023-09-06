import { IconButton } from '@components'
import { styled } from 'styled-components'

export const Container = styled.div`
  max-width: calc(1120px + 48px);
  margin: auto;
  padding: 0 24px;
`

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0;
`

export const Actions = styled.div`
  display: flex;
  gap: 12px;
`

export const Localization = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 6px;
  background: ${({ theme }) => theme['purple-100']};

  font-size: 14px;
  line-height: 130%;
  color: ${({ theme }) => theme['purple-800']};

  & > svg {
    color: ${({ theme }) => theme['purple-500']};
  }
`

export const Cart = styled(IconButton)`
  background: ${({ theme }) => theme['yellow-100']};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme['yellow-100']};
  }

  & > svg {
    color: ${({ theme }) => theme['yellow-800']};
  }
`
