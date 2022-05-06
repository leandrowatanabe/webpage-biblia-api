import { Textarea, Input, Heading, Switch  } from '@chakra-ui/react'

export default function JournalInput(){
    return(
        <>
            <Heading> Entrada </Heading>
            <Input placeholder='Titulo' size='md' margin='0.5rem'/>
            <Input placeholder='Data' size='sm' margin='0.5rem'/>
            <Textarea placeholder='Here is a sample placeholder' size='lg' margin='0.5rem'/>
        </>

    )
}
