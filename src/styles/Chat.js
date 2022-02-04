import styled from 'styled-components';
import appConfig from '../../config.json';

const Box = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
    border-radius: 5px;
    background-color: ${appConfig.theme.colors.primary["05"]};
    height: 100%;
    max-width: 95%;
    max-height: 95vh;
    padding: 32px;

    .header {
        width: 100%; 
        margin-bottom: 16px; 
        display: flex; 
        align-items: center; 
        justify-content: space-between; 
        color: ${appConfig.theme.colors.neutral["03"]};
    }

    .chat {
        position: relative;
        display: flex;
        flex: 1;
        height: 80%;
        background-color: ${appConfig.theme.colors.primary["04"]};
        flex-direction: column;
        border-radius: 5px;
        padding: 16px;
    }

    .messages__list {
        overflow: scroll;
        overflow-X: hidden;
        display: flex;
        flex-direction: column-reverse;
        flex: 1;
        color: ${appConfig.theme.colors.neutral["02"]};
        margin-bottom: 16px;
    }

    .messages__item {
        border-radius: 5px;
        padding: 6px;
        margin-bottom: 12px;
        font-weight: 500;
        transition: .25s;

        &:hover: {
            background-color: ${appConfig.theme.colors.primary["03"]};
        }
    }

    .user-image {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 8px;
    }

    .user-from {
        color: ${appConfig.theme.colors.neutral['01']};
        display: inline-block;
    }

    .date {
        font-size: 10px;
        margin-left: 8px;
        color: ${appConfig.theme.colors.neutral["03"]};
    }

    .message {
        width: 100%;
        margin: 2em 0;
    }

    .sticker {
        width: 10em;
    }
`

export default Box;