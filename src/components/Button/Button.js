import React from 'react';
import Container from './styles';
// import { UploadContext } from '../../providers/uploadImg';

const Button = (props) => {

    // const img = React.useContext(UploadContext)
    return (
        <Container>
            <input
                // disabled={props.disabled}
                type={props.type}
                onClick={props.onClick}
            />
            {props.children}
        </Container>
    );
}

export default Button;
