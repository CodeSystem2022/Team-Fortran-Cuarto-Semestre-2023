import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./routes/Home"; 

import Login from "./routes/Login";
import Register from "./routes/register";

import RequireAuth from "./components/RequiereAuth"

function App() {

  return (
    <> 
      <Navbar />
      <h1>Hi</h1> 
      <Routes>
        <Route 
          path="/"
          element= {
            <RequireAuth>
              <Home />
            </RequireAuth>
          }

        />

        <Route path="login" element={<Login/>}> </Route>
        <Route path="register" element={<Register/>}> </Route>

      </Routes>
    </>
  );
};

export default App
