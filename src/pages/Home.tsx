import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Login from '../components/auth/Login';
import { Navigate } from 'react-router-dom';
export default function Home() {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  return (
    <div>
      {!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />}
    </div>
  )
}
