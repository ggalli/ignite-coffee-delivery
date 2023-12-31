import {
  Button,
  Card,
  CartItem,
  Divider,
  Input,
  Layout,
  Select,
} from '@components'
import {
  CardHeader,
  CheckoutContainer,
  DeliveryAddress,
  Flex,
  OrderData,
  Payment,
  ShoppingCart,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

export function Checkout() {
  const theme = useTheme()

  return (
    <Layout>
      <CheckoutContainer>
        <OrderData>
          <h5>Complete seu pedido</h5>

          <DeliveryAddress>
            <CardHeader>
              <MapPinLine size={22} color={theme['yellow-800']} />
              <div>
                <p className="title">Endereço de Entrega</p>
                <p className="text-sm">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </CardHeader>

            <form>
              <Input name="cep" placeholder="CEP" />
              <Input name="street" placeholder="Rua" stretch />
              <Flex>
                <Input name="number" placeholder="Número" />
                <Input name="complement" placeholder="Complemento" stretch />
              </Flex>
              <Flex>
                <Input name="district" placeholder="Bairro" />
                <Input name="city" placeholder="Cidade" stretch />
                <Input name="state" placeholder="UF" size={4} />
              </Flex>
            </form>
          </DeliveryAddress>

          <Payment>
            <CardHeader>
              <CurrencyDollar size={22} color={theme['purple-500']} />
              <div>
                <p className="title">Pagamento</p>
                <p className="text-sm">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </CardHeader>

            <div className="payments">
              <Select id="credit-card" name="payment">
                <CreditCard size={16} />
                Cartão de crédito
              </Select>
              <Select id="debit-card" name="payment">
                <Bank size={16} />
                cartão de débito
              </Select>
              <Select id="money" name="payment">
                <Money size={16} />
                dinheiro
              </Select>
            </div>
          </Payment>
        </OrderData>

        <ShoppingCart>
          <h5>Cafés selecionados</h5>

          <Card>
            <CartItem />
            <Divider />
            <CartItem />
            <Divider />

            <div className="info">
              <div>
                <p className="text-sm">Total de itens</p>
                <p>R$ 29,70</p>
              </div>

              <div>
                <p className="text-sm">Entrega</p>
                <p>R$ 3,50</p>
              </div>

              <div className="text-lg text-bold">
                <p>Total</p>
                <p>R$ 3,50</p>
              </div>
            </div>

            <Button variant="primary" stretch>
              confirmar pedido
            </Button>
          </Card>
        </ShoppingCart>
      </CheckoutContainer>
    </Layout>
  )
}
