import { styled } from 'styled-components'

interface InputProps {
  stretch?: boolean
}

export const Input = styled('input').withConfig({
  shouldForwardProp: (prop) => !['stretch'].includes(prop),
})<InputProps>`
  background-color: ${({ theme }) => theme['base-200']};
  color: ${({ theme }) => theme['base-700']};
  padding: 12px;
  border-radius: 4px;
  border: ${({ theme }) => `1px solid ${theme['base-300']}`};

  font-size: 14px;
  font-weight: 400;
  line-height: 130%;

  width: ${({ stretch }) => stretch && '100%'};

  &:focus {
    border: ${({ theme }) => `1px solid ${theme['yellow-800']}`};
  }

  &::placeholder {
    color: ${({ theme }) => theme['base-600']};
  }
`
