import React from 'react';
import Btn from './styles';

const Button = (props) => {

    return (
        <Btn
            disabled={props.disabled}
            type={props.type}
            onClick={props.onClick}
            onChange={props.onChange}
        >
            {props.children}
        </Btn>
    );
}

export default Button;
