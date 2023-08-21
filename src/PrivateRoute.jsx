import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './contexts/auth.context';

function PrivateRoute({ children }) {
  const { authState } = useAuth();
  const location = useLocation();
  return authState.user ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} />
  );
}
export { PrivateRoute };
