import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

function RouteGuard({ children, loginOnly = true }) {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  if (!user && loginOnly) {
    navigate("/login");
  }

  if (user && !loginOnly) {
    navigate("/");
  }
  return children;
}

export default RouteGuard;