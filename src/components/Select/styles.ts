import { styled } from 'styled-components'

export const Label = styled.label`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  background: ${(props) => props.theme['base-300']};

  font-size: 0.875rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-400']};
  }

  & > svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const Input = styled.input`
  display: none;

  &:checked + ${Label} {
    border: 1px solid ${(props) => props.theme['purple-500']};
    background: ${(props) => props.theme['purple-100']};
  }
`
