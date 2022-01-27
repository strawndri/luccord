import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import { useState } from 'react';
import appConfig from '../../config.json';

import GlobalStyle from '../assets/styles/global';
import Container from '../assets/styles/styles';

export default function ChatPage() {

    const [message, setMessage] = useState('');
    const [messagesList, setmessagesList] = useState([]);

    const handleNewMessage = (newMessage) => {

        const message = {
            id: messagesList.length + 1,
            from: 'strawndri',
            txtMessage: newMessage
        }

        setmessagesList([
            message,
            ...messagesList
        ])
        setMessage("")
    }

    return (
        <>
            <GlobalStyle />

            <Container>
                <Box
                    styleSheet={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        borderRadius: '5px',
                        backgroundColor: appConfig.theme.colors.primary["05"],
                        height: '100%',
                        maxWidth: '95%',
                        maxHeight: '95vh',
                        padding: '32px',
                    }}
                >
                    <Header />
                    <Box
                        styleSheet={{
                            position: 'relative',
                            display: 'flex',
                            flex: 1,
                            height: '80%',
                            backgroundColor: appConfig.theme.colors.primary["04"],
                            flexDirection: 'column',
                            borderRadius: '5px',
                            padding: '16px',
                        }}
                    >
                        <MessageList messages={messagesList} />
                        {/* {messagesList.map((currentMessage) => {
                            return (
                                <li key={currentMessage.id}>
                                    {currentMessage.from}: {currentMessage.txtMessage}
                                </li>
                            )
                        })} */}

                        <Box
                            as="form"
                            styleSheet={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <TextField
                                value={message}
                                onChange={(event) => {
                                    const currentValue = event.target.value;
                                    setMessage(currentValue);
                                }}
                                onKeyPress={(event) => {
                                    if (event.key === "Enter") {
                                        event.preventDefault();
                                        handleNewMessage(message);
                                    }
                                }}
                                placeholder="Insira sua mensagem aqui..."
                                type="textarea"
                                styleSheet={{
                                    width: '100%',
                                    border: '0',
                                    resize: 'none',
                                    borderRadius: '5px',
                                    padding: '6px 8px',
                                    backgroundColor: appConfig.theme.colors.primary["03"],
                                    marginRight: '12px',
                                    color: appConfig.theme.colors.neutral["01"],
                                }}
                            />
                            <Button label="Enviar" styleSheet={{
                                backgroundColor: appConfig.theme.colors.secondary['02'],
                                hover: {
                                    backgroundColor: appConfig.theme.colors.secondary['03']
                                }
                            }}/>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: appConfig.theme.colors.neutral['03']}} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                    styleSheet={{
                        color: appConfig.theme.colors.neutral['03'],
                        hover: {
                            backgroundColor: appConfig.theme.colors.primary['04']
                        }
                    }}
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'scroll',
                overflowX: 'hidden',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutral["02"],
                marginBottom: '16px',
            }}
        >
            {props.messages.map((message) => {
                return (
                    <Text
                        key={message.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            fontWeight: 500,
                            transition: ".25s",
                            hover: {
                                backgroundColor: appConfig.theme.colors.primary["03"],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/strawndri.png`}
                            />
                            <Text tag="strong" styleSheet={{color: appConfig.theme.colors.neutral['01']}}>
                                {message.from}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutral["03"],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                        </Box>
                        {message.txtMessage}
                    </Text>
                )
            })}


        </Box>
    )
}