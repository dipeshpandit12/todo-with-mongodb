import React from 'react'
import { Flex,Heading,Spacer} from '@chakra-ui/react';
import { Link,useLocation } from 'react-router-dom';
import Logout from './Logout';

export default function Navbar() {
  let location = useLocation();
  const path=location.pathname;
  return (
    <>
    <Flex as="nav" px="0.6rem" flexDirection="row">
        <Heading as='h1' color="white"><Link to="/">Todo List</Link></Heading>
        <Spacer/>
        {(path==="/dashboard") ? <Logout/>:null}
    </Flex>
    </>
  )
}