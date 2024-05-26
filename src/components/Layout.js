import { GridItem,Grid } from "@chakra-ui/react"
import Navbar from "./Navbar";

export default function Layout({children}) {
  return (
    <Grid>
      <GridItem
      as="nav"
      // bg="brand.600"
      bg="purple.400"
      minHeight="5vh"
      p="0.8rem"
      ><Navbar/>
      </GridItem>
      <GridItem
      as="section"
      p="2rem"
      >
        {children}
      </GridItem>
    </Grid>
  )
}