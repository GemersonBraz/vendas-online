import { BackgroundImage, ContainerLogin, LimitedContainer, LogoImage } from '../styles/loginScreen.styles';
import { ContainerLoginScreen } from '../styles/loginScreen.styles';

const LoginScreen = () => {

    return (
        <ContainerLoginScreen>

            <BackgroundImage src="./background.png" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logo.png" />
                </LimitedContainer>

            </ContainerLogin>

        </ContainerLoginScreen>);

};

export default LoginScreen;