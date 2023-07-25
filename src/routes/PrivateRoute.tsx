import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
interface IProps {
    children: ReactNode;
}
export default function PrivateRoute({ children }: IProps) {
    const user = useAppSelector((state) => state.user);
    const { pathname } = useLocation();
    return user?.accessToken && user?.email ? (
        children
    ) : (
        <Navigate to="/login" state={{ path: pathname }} />
    );
}
