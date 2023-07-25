import { useAppSelector } from '../redux/hooks';

export default function useAuth() {
    const user = useAppSelector((state) => state.user);

    if (user?.accessToken && user?.email) {
        return true;
    } else {
        return false;
    }
}
