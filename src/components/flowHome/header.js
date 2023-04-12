import { Box, Header, Image, Text} from "grommet";

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
            fontSize: "0.6rem"
        }, 
        
    }
    return (
        <Header style={styles.header} pad={{horizontal:"1.5vw"}}>
            <Image alt="" style={styles.foto} src="https://yt3.googleusercontent.com/ytc/AL5GRJVjTc0SMu--M2Xp5T1LWnC7rHzRohdF9WYy6Kptcw=s900-c-k-c0x00ffffff-no-rj"/>
            <Box direction="row" gap="small"> 
                <Box><Text style={styles.textHeader}>Ajuda</Text></Box>
                <Box><Text style={styles.textHeader}>Cadastrar</Text></Box>
                <Box><Text style={styles.textHeader}>Entrar</Text></Box>
            </Box>
        </Header>
    )
}
  