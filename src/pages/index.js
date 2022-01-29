import { useState } from 'react';
import { useRouter } from 'next/router'
import { Box, Button, Text, TextField, Image} from '@skynexui/components'
import appConfig from '../../config.json';

import GlobalStyle from '../assets/styles/global';
import Container from '../assets/styles/styles';

export default function HomePage() {

  const [username, setUsername] = useState('');
  const [userImage, setUserImage] = useState('/userError.gif');
  const [userInfo, setUserInfo] = useState([]);
  const [userIsValid, setUserIsValid] = useState(true);

  const routing = useRouter();
  
  console.log(userInfo)

  return (
    <>
    <GlobalStyle />
    <Container>
    
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: {
          xs: 'column',
          sm: 'row',
        },
        width: '100%', maxWidth: '700px',
        borderRadius: '5px', padding: '32px', margin: '16px',
        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
        backgroundColor: appConfig.theme.colors.primary["05"],
      }}
    >
    {/* Formulário */}
    <Box
      as="form"
      onSubmit={function (event) {
        event.preventDefault();
        routing.push(`/chat?username=${username}`)
      }}
      styleSheet={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
      }}
    >
      <h1 className="welcome">Bem Vinda(o)!</h1>
      <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutral["03"]}}>
      {appConfig.name}
      </Text>
      
      <TextField
      value={username}
      placeholder="Digite seu usuário do Github"
      onChange={function (event) {
        // Capturar valor
        const currentValue = event.target.value;

        // Alterar o valor da variável
        setUsername(currentValue)

        username.length >= 2 
        ? (
          setUserImage(`https://github.com/${currentValue}.png`),
          setUserIsValid(false)
          // setUserInfo(fetch(`https://api.github.com/users/${currentValue}`))
        )
        : (
          setUserImage('/userError.gif')
        );

        console.log(userInfo)

      }}
      fullWidth
      textFieldColors={{
        neutral: {
          textColor: appConfig.theme.colors.neutral["01"],
          mainColorHighlight: appConfig.theme.colors.primary["02"],
          backgroundColor: appConfig.theme.colors.primary["03"],
        },
      }}
    />
      <Button
        disabled={userIsValid}
        type='submit'
        label='Entrar'
        fullWidth
        buttonColors={{
          contrastColor: appConfig.theme.colors.neutral["01"],
          mainColor: appConfig.theme.colors.secondary["02"],
          mainColorStrong: appConfig.theme.colors.secondary["03"],
        }}
      />
    </Box>
    {/* Formulário */}
    
    
    {/* Photo Area */}
    <Box
    styleSheet={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '200px',
      padding: '16px',
      backgroundColor: appConfig.theme.colors.primary["03"],
      borderRadius: '5px',
      flex: 1,
      minHeight: '240px',
    }}
    >
    <Image
    styleSheet={{
      borderRadius: '50%',
      marginBottom: '16px',
    }}
    src={userImage}
    onChange={function (event) {
      console.log(event)
    }}
    alt=" "
    />
    <Text
    variant="body4"
    styleSheet={{
      color: appConfig.theme.colors.neutral["01"],
      backgroundColor: appConfig.theme.colors.primary["01"],
      padding: '3px 10px',
      borderRadius: '1000px'
    }}
    >
    {username}
    </Text>
    </Box>
    {/* Photo Area */}
    </Box>
    </Container>
    </>
    );
  }