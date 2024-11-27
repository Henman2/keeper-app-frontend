import { Navigate } from 'react-router-dom';
export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user'); // Check if user data is stored
  return user ? children : <Navigate to='/login' />;
};
