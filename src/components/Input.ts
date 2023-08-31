import { styled } from 'styled-components'

export const Input = styled.input`
  background-color: ${({ theme }) => theme['base-200']};
  color: ${({ theme }) => theme['base-700']};
  padding: 12px;
  border-radius: 4px;
  border: ${({ theme }) => `1px solid ${theme['base-300']}`};

  font-size: 14px;
  font-weight: 400;
  line-height: 130%;

  &:focus {
    border: ${({ theme }) => `1px solid ${theme['yellow-800']}`};
  }

  &::placeholder {
    color: ${({ theme }) => theme['base-600']};
  }
`
