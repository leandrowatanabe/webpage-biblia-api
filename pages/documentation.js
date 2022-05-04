import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Container,
    Heading,
  } from '@chakra-ui/react'

export default function Documentation(){

    return(
        <>
        <Heading>Documentation</Heading>
        <Container display="flex">
            <Container maxW="200px">
                    <UnorderedList>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </UnorderedList>
            </Container>
            <Container>
                <Heading>ITem</Heading>
                <Heading>ITem</Heading>
                <Heading>ITem</Heading>
                <Heading>ITem</Heading>
            </Container>


        </Container>


        </>
    )
}