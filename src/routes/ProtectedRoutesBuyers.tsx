import { useEffect, useState } from "react";
import {Navigate, Outlet} from 'react-router-dom'; 

const ProtectedRoutesBuyers = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const getIsLoginData = () => JSON.parse(localStorage.getItem('authentication') ? 'true' : 'false');
    const getIsBuyerRole = () => JSON.parse(localStorage.getItem('role') == "Role BUYER" ? 'true' : 'false');

    useEffect(() => {
        setIsLogin(getIsLoginData());
        window.addEventListener('storage', () => {
            setIsLogin(getIsLoginData());
        });
    }, []);
    console.log(getIsBuyerRole())
    if (!getIsLoginData() || !getIsBuyerRole()) {
        return <Navigate to='/login' />;
    }

    return <Outlet />;
}

export default ProtectedRoutesBuyers