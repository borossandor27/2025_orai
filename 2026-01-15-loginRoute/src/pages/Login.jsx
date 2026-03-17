import { useAuth } from "../context/AuthContext";   
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate(); // navigate függvény beszerzése

    const handleLogin = () => {
        // Például statikus adatokkal
        login('demoUser', 'demo@example.com', 'user');
        navigate('/profile');
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login as demoUser</button>
        </div>
    );
}
export default Login;