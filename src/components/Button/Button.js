import React from 'react';
import Container from './styles';

const Button = (props) => {

    return (
        <Container
            disabled={props.disabled}
            type={props.type}
            onClick={props.onClick}
        >
            {props.children}
        </Container>
    );
}

export default Button;
