import { useContext } from "react"; 
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";
import {GridItem,Grid} from "@chakra-ui/react";
import Navbar from "./Navbar";
import Layout from "./Layout";

function Dashboard() {
  const { token, loading } = useContext(AuthContext);
  if (loading) {
    return null;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return(
    <Grid>
      <GridItem
      as="nav"
      // bg="brand.600"
      bg="purple.400"
      minHeight="5vh"
      p="0.8rem"
      >
        <Navbar token={token}/>
      </GridItem>
      <GridItem
      as="section"
      p="2rem"
      >
        <Layout/>
      </GridItem>
    </Grid>
    )
}

export default Dashboard;