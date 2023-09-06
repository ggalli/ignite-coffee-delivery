import { Minus, Plus } from '@phosphor-icons/react'
import { CounterButton, CounterWrapper } from './styles'

export function Counter() {
  return (
    <CounterWrapper>
      <CounterButton>
        <Minus size={14} weight="bold" />
      </CounterButton>

      <span>1</span>

      <CounterButton>
        <Plus size={14} weight="bold" />
      </CounterButton>
    </CounterWrapper>
  )
}
