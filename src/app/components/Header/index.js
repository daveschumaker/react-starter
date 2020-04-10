import React from 'react';
import * as S from './styles';

const Header = props => {
    return <S.HeaderWrapper>{props.children}</S.HeaderWrapper>;
};

Header.displayName = 'header';
export default Header;
