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
`

export default Box;