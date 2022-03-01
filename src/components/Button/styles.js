import styled from 'styled-components';
import appConfig from '../../../config.json';

const Container = styled.label`

    padding: .7em .8em;
    border-radius: 5px;
    background-color: ${appConfig.theme.colors.secondary['02']};

    &:hover {
        background-color: ${appConfig.theme.colors.secondary['02']};
        filter: brightness(0.9);
        cursor: pointer;
    }

    &:disabled {
        cursor: not-allowed;
    }

    input {
        display: none;
    }
`

export default Container;