import * as React from 'react'

import { useRouter } from "next/router"

import { InputGroup, Input, InputRightElement, Button, Heading, Container, Box } from '@chakra-ui/react'

export default function Signup(){
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const router = useRouter()
  

    return (
        <Container maxW='lg' >
        <Heading size='lg' fontSize='50px' padding='0.5rem'> Signup </Heading>

        <InputGroup size='md' display='flex-wrap'>
          <Input type='email' placeholder='Email' />
        </InputGroup>

        <InputGroup size='md' display='flex-wrap'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Digite uma senha'
        />

        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Confirmar Senha'
        />

        <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
            </Button>
        </InputRightElement>
        </InputGroup>


        <Button colorScheme='facebook' variant='solid' onClick={()=>router.push('/signup')}>
            Registrar
        </Button>

        <Box>
        <Button variant='link' onClick={()=>router.push('/login')}>
            Ja tenho uma conta
        </Button>

        </Box>
 
        </Container>

    )
}