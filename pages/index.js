import { useState } from 'react';
import { useRouter } from 'next/router'

import Form from '../src/components/Form';
import GlobalStyle from '../src/assets/styles/global';
import {Container, Box} from '../src/assets/styles/styles';

export default function HomePage() {

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
      <GlobalStyle />
      <Container>

        <Box>

          <Form></Form>

          {/* Photo Area */}
          {/* <Box
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
          </Box> */}
          {/* Photo Area */}
        </Box>
      </Container>
    </>
  );
}