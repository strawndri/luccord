import { useState } from 'react';
import Container from './styles';

const UserCard = (props) => {

  const [openCard, setOpenCard] = useState('');

  return (
    <Container onClick={() => { setOpenCard(!openCard) }}>
      <img className="user-image" src={`https://github.com/${props.message.from}.png`} />
      <h4 className="user-from">{props.message.from}</h4>

      {openCard && (

        <div className="infoCard">
          <img className="user-image" src={`https://github.com/${props.message.from}.png`} />
          <h5>{props.message.from}</h5>
        </div>

      )}

    </Container>
  );
}


export default UserCard;