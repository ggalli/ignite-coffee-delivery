import { ComponentProps } from 'react'
import { styled } from 'styled-components'

type ButtonProps = ComponentProps<'button'> & {
  variant: 'primary' | 'secondary'
}

export const Button = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 8.25rem;
  padding: 12px 8px;
  border-radius: 6px;
  cursor: pointer;

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return `
        background-color: ${theme['yellow-500']};
        color: ${theme.white};
        &:hover {
          background-color: ${theme['yellow-800']};
        }
      `

      case 'secondary':
        return `
        background-color: ${theme['base-300']};
        color: ${theme['base-700']};
        &:hover {
          background-color: ${theme['base-400']};
          color: ${theme['base-800']};
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

  &:hover {
    background-color: ${({ theme }) => theme['purple-500']};
  }
`
