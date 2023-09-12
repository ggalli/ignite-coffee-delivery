import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
  }

  body {
    background: ${(props) => props.theme['base-50']};
    color: ${(props) => props.theme['base-700']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
  }

  section {
    padding: 88px 0;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme['base-800']}; 
  }

  h1 { 
    font-size: 3rem; 
    color: ${(props) => props.theme['base-900']}; 
    margin-bottom: 16px;
  }
  h2 { font-size: 2rem }
  h3 { font-size: 1.5rem }
  h4 { font-size: 1.25rem; font-weight: 700; }
  h5 { font-size: 1.125rem; font-weight: 700; }

  .text-lg { font-size: 1.25rem }
  .text-md { font-size: 1rem }
  .text-sm { font-size: 0.875rem }
  .text-xs { font-size: 0.75rem }

  .text-bold { font-weight: 700 }

  .img-fluid {
    width: 100%;
    height: auto;
  }
`
