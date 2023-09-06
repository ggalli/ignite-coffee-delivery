import { styled } from 'styled-components'

export const CounterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: ${(props) => props.theme['base-300']};
  overflow: hidden;
`

export const CounterButton = styled.button`
  all: unset;
  height: 38px;
  padding: 0 8px;
  color: ${(props) => props.theme['purple-500']};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-400']};
  }
`
