import { useState } from 'react';
import { useRouter } from 'next/router'
import { Box, Button, Text, TextField, Image} from '@skynexui/components'
import appConfig from '../../config.json';

import GlobalStyle from '../assets/styles/global';
import Container from './styles';

export default function HomePage() {

  const [username, setUsername] = useState('');
  const routing = useRouter();
  
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
      backgroundColor: appConfig.theme.colors.primary["100"],
    }}
    >
    {/* Formulário */}
    <Box
    as="form"
    onSubmit={function (event) {
      event.preventDefault();
      routing.push('/chat')
    }}
    styleSheet={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
    }}
    >
    <h1 className="welcome">Bem Vinda(o), {username}!</h1>
    <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutral["050"]}}>
    {appConfig.name}
    </Text>
    
    <TextField
    value={username}
    placeholder="Digite seu usuário do Github"
    onChange={function (event) {

      // Capturar valor
      const currentValue = event.target.value;
      
      // Alterar o valor da variável
      setUsername(currentValue);

    }}
    fullWidth
    textFieldColors={{
      neutral: {
        textColor: appConfig.theme.colors.neutral["000"],
        mainColor: appConfig.theme.colors.primary["050"],
        mainColorHighlight: appConfig.theme.colors.primary["050"],
        backgroundColor: appConfig.theme.colors.primary["050"],
      },
    }}
    />
    <Button
    type='submit'
    label='Entrar'
    fullWidth
    buttonColors={{
      contrastColor: appConfig.theme.colors.neutral["000"],
      mainColor: appConfig.theme.colors.secondary["050"],
      mainColorLight: appConfig.theme.colors.primary["100"],
      mainColorStrong: appConfig.theme.colors.secondary["100"],
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
      backgroundColor: appConfig.theme.colors.primary["050"],
      border: '1px solid',
      borderColor: appConfig.theme.colors.neutral["150"],
      borderRadius: '10px',
      flex: 1,
      minHeight: '240px',
    }}
    >
    <Image
    styleSheet={{
      borderRadius: '50%',
      marginBottom: '16px',
    }}
    src={`https://github.com/${username}.png`}
    alt="Usuário"
    />
    <Text
    variant="body4"
    styleSheet={{
      color: appConfig.theme.colors.neutral["050"],
      backgroundColor: appConfig.theme.colors.primary["000"],
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