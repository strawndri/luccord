import styled from 'styled-components';
import appConfig from '../../config.json'

const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
    
    h1 {
        padding: .5em;
        border-radius: 100px;
        font-size: 4em;
        color: ${appConfig.theme.colors.neutral["03"]};
        background-color: ${appConfig.theme.colors.primary["04"]};
    }

    a {
        width: 20em;
        padding: .5em;
        border-radius: 0 0 10px 10px;
        background-color: ${appConfig.theme.colors.primary["05"]};
        font-size: 1.4em;
        color: ${appConfig.theme.colors.neutral["02"]};
        text-decoration: none;
        text-align: center;

    }
`

export default Container;