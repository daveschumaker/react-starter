import React from 'react';
import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from 'styles/Theme';
import GlobalStyle from 'styles/GlobalStyle';
import Header from 'app/components/header';
import useDarkMode from 'app/hooks/useDarkMode';

const App = () => {
    const darkMode = useDarkMode();

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <Header>Hello, World!</Header>
        </ThemeProvider>
    );
};

App.displayName = 'App';
export default App;
