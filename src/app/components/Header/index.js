import React from 'react';
import styled from 'styled-components';
import device from 'styles/device';

const HeaderStyle = styled.div`
    font-size: 24px;
    font-weight: bold;
    padding: 8px;
    width: 100%;

    @media ${device.tablet} {
        font-size: 36px;
    }
`;

const Header = props => {
    return <HeaderStyle>{props.children}</HeaderStyle>;
};

Header.displayName = 'header';
export default Header;
