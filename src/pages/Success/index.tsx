import { Card, Layout } from '@components'
import { SuccessContainer } from './styles'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import motoboyImg from '../../assets/images/motoboy.png'

export function SuccessPage() {
  const theme = useTheme()

  return (
    <Layout>
      <SuccessContainer>
        <div className="message">
          <h2>Uhu! Pedido confirmado</h2>
          <p className="text-lg">
            Agora é só aguardar que logo o café chegará até você
          </p>

          <Card>
            <div className="local">
              <div className="icon" style={{ background: theme['purple-500'] }}>
                <MapPin size={16} weight="fill" />
              </div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            </div>

            <div className="time">
              <div className="icon" style={{ background: theme['yellow-500'] }}>
                <Timer size={16} weight="fill" />
              </div>
              <p>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </p>
            </div>

            <div className="payment">
              <div className="icon" style={{ background: theme['yellow-800'] }}>
                <CurrencyDollar size={16} />
              </div>
              <p>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </Card>
        </div>

        <img src={motoboyImg} alt="Ilustração do motoboy entregando o pedido" />
      </SuccessContainer>
    </Layout>
  )
}
