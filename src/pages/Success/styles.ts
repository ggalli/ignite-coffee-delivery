import { Card } from '@components'
import { styled } from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  & > .message {
    width: 50%;
  }

  & h2 {
    color: ${(props) => props.theme['yellow-800']};
    margin-bottom: 4px;
  }

  ${Card} {
    gap: 32px;
    margin-top: 40px;

    background:
      linear-gradient(white, white) padding-box,
      ${({ theme }) =>
        `linear-gradient(to bottom right, ${theme['yellow-500']}, ${theme['purple-500']}) border-box;`};
    border: 1px solid transparent;
  }

  & .local,
  .time,
  .payment {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  & .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border-radius: 9999px;

    & > svg {
      color: #fff;
    }
  }
`
