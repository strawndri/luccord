import styled from 'styled-components';
import appConfig from '../../../config.json';

const Container = styled.div`

    position: relative;
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

    .infoCard {
        position: absolute;
        bottom: 24px;
        left: 10px;
        height: 8em;
        width: 15em;
        padding: 1em;
        z-index: 1;
        border-radius: 10px 10px 10px 0;
        box-shadow: 1px 2px 16px 1px rgba(0, 0, 0, 0.24);
        background-color: ${appConfig.theme.colors.secondary['02']}
    }

    &:hover {
        cursor: pointer;
    }

`

export default Container;