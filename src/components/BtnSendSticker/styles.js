import styled from 'styled-components';
import appConfig from '../../../config.json';

const Box = styled.div`

    position: relative;
    margin-right: 10px;

    button {
        width: 2.5em;
        height: 2.5em;
        font-size: 15px;
        border-radius: 50%;
        background-color: ${appConfig.theme.colors.secondary["02"]};
    }

    button:before {
        content: '⭐';
    }

    button:hover {
        cursor: pointer;
        background-color: ${appConfig.theme.colors.secondary["02"]};
        filter: brightness(0.9);
    }

    button:focus {
        background-color: ${appConfig.theme.colors.secondary["02"]};
    }

    .box__stickers {
        display: flex;
        flex-direction: column;
        width: 18em;
        height: 5em;
        border-radius: 5px;
        position: absolute;
        background-color: ${appConfig.theme.colors.secondary["02"]};
        box-shadow: 1px 2px 16px 1px rgba(0, 0, 0, 0.24);
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
        padding: 1em 1em 0 0;
        overflow: scroll;
        overflow-X: hidden;
    }

    .box__stickers-item {
        width: 45%;
        border-radius: 5px;
        padding: 10px;
        transition: .25s;
    }

    .box__stickers-item: hover {
        background-color: ${appConfig.theme.colors.secondary["02"]};
        filter: brightness(0.9);
    }

    .box__stickers-item img {
        width: 5em;
    }
`

export default Box;