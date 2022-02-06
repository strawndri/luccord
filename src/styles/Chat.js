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
        max-height: 25em;
        margin-bottom: 16px;
        color: ${appConfig.theme.colors.neutral["02"]};
    }

    .messages__item {
        border-radius: 5px;
        padding: 6px;
        margin: 1em 1em 0 0;
        font-weight: 500;
        transition: .25s;
    }
    
    .messages__item:hover {
        background-color: rgba(1, 1, 1, 0.1);
    }

    .messages__user {
        display: flex;
        align-items: center;
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
        font-size: .9em;
        font-weight: 400;
        display: inline-block;
    }

    .date {
        font-size: 10px;
        margin-left: 8px;
        color: ${appConfig.theme.colors.neutral["03"]};
    }

    .message {
        width: 100%;
        margin: 1em 0;
        font-weight: 200;
    }

    .sticker {
        width: 10em;
    }

    .text-field {
        display: flex;
        align-items: center;
    }
    
    .text-field textarea {
        width: 88%;
        border: 0;
        resize: none;
        border-radius: 5px;
        padding: 6px 8px;
        font-family: 'Roboto', sans-serif;
        background-color: ${appConfig.theme.colors.primary["03"]};
        margin: 0 8px;
        color: ${appConfig.theme.colors.neutral["01"]};
    }

}
`

export default Box;