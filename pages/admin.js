import { Container, Box, Button} from '@chakra-ui/react'
import { useRouter } from "next/router"
import { useState } from 'react'

import JournalInput from '../components/input'

export default function Admin(){

    const [simulaEstado, setSimulaEstado] = useState(false)
    const toggle = () => setSimulaEstado(prevState => !prevState)

    const router = useRouter()

    return(
        <Container display='flex-wrap' height='90vh' justifyContent='center' alignItems='center' >
            <Box>
                    {simulaEstado?<JournalInput/>:<Button onClick={()=>{router.push('/login')}}>Login</Button>}
            </Box>

            

            <Button onClick={toggle}> 
                {simulaEstado?"Logado":"Nao Logado"}                
            </Button>


        </Container>
    )
}