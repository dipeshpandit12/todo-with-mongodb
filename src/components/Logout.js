
import {HStack,useToast,Hide, Avatar, AvatarBadge,Text,Button} from "@chakra-ui/react"
import { UnlockIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";

export default function Logout(){
    const navigate=useNavigate();
    const toast=useToast()

  const showToast=()=>{
    toast({
      title:"Logged out",
      description:"Successfully logged out",
      duration:5000,
      isClosable:true,
      status:"success",
      position:"top",
      icon:<UnlockIcon/>
    });
    navigate("/login");
  }
    return(
        <HStack spacing="1rem">
            <Avatar name='avatar'>
              <AvatarBadge width="1.6rem" bg="teal.500">
                <Text fontSize="xs" color="white">N</Text>
              </AvatarBadge>
            </Avatar>
            <Hide below="lg">
            <Text >dip@gmail.com</Text>
            </Hide>
            <Button colorScheme='red' onClick={showToast}>Logout</Button>
        </HStack>
    )
}