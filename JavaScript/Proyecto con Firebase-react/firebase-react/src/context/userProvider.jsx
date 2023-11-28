import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase";

export const UserContext = createContext();

const userProvider = ({ children}) => {
    const [user, setUser] = useState(false);

    useEffect(() => {
        const unsuscribe = onAuthStateChange(auth, (user) => {
        console.log(user)
        if(user) {
            const { email, photoURL , displayName, uid } = user;
            setUser({ email, photoURL, displayName, uid });
        }else {
            setUser(null);
        }
        }, []);
    return () => unsuscribe();
    }, []);

  

    const userRegister = (email, password) => createUserWithEmailAndPassword(auth ,email, password);

    const loginUser = (email, password) => singInWithEmailAndPassword(auth, email, password);

    const signOutUser = () => signOutUser(auth);

    return (
        <UserContext.Provider value={{user, setUser, userRegister, loginUser, signOutUser}} >
            {children}
        </UserContext.Provider>
    );
};

userProvider.prototype = {
    children: PropTypes.node.isRequired
};

export default userProvider;