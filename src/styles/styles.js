import styled from 'styled-components';
import appConfig from '../../config.json';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0005;

    .welcome {
        font-size: 1.4em;
        color: ${appConfig.theme.colors.neutral["01"]};
    }
`;

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%; 
    max-width: 700px;
    border-radius: 5px; 
    padding: 32px; 
    margin: 16px;
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
    background-color: ${appConfig.theme.colors.primary["05"]};

`
export {Container, Box};