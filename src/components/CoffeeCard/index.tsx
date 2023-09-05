import { Buy, CardWrapper, Tag } from './styles'
import coffeeImg from '../../assets/images/Expresso.png'

export function CoffeeCard() {
  return (
    <CardWrapper>
      <img src={coffeeImg} alt="" />

      <div className="tags">
        <Tag>Tradicional</Tag>
      </div>

      <h4>Expresso Tradicional</h4>
      <p className="text-sm">
        O tradicional café feito com água quente e grãos moídos
      </p>

      <Buy>
        <div className="price">
          <span className="text-sm">R$</span>
          <h3>9,90</h3>
        </div>

        <div className="actions"></div>
      </Buy>
    </CardWrapper>
  )
}
