import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  :root {
    --white: #ffffff;
    --black: #000000;
    --primary-color: #213ea6;
    --secondary-color: #283259;
    --danger-color: #ff6565;
    --warning-color: #f1c40f;
    --success-color: #2ecc71;
    --container-border-width: 1px;
    --transparent-button-background: rgba(255, 255, 255, 0.05);
  }

  body {
    background-color: var(--body-background);
  }

  body,
  button,
  p,
  span {
    margin: 0;
    padding: 0;
    font-family: 'NanumSquareNeo', sans-serif;
  }

  *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--secondary-text-color); /* 스크롤바 색상 */
    border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }

  *::-webkit-scrollbar-track {
    background: #ffffff05; /*스크롤바 뒷 배경 색상*/
  }

  *::-webkit-scrollbar-corner {
    background: transparent;
  }
`;
