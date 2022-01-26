import styled from 'styled-components';

import appConfig from '../../config.json';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0005;

    .welcome {
        font-size: 1.4em;
        color: ${appConfig.theme.colors.neutral["000"]};
    }
`

export default Container;