import { styled } from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  padding: 24px;
  padding-top: 0;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-100']};
  text-align: center;

  & img {
    position: relative;
    top: -20px;
    width: 120px;
    height: 120px;
    filter: drop-shadow(0px 5px 10px ${(props) => props.theme['base-400']});
  }

  & h4 {
    margin-bottom: 8px;
  }

  & .tags {
    margin-bottom: 16px;
  }
`
export const Tag = styled.span`
  padding: 4px 8px;
  border-radius: 100px;
  background: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-800']};

  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
`
export const Buy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .price {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  & .actions {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`
