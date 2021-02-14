import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-image: linear-gradient(-45deg, #ff1c1c, #ff5656);
    width: 100%;
    height: 100vh;
  }

  button {
    border: none;
    background: transparent;
  }

  #root {
    width: 100%;
    height: 100vh;
  }

  main {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
