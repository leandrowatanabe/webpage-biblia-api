import { useRouter } from "next/router"
import {  Heading ,Stack, Button, Container, Box} from '@chakra-ui/react'

export default function NavBar(){
    const router = useRouter()
    return(
        <>
        <Container display='flex' maxW='90vw' margin='5' justifyContent='space-between'>
            <Box as='button'onClick={()=>router.push('/')}>
                <Heading color='rgb(10,60,150)'>Bíblia API</Heading>
            </Box>
            <Container display='flex-wrap' maxWidth='30vw' justifyContent='space-between'>
                <Button colorScheme='facebook' variant='ghost' onClick={()=>router.push('/')}>
                Home
                </Button>
                <Button colorScheme='facebook' variant='ghost' onClick={()=>router.push('/documentation')}>
                Documentation
                </Button>
                <Button colorScheme='facebook' variant='ghost' onClick={()=>router.push('/journal')}>
                Journal
                </Button>
            </Container>
                <Button colorScheme='facebook' variant='link' onClick={()=>router.push('/admin')}>
                    Admin
                </Button>
        </Container>

        </>
    )
}