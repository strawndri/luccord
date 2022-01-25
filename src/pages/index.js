import { useState } from 'react';
import { useRouter } from 'next/router'
import { Box, Button, Text, TextField, Image} from '@skynexui/components'
import appConfig from '../../config.json';

import GlobalStyle from '../styles/global';
import Container from './styles';

export default function HomePage() {

  const [username, setUsername] = useState('strawndri');
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
      backgroundColor: appConfig.theme.colors.primary['medium'],
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
    <h1 className="welcome">Boas vindas :)</h1>
    <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.default['text-light']}}>
    {appConfig.name}
    </Text>
    
    <TextField
    value={username}
    onChange={function (event) {

      // Capturar valor
      const currentValue = event.target.value;
      
      // Alterar o valor da variável
      setUsername(currentValue);

    }}
    fullWidth
    textFieldColors={{
      neutral: {
        textColor: appConfig.theme.colors.default['text'],
        mainColor: appConfig.theme.colors.primary['light'],
        mainColorHighlight: appConfig.theme.colors.primary['light'],
        backgroundColor: appConfig.theme.colors.primary['dark'],
      },
    }}
    />
    <Button
    type='submit'
    label='Entrar'
    fullWidth
    buttonColors={{
      contrastColor: appConfig.theme.colors.default['text'],
      mainColor: appConfig.theme.colors.secondary['dark'],
      mainColorLight: appConfig.theme.colors.primary['medium'],
      mainColorStrong: appConfig.theme.colors.secondary['medium'],
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
      backgroundColor: appConfig.theme.colors.primary['dark'],
      border: '1px solid',
      borderColor: appConfig.theme.colors.primary['light'],
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
      color: appConfig.theme.colors.default['text-light'],
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