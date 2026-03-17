import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children  }) => {
    {/* itt kezeljük a hitelesítési állapotot
        az ebben lévő felhasználói adatokat és metódusokat
        akarjuk átadni a komponenseknek */}
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (username, email, role) => {
        // jogosultság ellenőrzés itt és csak azután állítjuk be a user-t
        setUser({ name: username, email: email, role: role });
    };

    const logout = () => {
        setUser(null);
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
export function useAuth() {
    return useContext(AuthContext);
}

