import * as React from 'react'

import { useRouter } from "next/router"

import { InputGroup, Input, InputRightElement, Button, Heading, Container, Box, Text } from '@chakra-ui/react'

export default function Signup(){
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const router = useRouter()
  
    const [newUser, setNewUser] = React.useState({"email":"","nomeDeUsuario":"","senha":"","confirmaSenha":"" })

    return (
        <Container maxW='lg' >
        <Heading size='lg' fontSize='50px' padding='0.5rem'> Signup </Heading>

        <InputGroup size='md' display='flex-wrap'>
          <Input type='email' placeholder='Email'  onChange={(e)=>{let input = e.target.value;setNewUser({...newUser,"email":input})}}/>
          
          <Input type='text' placeholder='Nome de Usuario'onChange={(e)=>{let input = e.target.value;setNewUser({...newUser,"nomeDeUsuario":input})}} />
        </InputGroup>

        <InputGroup size='md' display='flex-wrap'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password' }
          placeholder='Digite uma senha'
          onChange={(e)=>{let input = e.target.value;setNewUser({...newUser,"senha":input})}}
        />

        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Confirmar Senha'
          onChange={(e)=>{let input = e.target.value;setNewUser({...newUser,"confirmaSenha":input})}}
        />

        <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
            </Button>
        </InputRightElement>

        
        </InputGroup>


        <Button colorScheme='facebook' variant='solid' onClick={()=>{console.log(newUser)}}>
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