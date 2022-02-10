import { useState } from 'react';
import Container from './styles';

const UserCard = (props) => {

    const [openCard, setOpenCard] = useState('');

    return (
        <Container onClick={() => {console.log('clicou')}}>
            <img className="user-image" src={`https://github.com/${props.message.from}.png`}/>
            <h4 className="user-from">{props.message.from}</h4>
        </Container>
    );
}


export default UserCard;