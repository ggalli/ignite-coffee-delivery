import { Button, Counter } from '@components'
import { CartItemInfo, CartItemWrapper } from './styles'
import { Trash } from '@phosphor-icons/react'
import coffeeImg from '../../assets/images/coffees/expresso.png'

export function CartItem() {
  return (
    <CartItemWrapper>
      <CartItemInfo>
        <img src={coffeeImg} alt="Imagem do café" />

        <div className="details">
          <p>Expresso Tradicional</p>
          <div className="actions">
            <Counter />

            <Button variant="secondary">
              <Trash size={16} />
              Remover
            </Button>
          </div>
        </div>
      </CartItemInfo>

      <p className="text-bold">R$ 9,90</p>
    </CartItemWrapper>
  )
}
