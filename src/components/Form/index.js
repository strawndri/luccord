import GlobalStyle from '../../assets/styles/global';
import FormField from './styles'

const Form = () => {
    return (

        <>
            <GlobalStyle />
            <FormField >

            {/* onSubmit={function (event) {
                    event.preventDefault();
                    routing.push(`/chat?username=${username}`)
                }} */}
                {/* styleSheet={{
                    
                }} */}

                <h1>Bem Vinda(o)!</h1>
                {/* <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutral["03"] }}>
                    {appConfig.name}
                </Text> */}

                {/* <TextField
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
                                                setUserImage('/userError.gif')

                                            )
                                            : (
                                                setUserIsValid(false),
                                                setUserImage(`https://github.com/${currentValue}.png`),
                                                handleInformation(data)
                                            )
                                    })
                            })

                    }}
                    fullWidth
                    textFieldColors={{
                        neutral: {
                            textColor: appConfig.theme.colors.neutral["01"],
                            mainColorHighlight: appConfig.theme.colors.primary["02"],
                            backgroundColor: appConfig.theme.colors.primary["03"],
                        },
                    }}
                /> */}
                {/* <Button
                    disabled={userIsValid}
                    type='submit'
                    label='Entrar'
                    fullWidth
                    buttonColors={{
                        contrastColor: appConfig.theme.colors.neutral["01"],
                        mainColor: appConfig.theme.colors.secondary["02"],
                        mainColorStrong: appConfig.theme.colors.secondary["03"],
                    }}
                /> */}
            </FormField>
        </>
    )
}

export default Form;