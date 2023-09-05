import { styled } from 'styled-components'

export const Hero = styled.section`
  display: flex;
  gap: 32px;

  & > .left {
  }

  & > .right {
    flex-shrink: 0;
  }
`

export const Benefits = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 24px;
  margin-top: 64px;

  .item {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .icon {
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 9999px;

    & > svg {
      color: #fff;
    }
  }
`

export const CoffeesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  margin-top: 56px;
`
