import { BackgroundImage, ContainerLogin, LimitedContainer, LogoImage, TitleLogin } from '../styles/loginScreen.styles';
import { ContainerLoginScreen } from '../styles/loginScreen.styles';
import Input from '../../../shared/inputs/input/Input';
import Button from '../../../shared/buttons/button/Button';


const LoginScreen = () => {

    return (
        <ContainerLoginScreen>

            <BackgroundImage src="./background.png" />
            <ContainerLogin>
                <LimitedContainer>

                    <LogoImage src="./logo.png" />
                    <TitleLogin >LOGIN</TitleLogin>
                    <Input title="Usuario" />
                    <Input title="Senha" />
                    <Button type="primary" margin="64px 0px 16px 0px">ENTRAR</Button>

                </LimitedContainer>

            </ContainerLogin>

        </ContainerLoginScreen>);

};

export default LoginScreen;