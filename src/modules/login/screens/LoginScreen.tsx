import React, { useState } from 'react';
import { BackgroundImage, ContainerLogin, LimitedContainer, TitleLogin } from '../styles/loginScreen.styles';
import { ContainerLoginScreen } from '../styles/loginScreen.styles';
import Input from '../../../shared/components/inputs/input/Input';
import Button from '../../../shared/components/buttons/button/Button';
import SVGHome from '../../../shared/components/icons/SVGHome';
import { useRequests } from '../../../shared/hooks/useRequests';
import type { UserType } from '../types/UserType';


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { postRequest, loading } = useRequests();

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        // lógica para lidar com o nome de usuário
        setEmail(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        // lógica para lidar com a senha
        setPassword(event.target.value);
    }

    const handleLogin = () => {

        postRequest<UserType>("http://localhost:8080/auth", {
            email: email,
            password: password,
        });



    };


    return (
        <ContainerLoginScreen>

            <BackgroundImage src="./background.png" />
            <ContainerLogin>
                <LimitedContainer>

                    <SVGHome width={100} />
                    <TitleLogin >
                        LOGIN
                        ()
                    </TitleLogin>
                    <Input title="Usuario" margin="32px 0px 0px 0px" onChange={(handleEmail)} value={email} />
                    <Input type='password' title="Senha" margin="32px 0px 0px 0px" onChange={(handlePassword)} value={password} />
                    <Button loading={loading} type="primary" margin="64px 0px 16px 0px" onClick={(handleLogin)}>ENTRAR</Button>

                </LimitedContainer>

            </ContainerLogin>

        </ContainerLoginScreen>);

};

export default LoginScreen;