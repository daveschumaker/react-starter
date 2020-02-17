import React from 'react';
import GlobalStyle from 'styles/GlobalStyle';
import Header from 'app/components/header';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Header>Hello, World!</Header>
        </>
    );
};

App.displayName = 'App';
export default App;
