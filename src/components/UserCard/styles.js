import styled from 'styled-components';
import appConfig from '../../../config.json';

const Container = styled.div`

    display: flex;  
    position: relative; 
    margin-right: .8em;


    .user-image {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 8px;
    }

    .user-from {
        color: ${appConfig.theme.colors.neutral['01']};
        font-size: .9em;
        font-weight: 400;
    }

    &:hover {
        cursor: pointer;
    }

`

const Card = styled.div`

    position: absolute;
    bottom: ${props => props.bottom - 400}px;
    left: 10px;
    width: 18em;
    padding: 1.5em 1em;
    z-index: 1;
    border-radius: 10px;
    box-shadow: 1px 2px 16px 1px rgba(0, 0, 0, 0.24);
    background-color: ${appConfig.theme.colors.primary['01']};

    transform: translate(62%, 50%);

    .header {
        display: flex;
        height: 9em;
        flex-direction: column;
        color: ${appConfig.theme.colors.neutral['05']};
        border-bottom: 1px solid black;
    }

    .header__user-image {
        width: 6em;
        border-radius: 50%;
        border: 1px solid #f9f9f9;
        margin: .2em;
    }

    .user__details {
        display: flex;
        flex-direction: column;

        font-weight: 400;
        font-size: .9em;
        margin: 1em 0 .2em 0;
        color: ${appConfig.theme.colors.neutral['05']};
    }

    .user__details ul {
        display: flex;
        justify-content: center;
    }

    .user__details li {
        padding: .2em .8em;
        margin: 1.5em 1em 0 .5em;
        font-size: 0.8em;
        color: ${appConfig.theme.colors.neutral['02']};
        border-radius: 10px;
        background-color: ${appConfig.theme.colors.primary['02']};
    }
`

export {Container, Card};