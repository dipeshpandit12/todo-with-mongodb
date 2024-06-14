import { Box,Heading,Button,Input,HStack, VStack,List,ListItem } from "@chakra-ui/react";
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
      <Heading size="3rem">Hello, Dipesh !!</Heading>
      <VStack p="0.5rem">
        <Box p="2rem" height="7rem" width="25rem" minW="10rem" justifyContent="center">
          <form>
            <HStack>
            <Input type="text" value={addTodo} onChange={handleChange} variant='outline'></Input>
            <Button px="1.5rem" colorScheme="purple" onClick={handleSubmit}> Add todo</Button>
            </HStack>
          </form>
        </Box>
        <Box px="2rem" width="25rem" minW="10rem">
          <List spacing={2}>
            {todos.map((todo,index)=>(
              <ListItem>
                <HStack>
                  <Heading size="2rem" key={index}>{todo}</Heading>
                  <Button colorScheme="purple" onClick={handleDelete}>Delete</Button>
                </HStack>
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Box>
  )
}