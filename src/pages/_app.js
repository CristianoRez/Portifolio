import '@/styles/globals.css'
import { Grommet } from 'grommet'

export default function App({ Component, pageProps }) {
  const theme = {
    global: {
      font: {
        family: "Poppins",
        size: "18px",
        height: "20px",
      },
    },
  };
  return (<Grommet theme={theme} full> <Component {...pageProps} /></Grommet>)

}
