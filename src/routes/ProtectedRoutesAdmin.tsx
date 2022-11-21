import { useEffect, useState } from "react";
import {Navigate, Outlet} from 'react-router-dom'; 

const ProtectedRoutesAdmin = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const getIsLoginData = () => JSON.parse(localStorage.getItem('authentication') ? 'true' : 'false');
    const getIsAdminRole = () => JSON.parse(localStorage.getItem('role') == "Role ADMIN" ? 'true' : 'false');

    useEffect(() => {
        setIsLogin(getIsLoginData());
        window.addEventListener('storage', () => {
            setIsLogin(getIsLoginData());
        });
    }, []);
    console.log(getIsAdminRole())
    if (!getIsLoginData() || !getIsAdminRole()) {
        return <Navigate to='/' />;
    }

    return <Outlet />;
}

export default ProtectedRoutesAdmin