import { ComponentProps } from 'react'
import { styled } from 'styled-components'

type ButtonProps = ComponentProps<'button'> & {
  variant: 'primary' | 'secondary'
  stretch?: boolean
}

export const Button = styled('button').withConfig({
  shouldForwardProp: (prop) => !['stretch'].includes(prop),
})<ButtonProps>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  cursor: pointer;

  font-size: 0.875rem;
  text-transform: uppercase;

  ${({ stretch }) => stretch && 'width: 100%; padding: 12px 0'};

  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return `
        min-width: 132px;
        padding: 12px 8px;
        font-weight: 700;
        background-color: ${theme['yellow-500']};
        color: ${theme.white};
        &:hover {
          background-color: ${theme['yellow-800']};
        }
      `

      case 'secondary':
        return `
        height: 32px;
        padding: 0 8px;
        background-color: ${theme['base-300']};
        color: ${theme['base-700']};
        &:hover {
          background-color: ${theme['base-400']};
          color: ${theme['base-800']};
        }
        & > svg {
          color: ${theme['purple-500']};
        }
      `

      default:
        break
    }
  }}
`

export const IconButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['purple-800']};
  color: ${({ theme }) => theme.white};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme['purple-500']};
  }
`
