import { Layout } from '@components'
import { Benefits, Hero } from './styles'
import heroImg from '../../assets/images/hero.png'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

export function Home() {
  const theme = useTheme()

  return (
    <Layout>
      <Hero>
        <div className="left">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p className="text-lg">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <Benefits>
            <div className="item">
              <div className="icon" style={{ background: theme['yellow-800'] }}>
                <ShoppingCart size={16} weight="fill" />
              </div>
              Compra simples e segura
            </div>
            <div className="item">
              <div className="icon" style={{ background: theme['base-700'] }}>
                <Package size={16} weight="fill" />
              </div>
              Embalagem mantém o café intacto
            </div>
            <div className="item">
              <div className="icon" style={{ background: theme['yellow-500'] }}>
                <Timer size={16} weight="fill" />
              </div>
              Entrega rápida e rastreada
            </div>
            <div className="item">
              <div className="icon" style={{ background: theme['purple-500'] }}>
                <Coffee size={16} weight="fill" />
              </div>
              O café chega fresquinho até você
            </div>
          </Benefits>
        </div>

        <div className="right">
          <img
            className="img-fluid"
            src={heroImg}
            style={{ maxWidth: 476 }}
            alt="Imagem de um copo de café com a embalagem da coffee delivery"
          />
        </div>
      </Hero>
    </Layout>
  )
}
