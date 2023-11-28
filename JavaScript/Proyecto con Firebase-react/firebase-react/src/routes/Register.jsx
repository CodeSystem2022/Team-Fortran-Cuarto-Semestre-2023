import React, {useContext, useState} from "react";
import { useNavigate} from "react-router-dom";
import { UserContext } from "../context/userProvider";

const Register = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
    
        console.log("Procesando form: ", email, password);
        
        try {
            await registerUser(email, password);    
    
            console.log("Creando usuario")
            navigate("/");
        }
        catch (err) {
            console.log("Error: ", err.code);
        }
    }

  return (
    <>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
        <input type="email" 
        placeholder="Ingrese Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input 
        type="password"
        placeholder="Ingrese Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
    </form>
    </>
  );
}

export default Register;