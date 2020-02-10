import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        min-height: 100% !important;
        height: 100%;
    }

    body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        background-color: white;
        box-sizing: border-box;
        color: black;
        height: 100%;
        margin: 0;
        padding: 0;
        position: relative;
        text-rendering: optimizeLegibility;
    }
`;

export default GlobalStyle;
