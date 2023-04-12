import { Box, Header, Image} from "grommet";

export default function FlowHeader3() {
    const styles = {
        foto:{
            height: "35px"
            
        },
        header:{
            backgroundColor: "black",
            justifyContent: "center"
        }, 
        
    }
    return (
        <Header style={styles.header}>
            <Box align="center">
                <a href="https://www.estudiosflow.com/"><Image style={styles.foto} src="https://i.ytimg.com/vi/umsRQR_MI-A/maxresdefault.jpg"/></a>
            </Box>
        </Header>
    )
}
  