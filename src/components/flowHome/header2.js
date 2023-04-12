import { Box, Header, Text, TextInput } from "grommet";

export default function FlowHeader2() {
    const styles = {
        
        flowCenterText:{
            color: "black",
            fontSize: "1.8rem"
        },
        textHeader:{
            color: "black",
            fontSize: "0.9rem"
        },
        seachInput:{
            height: "7vh",
            width: "17vw"
        }
        
        
    }
    return (
        <Header background={"white"} pad={{horizontal:"2vw"}} height="15vh">
            <Box><Text style={styles.flowCenterText}>Flow Center</Text></Box>
            <Box direction="row" gap="small">
                <Box><Text style={styles.textHeader}>Profissionais</Text></Box>
                <Box><Text style={styles.textHeader}>Artistas</Text></Box>
                <Box><Text style={styles.textHeader}>Famosos</Text></Box>
            </Box>
            <Box><TextInput style={styles.seachInput} placeholder="Buscar"/></Box>
        </Header>
        )
  }
  