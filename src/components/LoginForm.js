import { VStack,Input,FormLabel, FormControl,Button,Text,useToast, Center,Heading} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export default function LoginForm(){
    const[user_email,setEmail]=useState("");
    const[user_password,setPassword]=useState("");
    const [errorMessage, setErrorMessage] = useState(null); // New state for handling error messages

  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

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
      const response = await axios.post("/api/auth/login", {
        user_email,
        user_password,
      });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
      showToast("Login successful","","success");
      console.log(response.data.token)
    } catch (error) {
      console.error("Authentication failed:", error);
      showToast("Failed",error.response.data,"error");
      setToken(null);
      localStorage.removeItem("token");
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data); // Set the error message if present in the error response
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };
    return(
        <Center>
          {console.log(errorMessage)}
        <form onSubmit={handleSubmit}>
        <Heading  as="h5"size="0.5rem" py="2rem">Welcome back! Please Login to your Account😊</Heading>
            <VStack width="20rem" spacing="1.5rem" >
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" name="user_email" value={user_email} onChange={(e)=>setEmail(e.target.value)}></Input>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" name="user_password" value={user_password} onChange={(e)=>setPassword(e.target.value)}></Input>
                </FormControl>
                <Button colorScheme="purple" type="submit" width="20rem" >Login</Button>
                <Text>OR</Text>
                <Link to="/register"> <Button colorScheme="purple" width="20rem" >SignUp</Button></Link>
            </VStack>
        </form>
    </Center>
    )
}