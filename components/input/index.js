import { useState } from 'react'

import { Textarea, Input, Heading, Button } from '@chakra-ui/react'

export default function JournalInput(){
    const [registro, setRegistro] = useState({"Titulo":"", "Data":"", "Autor":"Leandro Watanabe","Texto":""})
    return(
        <>
            <Heading> Entrada </Heading>
            <Input placeholder='Titulo' size='md' margin='0.5rem' onChange={(e)=>{let input = e.target.value;setRegistro({...registro,"Titulo":input})}}/>
            <Input placeholder='Data' size='sm' margin='0.5rem' onChange={(e)=>{let input = e.target.value;setRegistro({...registro,"Data":input})}}/>
            <Textarea placeholder='Here is a sample placeholder' size='lg' margin='0.5rem' onChange={(e)=>{let input = e.target.value;setRegistro({...registro,"Texto":input})}}/>

            <Button colorScheme='facebook' variant='solid' onClick={()=>{console.log(registro)}}>
                Registrar entrada
            </Button>
        </>

    )
}
