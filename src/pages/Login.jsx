import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/login.css";

function Login() {

  // Estados inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Navegación
  const navigate = useNavigate();

  // Contexto auth
  const { user, login } = useAuth();

  // Función login
  const handleLogin = () => {

    // Validación simple
    if (!email || !password) {
      alert("Completa todos los campos");
      return;
    }

    // Datos usuario
    const userData = {
      nombre: "Carlos",
      email: email
    };

    // Guardar sesión
    login(userData);

    // Redirigir dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1 className="login-title">
          Iniciar Sesión
        </h1>

        <input
          type="email"
          placeholder="Correo electrónico"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="login-button"
          onClick={handleLogin}
        >
          Ingresar
        </button>

        {user && (
          <p
            style={{
              color: "white",
              textAlign: "center"
            }}
          >
            Bienvenido {user.nombre}
          </p>
        )}

        <Link
          to="/register"
          className="login-link"
        >
          ¿No tienes cuenta? Regístrate
        </Link>

      </div>

    </div>
  );
}

export default Login;