import styled from 'styled-components';
import appConfig from '../../config.json';

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%; 
    max-width: 700px;
    border-radius: 5px; 
    padding: 2em 2em ; 
    margin: 16px;
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
    background-color: ${appConfig.theme.colors.primary["05"]};

    h1{
        font-size: 1.5em;
        color: ${appConfig.theme.colors.neutral["01"]};
    }

    h2 {
        font-size: 1em;
        font-weight: 100;
        color: ${appConfig.theme.colors.neutral["02"]}
    }

    .photoArea {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 200px;
        padding: 16px;
        background-color: ${appConfig.theme.colors.primary["03"]};
        border-radius: 5px;
        min-height: 240px;
    }

    .icon {
            border-radius: 50%;
            margin-bottom: 16px;
            width: 10em;
        }

    .userInfo {
        margin-bottom: .5em;
        font-size: .8em;
        font-weight: 100;
        color: ${appConfig.theme.colors.neutral["01"]};
        background-color: ${appConfig.theme.colors.primary["01"]};
        padding: 3px 10px;
        border-radius: 1000px;
    }
`

const Form = styled.div`

    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;

    input {
        margin: 2em 0 .8em 0;
        padding: .5em;
        border-radius: 2px;
        width: 20em;
        color: ${appConfig.theme.colors.neutral["01"]};
        background-color: ${appConfig.theme.colors.primary["03"]};
    }

    input:focus {
        outline: none;
    }

    button {
        width: 20em;
        color: ${appConfig.theme.colors.neutral['01']};
        transition: .5s;
    }

    button:disabled {
        opacity: 0.8;
    }
`;

export { Box, Form };