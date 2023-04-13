import { Box, Button, TextInput } from "grommet";
import React from "react";

export default function Cadastrar() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    return (
        <Box align="center" justify="center" width={"100%"} height={"100%"}>
            <Box background={"black"} width={"250px"} height={"300px"} align="center" justify="center" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                <h1>Cadastro</h1>
                <Box width={"90%"} background={"black"} pad={"small"}>
                    <TextInput placeholder="Nome" value={name} onChange={event => setName(event.target.value)} />
                </Box>
                <Box width={"90%"} background={"black"} pad={"small"}>
                    <TextInput placeholder="Email" value={email} onChange={event => setEmail(event.target.value)} />
                </Box>
                <Box width={"90%"} background={"black"} pad={"small"}>
                    <TextInput background="white" placeholder="Senha" value={senha} onChange={event => setSenha(event.target.value)} />
                </Box>
                <Box>
                    <Button primary label="Enviar" color={"#FF4500"} />
                </Box>
            </Box>
        </Box>
    )
}