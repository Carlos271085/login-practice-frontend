import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/login.css";

function Login() {

  const { user, login } = useAuth();

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

        <button
          className="login-button"
          onClick={() =>
            login({
              nombre: "Carlos",
              email: "carlos@email.com"
            })
          }
        >
          Ingresar
        </button>

        {user && (
          <p style={{ color: "white", textAlign: "center" }}>
            Bienvenido {user.nombre}
          </p>
        )}

        <Link to="/register" className="login-link">
          ¿No tienes cuenta? Regístrate
        </Link>
      </div>
    </div>
  );
}

export default Login;