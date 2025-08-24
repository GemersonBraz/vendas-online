
import { Spin } from 'antd';
import { getAuthorizationToken } from '../../../shared/functions/connection/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ProductRoutes } from '../../product/routes';
import { LoginRoutes } from '../../login/routes'

const FirstScreen = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = getAuthorizationToken();
        if (token) {
            navigate(ProductRoutes.PRODUCT)
        } else {
            navigate(LoginRoutes.LOGIN)
        }

    }, []);

    return <Spin />
};

export default FirstScreen;