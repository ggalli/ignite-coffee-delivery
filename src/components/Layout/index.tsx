import { Actions, Cart, Container, Localization, Navbar } from './styles'
import Logo from '../../assets/images/logo.png'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { PropsWithChildren } from 'react'

export function Layout({ children }: PropsWithChildren) {
  return (
    <Container>
      <Navbar>
        <img src={Logo} alt="Logo" />

        <Actions>
          <Localization>
            <MapPin size={22} weight="fill" />
            São Paulo, SP
          </Localization>

          <Cart>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </Actions>
      </Navbar>

      <main>{children}</main>
    </Container>
  )
}
