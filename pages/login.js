import * as React from 'react'

import { useRouter } from "next/router"

import { InputGroup, Input, InputRightElement, Button, Box, Heading, Container, Link } from '@chakra-ui/react'

export default function Login(){
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const router = useRouter()

    const [user, setUser] = React.useState({"usuario":"","senha":"" })
  

    return (
        <Container maxW='lg' >
        <Heading size='lg' fontSize='50px' padding='0.5rem'> Login </Heading>

        <InputGroup size='md' display='flex-wrap'>
          <Input type='email' placeholder='Email' onChange={(e)=>{let input = e.target.value;setUser({...user,"usuario":input})}}/>

        </InputGroup>

        <InputGroup size='md' display='flex-wrap'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
          onChange={(e)=>{let input = e.target.value;setUser({...user,"senha":input})}}
        />

        <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
            </Button>
        </InputRightElement>
        </InputGroup>

        <Button colorScheme='facebook' variant='solid' onClick={()=>{console.log(user)}}>
            Entrar
        </Button>

        <Box>
        <Link variant='link' onClick={()=>router.push('/signup')}>
            Ainda nao tenho conta
        </Link>
        </Box>


   
        </Container>

    )
}