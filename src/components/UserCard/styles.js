import styled from 'styled-components';
import appConfig from '../../../config.json';

const Container = styled.div`

    display: flex;
    width: 5em;

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

export default Container;