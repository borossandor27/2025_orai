import { useAuth } from "../context/AuthContext";   

const Login = () => {
    const { login } = useAuth();
    const handleLogin = () => {
        // Például statikus adatokkal
        login('demoUser', 'demo@example.com', 'user');
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login as demoUser</button>
        </div>
    );
}
export default Login;