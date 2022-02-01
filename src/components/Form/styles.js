import styled from "styled-components";
import appConfig from '../../../config.json';

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

    button {
        padding: .6em;
        width: 20em;
        border-radius: 2px;
        color: ${appConfig.theme.colors.neutral["02"]};
        background-color: ${appConfig.theme.colors.secondary["02"]};
        transition: .5s;
    }

    button:hover {
        cursor: pointer;
        background-color: ${appConfig.theme.colors.secondary["03"]};
    }
`;

export default Form;
