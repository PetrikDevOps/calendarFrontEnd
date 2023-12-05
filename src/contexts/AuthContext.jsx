import { useContext, useState, useEffect, createContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("user")) {
            setUser(JSON.parse(localStorage.getItem("user")));
            setAuth(true);
        }
        else{
            setUser('alma')
            setAuth(true)
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}
    