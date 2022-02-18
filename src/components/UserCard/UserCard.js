import { useState } from 'react';
import Link from 'next/link';
import { Container, Card } from './styles';

const UserCard = (props) => {

  const [openCard, setOpenCard] = useState('');
  const [infoCard, setInfoCard] = useState([]);

  const handleInfoCard = (data) => {

    const userInformations = {
      username: data.login,
      firstname: data.name,
      bio: data.bio,
      location: data.location,
      followers: data.followers,
      following: data.following
    }

    setInfoCard(userInformations)
  }

  return (
    <Container onClick={() => {


      fetch(`https://api.github.com/users/${props.message.from}`)
        .then(response => {
          response.json()

            .then(data => {
              handleInfoCard(data)
            })
        })

      setOpenCard(!openCard)
    }}
    >
      <img className="user-image" src={`https://github.com/${props.message.from}.png`} />
      <h4 className="user-from">{props.message.from}</h4>

      {openCard && (

        <Card>

          <section className="header">
            <img className="header__user-image" src={`https://github.com/${infoCard.username}.png`} />
            <Link href={`https://github.com/${infoCard.username}`}>
              <a target="_blank">{infoCard.username}</a>
            </Link>
            <p>{infoCard.firstname} - {infoCard.location}</p>
          </section>

          <section className="user__details">

            <p className="bio">{infoCard.bio}</p>

            <ul>
              <li>Folowers: {infoCard.followers}</li>
              <li>Following: {infoCard.following}</li>
            </ul>
          </section>

        </Card>

      )}

    </Container>
  );
}


export default UserCard;