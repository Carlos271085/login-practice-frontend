import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Función cerrar sesión
  const handleLogout = () => {

    logout();

    // Redirigir login
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1e293b",
        color: "white",
        padding: "40px"
      }}
    >

      <h1>
        Dashboard
      </h1>

      <p>
        Bienvenido {user?.nombre}
      </p>

      <p>
        Correo: {user?.email}
      </p>

      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Cerrar Sesión
      </button>

    </div>
  );
}

export default Dashboard;