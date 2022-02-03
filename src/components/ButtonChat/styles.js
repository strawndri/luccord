import styled from 'styled-components';
import appConfig from '../../../config.json';

const Container = styled.button`

    padding: .6em;
    border-radius: 2px;
    background-color: ${appConfig.theme.colors.secondary['02']};

    &:hover {
        background-color: ${appConfig.theme.colors.secondary['02']};
        filter: brightness(0.9);
        cursor: pointer;
    }

    &:focus {
        background-color: ${appConfig.theme.colors.secondary['03']};
    }
`

export default Container;