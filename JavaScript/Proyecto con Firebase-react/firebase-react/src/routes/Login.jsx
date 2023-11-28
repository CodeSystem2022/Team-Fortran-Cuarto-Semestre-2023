import { useContext , useState} from "react";
import { UserContext} from "../context/userProvider";
import { useNavigate} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { loginUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefaultd();
        try{
            await loginUser(email, password);
            console.log("Usuario logeado")
            navigate("/");
        }
        catch(err){
            console.log(err.code);
        }
    };

    return (
        <>
            <h1>Login</h1>
            <h2>{user ? "En linea" : "Offline"}</h2>
            <button onClick={handlerClickLogin}>Acceder</button>
        </>
    );

};

export default Login;