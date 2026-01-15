import { createContext, Context, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ outlet }) => {
    const [user, setUser] = useState(null);
    const login = (username) => {
        setUser({ name: username });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {outlet}
        </AuthContext.Provider>
    );
}


