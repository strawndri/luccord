import styled from 'styled-components';
import appConfig from '../../config.json';

export const Container = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    background: url("https://i.pinimg.com/originals/5b/f5/6e/5bf56e6309c48ea454690462b1e86f8f.jpg") center / cover no-repeat fixed;
`

export const Title = styled.h1`
    color: ${appConfig.theme.colors.default['text']};
    font-size: 1.6em;
`