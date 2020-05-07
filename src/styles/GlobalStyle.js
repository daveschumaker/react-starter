import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        box-sizing: border-box;
        min-height: 100% !important;
        height: 100%;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        height: 100%;
        margin: 0;
        padding: 0;
        position: relative;
        text-rendering: optimizeLegibility;
    }
`;

export default GlobalStyle;
