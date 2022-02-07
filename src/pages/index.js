import { useState } from 'react';
import { useRouter } from 'next/router'

import { Box, Form } from '../styles/Home';
import appConfig from '../../config.json';
import Button from '../components/Button/Button';

export default function Home() {

  const [username, setUsername] = useState('');
  const [userImage, setUserImage] = useState('/userError.gif');
  const [userInfo, setUserInfo] = useState([]);
  const [userIsValid, setUserIsValid] = useState(true);

  const routing = useRouter();

  const handleInformation = (data) => {

    const information = {
      username: username,
      oficialName: data.name,
      location: data.location
    }

    setUserInfo(information)
  }
  return (
    <>

        <Box>

          <Form
            as='form'
            onSubmit={function (event) {
              event.preventDefault();
              routing.push(`/chat?username=${username}`)
            }}
          >
            <h1>Bem Vinda(o)!</h1>
            <h2>{appConfig.name}</h2>

            <input
              value={username}
              placeholder="Digite seu usuário do Github"
              onChange={function (event) {
                // Capturar valor
                const currentValue = event.target.value;

                // Alterar o valor da variável
                setUsername(currentValue)

                fetch(`https://api.github.com/users/${currentValue}`)
                  .then(response => {
                    response.json()

                      .then(data => {

                        username.length <= 2 || data.message == 'Not Found'
                          ? (
                            setUserImage('/userError.gif'),
                            setUserIsValid(true)
                          )
                          : (
                            setUserIsValid(false),
                            setUserImage(`https://github.com/${currentValue}.png`),
                            handleInformation(data)
                          )
                      })
                  })
              }}
            />
            <Button
              disabled={userIsValid}
              type='submit'>Entrar</Button>
          </Form>

          <section className='photoArea'>
            <p className='userInfo'>
              Username: {username}
            </p>
            <img className="icon"
              src={userImage}
              onChange={function (event) {
                console.log(event)
              }}
              alt=" "
            />

            <p className='userInfo'>
              Name: {userInfo.oficialName}
            </p>
            <p className='userInfo'>
              Location: {userInfo.location}
            </p>
          </section>
        </Box>
    </>
  );
}