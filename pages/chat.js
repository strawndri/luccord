import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

import { BtnSendSticker } from '../src/components/BtnSendSticker';
import { ButtonChat } from '../src/components/ButtonChat/ButtonChat';

import appConfig from '../config.json';
import GlobalStyle from '../src/assets/styles/global';
import Container from '../src/assets/styles/styles';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMxNDM5MiwiZXhwIjoxOTU4ODkwMzkyfQ.Jri-ykLhzA5jByMYR20YuVsFtTfQKLvwo3JoUqfNBnQ';
const SUPABASE_URL = 'https://xtzudbuzbysbikfxynvn.supabase.co';
const supaBaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

function listenMessagesOnTime(addMessage) {
    return supaBaseClient
        .from('messages')
        .on('INSERT', (response) => {
            addMessage(response.new)

        })
        .subscribe()
}

export default function ChatPage() {

    const routing = useRouter();
    const currentUser = routing.query.username;
    const [message, setMessage] = useState('');
    const [messagesList, setmessagesList] = useState([]);

    useEffect(() => {
        supaBaseClient
            .from('messages')
            .select('*')
            .order('id', { ascending: false })
            .then(({ data }) => {
                setmessagesList(data)
            });

        listenMessagesOnTime((newMessage) => {
            // console.log(newMessage)
            setmessagesList((currentMessagesList) => {
                return [
                    newMessage,
                    ...currentMessagesList,
                ]
            })
        })
    }, []);

    const handleNewMessage = (newMessage) => {

        const message = {
            // id: messagesList.length + 1,
            from: currentUser,
            txtMessage: newMessage
        }

        supaBaseClient
            .from('messages')
            .insert([
                message
            ])
            .then(({ data }) => {

            })

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

                            <ButtonChat icon="image"/>

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
                                    width: '88%',
                                    border: '0',
                                    resize: 'none',
                                    borderRadius: '5px',
                                    padding: '6px 8px',
                                    backgroundColor: appConfig.theme.colors.primary["03"],
                                    margin: '0 8px',
                                    color: appConfig.theme.colors.neutral["01"],
                                }}
                            />


                            <BtnSendSticker
                                onStickerClick={(sticker) => {
                                    handleNewMessage(`:sticker:${sticker}`)
                                }}
                            />

                            <ButtonChat icon="arrowUp"/>
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
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: appConfig.theme.colors.neutral['03'] }} >
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
                        },
                        focus: {
                            backgroundColor: appConfig.theme.colors.primary['03']
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
                                src={`https://github.com/${message.from}.png`}
                            />
                            <Text tag="strong" styleSheet={{ color: appConfig.theme.colors.neutral['01'] }}>
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

                        {/* Declarativo */}
                        {/* {message.txtMessage.startsWith(':sticker:').toString()} */}
                        {message.txtMessage.startsWith(':sticker:')
                            ? (
                                <Image src={message.txtMessage.replace(':sticker:', '')} styleSheet={{ width: '10%' }} />
                            )
                            : (
                                message.txtMessage
                            )}
                    </Text>
                )
            })}


        </Box>
    )
}