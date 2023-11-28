import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/userProvider";

const Navbar = () => {
    const { user, singOutUser } = useContext(UserContext);

    const handleClickLogout = async () => {
        try {
            await singOutUser();
            console.log("Usuario deslogeado")
        }
        catch (err) {
            console.log(err.code)
        }
    }

    return (
        <div>
            {user ? (
                <>
                    <NavLink to="/">Inicio</NavLink>
                    <button onClick={handleClickLogout}>Cerrar secion</button>
                </>
            ) : (
                <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
                </>
            )}
        </div>
    );
};

export default Navbar;