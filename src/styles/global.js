import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box; /* faz com que a margin e padding, todos os elementos sejam somados a largura do elemento */
  }

  html, border-style, #root {
    min-height:100%;
  }

  body{
    background: #7159c1;
    -webkit-font-smoothing: antialiased !important; /* fonte mais definidas */

  }

  body, input, button {
    color: #222;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
