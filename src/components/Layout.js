import { Box,Heading,Button,Input,HStack, VStack,List,ListItem, Spacer } from "@chakra-ui/react";
import { useState } from "react";

export default function Layout() {
  const [todos, setTodos] = useState([])
  const [addTodo,setAddTodo]=useState("");

  const handleChange=(e)=>{
    setAddTodo(e.target.value);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setTodos([...todos,addTodo])
    setAddTodo("")
  }

  const handleDelete=(index)=>{
    const newTodos=[...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  return (
    <Box >
      <Heading size="3rem">Hello, Dipesh 😊</Heading>
      <VStack p="0.5rem">
        <Box p="2rem" height="7rem" width="25rem" minW="10rem" justifyContent="center">
          <form onSubmit={(e)=>e.preventDefault()}>
            <HStack>
            <Input type="text" value={addTodo} onChange={handleChange} borderColor='purple'></Input>
            <Button px="1.5rem" colorScheme="purple" onClick={handleSubmit}> Add todo</Button>
            </HStack>
          </form>
        </Box>
        <Box px="2rem" width="25rem">
          <List spacing={2}>
            {todos.map((todo,index)=>(
              <ListItem>
                  <HStack>
                    <Heading size="2rem" key={index}>{index + 1 }.{" "+ todo}</Heading>
                    <Spacer/>
                    <Button colorScheme="purple" width="6rem" px="3rem" onClick={handleDelete}>Delete</Button>
                  </HStack>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Box>
  )
}