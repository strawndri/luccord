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
    bottom: 24px;
    left: 10px;
    width: 20em;
    padding: 1em;
    z-index: 1;
    border-radius: 10px 10px 10px 0;
    box-shadow: 1px 2px 16px 1px rgba(0, 0, 0, 0.24);
    background-color: ${appConfig.theme.colors.primary['01']};

    .header {
        display: flex;
        height: 8em;
        flex-direction: column;
        color: ${appConfig.theme.colors.neutral['05']};
        border-bottom: 1px solid black;
    }

    .header__user-image {
        width: 5em;
        border-radius: 50%;
        border: 1px solid #f9f9f9;
    }

    .header__username {
        margin: .5em 0;
    }

    .user__details {
        display: flex;
        flex-direction: column;

        font-weight: 400;
        font-size: .9em;
        margin: .5em 0 .2em 0;
        color: ${appConfig.theme.colors.neutral['05']};
    }

    .user__details ul {
        display: flex;
        justify-content: center;
    }

    .user__details li {
        padding: .2em .8em;
        margin: 1em 1em 0 .5em;
        color: ${appConfig.theme.colors.neutral['02']};
        border-radius: 10px;
        background-color: ${appConfig.theme.colors.primary['02']};
    }
`

export {Container, Card};