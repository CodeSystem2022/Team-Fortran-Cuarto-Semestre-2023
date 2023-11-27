import { useContext } from "react";
import { UserContext} from "../context/userProvider";
import { useNavigate} from "react-router-dom";

const Login = () => {
    const { user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handlerClickLogin = () => {
        setUser(true);
        navigate("/");

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