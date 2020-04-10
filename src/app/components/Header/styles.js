import styled from 'styled-components';
import device from 'styles/device';

export const HeaderWrapper = styled.div`
    font-size: 24px;
    font-weight: bold;
    padding: 8px;
    width: 100%;

    @media ${device.tablet} {
        font-size: 36px;
    }
`;
