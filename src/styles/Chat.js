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

    a {
        color: ${appConfig.theme.colors.neutral['03']};
        text-decoration: none;
        transition: .25s;
    }

    a:hover {
        color: ${appConfig.theme.colors.neutral['02']};
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

    .date {
        font-size: 10px;
        color: ${appConfig.theme.colors.neutral["03"]};
        opacity: 0.5;
    }

    .message {
        width: 100%;
        margin: 1em 0;
        font-weight: 400;
        font-size: .9em;
    }

    .btnUpload {
        border-radius: 5px;
        padding: .7em .8em;
        background-color: ${appConfig.theme.colors.secondary['02']};
    }

    .btnUpload:hover {
        background-color: ${appConfig.theme.colors.secondary['02']};
        filter: brightness(0.9);
        cursor: pointer;
    }

    .btnUpload input {
        display: none;
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
        height: 3.2em;
        border: 0;
        resize: none;
        border-radius: 5px;
        padding: 12px 8px;
        font-family: 'Roboto', sans-serif;
        background-color: ${appConfig.theme.colors.primary["03"]};
        margin: 0 8px;
        color: ${appConfig.theme.colors.neutral["01"]};
    }

}
`

export default Box;