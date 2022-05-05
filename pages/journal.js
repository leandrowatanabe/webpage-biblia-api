import { Text, Container, Heading, Box} from '@chakra-ui/react'

import objetoteste from '../progresso.json'

export default function Journal() {

    const headers = Object.keys(objetoteste)
    return (
        <>
            <Container display='flex-wrap' height='90vh' justifyContent='center' alignItems='center' margin='10px'>
                <Heading size='2xl'>Journal</Heading>     
                {headers.map(obj=>(
                    <Box margin='1rem' key={obj} width='90vw'>
                        <Heading size='md' >
                            {objetoteste[obj].Titulo}
                        </Heading>
                        
                        <Heading size='xs'>
                            {objetoteste[obj].data}
                        </Heading>

                        <Text>
                            {objetoteste[obj].Texto}
                        </Text>
                    </Box>
                ))}      
            </Container>
        </>
      )
  }