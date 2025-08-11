import { BackgroundImage, ContainerLogin, LimitedContainer, LogoImage } from '../styles/loginScreen.styles';
import { ContainerLoginScreen } from '../styles/loginScreen.styles';
import Input from '../../../shared/inputs/input/Input';


const LoginScreen = () => {

    return (
        <ContainerLoginScreen>

            <BackgroundImage src="./background.png" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png" />
                    <Input title="Usuario" />
                    <Input title="Senha" />

                </LimitedContainer>

            </ContainerLogin>

        </ContainerLoginScreen>);

};

export default LoginScreen;