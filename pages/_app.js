import { ChakraProvider } from '@chakra-ui/react'

import '../styles/globals.css'
import NavBar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavBar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
