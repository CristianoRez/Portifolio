import { Box, Header, Image, Text, Anchor} from "grommet";

export default function FlowHeader() {
    const styles = {
        foto:{
            height: "5.5vh"
        },
        header:{
            backgroundColor: "black"
            
        },
        textHeader:{
            color: "#fff",
            fontSize: "0.7rem"
        }, 
        
    }
    return (
        <Header style={styles.header} pad={{horizontal:"1.5vw"}}>
            <Image alt="" style={styles.foto} src="https://yt3.googleusercontent.com/ytc/AL5GRJVjTc0SMu--M2Xp5T1LWnC7rHzRohdF9WYy6Kptcw=s900-c-k-c0x00ffffff-no-rj"/>
            <Box direction="row" gap="small"> 
                <Box><Anchor href="flow/cadastro" label="Ajuda" style={styles.textHeader}/></Box>
                <Box><Anchor href="flow/cadastro" label="Cadastrar" style={styles.textHeader}/></Box>
                <Box><Anchor href="flow/login" label="Login" style={styles.textHeader}/></Box>
            </Box>
        </Header>
    )
}
  