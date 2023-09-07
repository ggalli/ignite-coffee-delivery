import { ComponentProps, PropsWithChildren } from 'react'
import { Input, Label } from './styles'

interface SelectProps extends PropsWithChildren<ComponentProps<'input'>> {
  id: string
}

export function Select({ children, ...props }: SelectProps) {
  return (
    <div>
      <Input type="radio" {...props} />
      <Label htmlFor={props.id}>{children}</Label>
    </div>
  )
}
