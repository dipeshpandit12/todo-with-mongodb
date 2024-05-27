import { VStack,Input,FormLabel, FormControl,Button,Text,Heading,Center,useToast} from "@chakra-ui/react";
import {Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function Signup(){
    const [user_email, setEmail] = useState("");
    const [user_password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const toast=useToast();
    const showToast=(title,message,status)=>{
      toast({
        title:title,
        description:message,
        duration:3000,
        isClosable:true,
        status:status,
        position:"top",
      });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("/api/auth/register", {
            user_email,
            user_password,
          });
          setMessage(response.data.message);
          showToast("SignUp Successful",response.data.message,"success")
        } catch (error) {
          console.error("Registration failed:", error.response.data.error);
          setMessage(error.response.data.error);
          showToast("Failed SignUp",error.response.data.error,"error")
        }
      };
    return(
        <Center>
        <form onSubmit={handleSubmit}>
            <Heading  as="h5"size="0.5rem" py="2rem">Namaste🙏! Please create your Account😊</Heading>
            <VStack width="20rem" spacing="1.5rem" >
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" name="user_email" value={user_email} onChange={(e)=>setEmail(e.target.value)}></Input>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>New Password</FormLabel>
                    <Input type="password" name="user_password" value={user_password} onChange={(e)=>setPassword(e.target.value)}></Input>
                </FormControl>
                <Button colorScheme="purple" type="submit" width="20rem">SignUp</Button>
                <Text>OR</Text>
                <Link to="/login"> <Button colorScheme="purple" width="20rem" >Login</Button></Link>
            </VStack>
        </form>
    </Center>
    )
}