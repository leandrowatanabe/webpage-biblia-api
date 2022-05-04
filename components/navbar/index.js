import { useRouter } from "next/router"
import {  Heading ,Stack, Button, Container} from '@chakra-ui/react'

export default function NavBar(){
    const router = useRouter()
    return(
        <Container justifyContent='space-around' display='flex'>
            <Heading onClick={()=>router.push('/')}>Im a Heading</Heading>
            <Stack direction='col' align='center' >

                <Button colorScheme='teal' variant='solid' onClick={()=>router.push('/')}>
                Home
                </Button>
                <Button colorScheme='teal' variant='outline' onClick={()=>router.push('/documentation')}>
                Documentation
                </Button>
                <Button colorScheme='teal' variant='ghost' onClick={()=>router.push('/journal')}>
                Journal
                </Button>
            </Stack>
                <Button colorScheme='teal' variant='link' onClick={()=>router.push('/admin')} >
                    Admin
                </Button>
        </Container>
    )
}