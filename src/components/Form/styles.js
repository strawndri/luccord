import styled from "styled-components";
import appConfig from '../../../config.json';

const Form = styled.div`

    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    margin-bottom: 32px;

    input {
        padding: .5em;
        border-radius: 2px;
        color: ${appConfig.theme.colors.neutral["01"]};
        background-color: ${appConfig.theme.colors.primary["03"]};
    }

    button {
        background-color: ${appConfig.theme.colors.neutral["01"]};
    }
`;

export default Form;
