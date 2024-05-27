import {Routes,Route,Navigate}from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout"

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>

  )
}

export default App;
