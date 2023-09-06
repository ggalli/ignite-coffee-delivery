import { Buy, CardWrapper, Tag } from './styles'
import { Counter, IconButton } from '@components'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { Coffee } from '../../@types/coffee'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { description, image, name, price, tags } = coffee
  return (
    <CardWrapper>
      <img src={image} alt={`Imagem ${name}`} />

      <div className="tags">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <h4>{name}</h4>
      <p className="text-sm">{description}</p>

      <Buy>
        <div className="price">
          <span className="text-sm">R$</span>
          <h3>{price}</h3>
        </div>

        <div className="actions">
          <Counter />

          <IconButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </IconButton>
        </div>
      </Buy>
    </CardWrapper>
  )
}
