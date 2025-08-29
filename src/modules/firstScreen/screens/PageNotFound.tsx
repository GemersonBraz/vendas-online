import { Button, Result } from 'antd';
import { ContainerPageNotFound } from '../styles/pageNotFound.Styles';
import { LoginRoutes } from '../../login/routes';
import { useNavigate } from 'react-router';



const PageNotFound = () => {
    const navigate = useNavigate();

    const handleOnClickButton = () => {
        navigate(LoginRoutes.LOGIN)
    }

    return (
        <ContainerPageNotFound>
            <Result
                status="403"
                title="403"
                subTitle="Desculpe, a página que você esta visitando não existe."
                extra={<Button onClick={handleOnClickButton} type="primary">
                    Página de Login</Button>}
            />
        </ContainerPageNotFound >
    )
}

export default PageNotFound;
