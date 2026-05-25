import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {

  const { user } = useAuth();

  // Si no hay usuario -> redirige al login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Si existe sesión -> muestra la página
  return children;
}

export default PrivateRoute;