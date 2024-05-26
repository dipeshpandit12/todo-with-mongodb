import { VStack,Input,FormLabel,useToast, FormControl,Button,Text, Center,Heading} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UnlockIcon } from "@chakra-ui/icons";
import { useNavigate } from 'react-router-dom';


export default function LoginForm(){
    const[user_email,setEmail]=useState("");
    const[user_password,setPassword]=useState("");

    const toast=useToast()
    const navigate = useNavigate();

  const showToast=(message,status)=>{
    toast({
      title:message,
    //   description:"Successfully logged out",
      duration:3000,
      isClosable:true,
      status:status,
      position:"top",
      icon:<UnlockIcon/>
    });
  }


    async function loginUser(e){
        e.preventDefault();
        const response =await fetch("http://localhost:1001/api/login",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                user_email,
                user_password
            })
        })

        const data=await response.json()

        if(data.user){
            showToast("Login successful","success");
            navigate('/dashboard');
        }else{
            navigate("/login")
            showToast("Login failed","error")
        }
        console.log(data);
    }
    return(
        <Center>
        <form onSubmit={loginUser}>
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
                <Link to="/signup"> <Button colorScheme="purple" width="20rem" >SignUp</Button></Link>
            </VStack>
        </form>
    </Center>
    )
}