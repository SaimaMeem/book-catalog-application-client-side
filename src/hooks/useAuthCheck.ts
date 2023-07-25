import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserCredential } from '../redux/features/user/userSlice';

export default function useAuthCheck() {
    const dispatch = useDispatch();
    const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const localUser = localStorage?.getItem('user');

        if (localUser) {
            const user = JSON.parse(localUser);
            if (user?.accessToken && user?.email) {
                dispatch(
                    setUserCredential({
                        accessToken: user.accessToken,
                        email: user.email,
                    })
                );
            }
        }
        setAuthChecked(true);
    }, [dispatch, setAuthChecked]);

    return authChecked;
}
