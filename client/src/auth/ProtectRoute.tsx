import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  //whenever we reload the page isAuthenticated fetch from Auth0 server so we redirect to home page . To fix this we return null
  if (isLoading) return null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectRoute;
