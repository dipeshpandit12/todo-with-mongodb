import Layout from "./components/Layout"
import {Routes,Route}from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";




function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route index path="/" element={<LoginForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Layout>
    </>

  )
}

export default App;
