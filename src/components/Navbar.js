import { Flex,HStack,Heading,Spacer,Hide, Avatar, AvatarBadge,Text,Button} from '@chakra-ui/react';
import { Link,} from 'react-router-dom';
import React, { useContext} from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Navbar({token}) {

  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const  handleSubmit=()=>{
    setToken(null);
    // Remove the token from local storage
    localStorage.removeItem('token');
    navigate('/login');

  }
  return (
    <>
    <Flex as="nav" px="0.6rem" flexDirection="row">
        <Heading as='h1' color="white"><Link to="/">Todo List</Link></Heading>
        <Spacer/>
        <HStack spacing="1rem">
            <Avatar name='avatar'>
              <AvatarBadge width="1.6rem" bg="teal.500">
                <Text fontSize="xs" color="white">N</Text>
              </AvatarBadge>
            </Avatar>
            <Hide below="lg">
            <Text >dip</Text>
            </Hide>
            <Button colorScheme='red' onClick={handleSubmit}>Logout</Button>
        </HStack>
    </Flex>
    </>
  )
}