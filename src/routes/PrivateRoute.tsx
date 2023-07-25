import { ReactNode } from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
interface IProps {
    children: ReactNode;
}
export default function PrivateRoute({ children }: IProps) {
    const isLoggedIn = useAuth();

    return isLoggedIn ? children : <Navigate to="/" />;
}
