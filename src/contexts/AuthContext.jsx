import { useContext, useState, useEffect, createContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(false);


    useEffect(() => {
        const defaultUser = {
            username: 'Guest',
            email: 'guest@guest.com',
            password: 'guest'
        };
        localStorage.setItem("user", JSON.stringify(defaultUser));
        //kitörlendő a tetejéről
        const _user = JSON.parse(localStorage.getItem("user"));
        if (_user) {
            setUser(_user);
            setAuth(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}
    