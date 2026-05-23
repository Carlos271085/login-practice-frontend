import { Link } from "react-router-dom";
import "../styles/login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Iniciar Sesión</h1>

        <input
          type="email"
          placeholder="Correo electrónico"
          className="login-input"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
        />

        <button className="login-button">
          Ingresar
        </button>

        <Link to="/register" className="login-link">
          ¿No tienes cuenta? Regístrate
        </Link>
      </div>
    </div>
  );
}

export default Login;