import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';

import BtnSendSticker from '../components/BtnSendSticker/BtnSendSticker';
import Button from '../components/Button/Button';
import UserCard from '../components/UserCard/UserCard';
import Box from '../styles/Chat';
import { rgba } from 'polished';

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

const ChatPage = () => {
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
            <Box>
                <section className="header">
                    <h3>Logado com ✨ {currentUser} ✨</h3>

                    <Link href="/">Sair</Link>

                </section>
                <section className="chat">
                    <MessageList messages={messagesList} />

                    <form className="text-field">

                        <Button disabled={false} type='button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={rgba(1, 1, 1, 0.8)}><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
                        </Button>

                        <textarea
                            className=""
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
                        />


                        <BtnSendSticker
                            onStickerClick={(sticker) => {
                                handleNewMessage(`:sticker:${sticker}`)
                            }}
                        />

                        <Button
                            disabled={false}
                            type='button'
                            onClick={(event) => {
                                event.preventDefault();
                                handleNewMessage(message);
                            }}>

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 24" fill={rgba(1, 1, 1, 0.8)}><path d="M12 0l8 9h-6v15h-4v-15h-6z" /></svg>
                        </Button>
                    </form>
                </section>
            </Box>
        </>
    )
}

function MessageList(props) {

    return (
        <ul className="messages__list">
            {props.messages.map((message) => {
                return (
                    <li className='messages__item'
                        key={message.id}>

                        <div className="messages__user">

                            <UserCard message={message} />

                            <span className="date">
                                {(new Date().toLocaleDateString('pt-BR'))}
                            </span>

                        </div>

                        {/* Declarativo */}
                        {/* {message.txtMessage.startsWith(':sticker:').toString()} */}
                        {message.txtMessage.startsWith(':sticker:')
                            ? (
                                <p className="message">
                                    <img className="sticker" src={message.txtMessage.replace(':sticker:', '')} />
                                </p>
                            )
                            : (
                                <p className="message">{message.txtMessage}</p>
                            )}
                    </li>
                );
            })}


        </ul>
    )
}

export default ChatPage;