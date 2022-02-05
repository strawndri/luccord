import styled from 'styled-components';
import appConfig from '../../../config.json';

const Box = styled.div`

    position: relative;
    margin-right: 10px;

    button {
        font-size: 15px;
        margin: 0 4px 8px 4px;
        background-color: ${appConfig.theme.colors.secondary["02"]};

    button:hover {
        background-color: ${appConfig.theme.colors.secondary["02"]};
        filter: brightness(0.9);
    }

    button:focus {
        background-color: ${appConfig.theme.colors.secondary["03"]};
    }

    .box__stickers {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        position: absolute;
        background-color: ${appConfig.theme.colors.secondary["03"]};
        height: 300px;
        right: 30px;
        bottom: 30px;
        padding: 16px;
    }

    .box__stickers p {
        color: ${appConfig.theme.colors.neutral["01"]};
        font-weight: bold;
    }

    .box__stickers-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex: 1;
        padding-top: 16px;
        overflow: scroll;
        overflow-X: hidden;
    }

    .box__stickers-item {
        width: 40%;
        border-radius: 5px;
        padding: 10px;
    }
`

export default Box;