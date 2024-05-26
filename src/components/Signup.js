import { VStack,Input,FormLabel, FormControl,Button,Text,Heading,Center,useToast} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { UnlockIcon } from "@chakra-ui/icons";

export default function Signup(){

    const navigate=useNavigate();
    const toast=useToast()

    const[user_email,setEmail]=useState("");
    const[user_password,setPassword]=useState("");

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

    async function registerUser(e){
        e.preventDefault();
        const response =await fetch("http://localhost:1001/api/register",{
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
        console.log(data);
        if(data.status==="ok"){
            showToast("Account created","success");
            navigate("/login");
        }else if(data.status==="error" & data.error==="Duplicate email"){
            showToast("Email exist on our database","info");
            navigate("/login");
        }else{
            showToast("Failed to create account","error")
            navigate('/signup');
        }
    }
    return(
        <Center>
        <form onSubmit={registerUser}>
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