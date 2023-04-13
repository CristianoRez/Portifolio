import { Box, Button, TextInput } from "grommet";
import React from "react";

export default function Cadastrar() {
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    return (
        <Box align="center" justify="center" width={"100%"} height={"100%"}>
            <Box background={"black"} width={"250px"} height={"300px"} align="center" justify="center" style={{ borderRadius: '10px', overflow: 'hidden' }}>

                <Box align="center" justify="top" pad="medium">
                    <h1 >Login</h1>
                </Box>
                <Box height={"80%"} align="center" justify="center">
                    <Box width={"100%"} background={"black"} pad={"small"}>
                        <TextInput placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
                    </Box>
                    <Box width={"100%"} background={"black"} pad={"small"}>
                        <TextInput background="white" placeholder="Senha" value={senha} onChange={event => setSenha(event.target.value)} />
                    </Box>
                </Box>
                <Box width="60%" pad="medium">
                    <Button primary label="Entrar" color={"#FF4500"} />
                </Box>

            </Box>
        </Box>
    )
}