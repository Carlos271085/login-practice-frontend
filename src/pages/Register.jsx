import { Link } from "react-router-dom";
import "../styles/login.css";

function Register() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Crear Cuenta</h1>

        <input
          type="text"
          placeholder="Nombre completo"
          className="login-input"
        />

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

        <input
          type="password"
          placeholder="Confirmar contraseña"
          className="login-input"
        />

        <button className="login-button">
          Registrarse
        </button>

        <Link to="/" className="login-link">
          ¿Ya tienes cuenta? Inicia sesión
        </Link>
      </div>
    </div>
  );
}

export default Register;