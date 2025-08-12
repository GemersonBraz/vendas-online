import React, { useState } from 'react';
import { BackgroundImage, ContainerLogin, LimitedContainer, LogoImage, TitleLogin } from '../styles/loginScreen.styles';
import { ContainerLoginScreen } from '../styles/loginScreen.styles';
import Input from '../../../shared/inputs/input/Input';
import Button from '../../../shared/buttons/button/Button';


const LoginScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        // lógica para lidar com o nome de usuário
        setUsername(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        // lógica para lidar com a senha
        setPassword(event.target.value);
    }

    const handleLogin = () => {
        // lógica para lidar com o login
        alert(`Usuário: ${username}`);
        alert(`Senha: ${password}`); // Apenas para demonstração, não faça isso em produção 
        // Aqui você pode chamar uma função de autenticação ou redirecionar o usuário
        console.log('Login realizado com sucesso!');
        // Redirecionar ou realizar outras ações após o login
    };


    return (
        <ContainerLoginScreen>

            <BackgroundImage src="./background.png" />
            <ContainerLogin>
                <LimitedContainer>

                    <LogoImage src="./logo.png" />
                    <TitleLogin >LOGIN</TitleLogin>
                    <Input title="Usuario" margin="32px 0px 0px 0px" onChange={(handleUsername)} value={username} />
                    <Input type='password' title="Senha" margin="32px 0px 0px 0px" onChange={(handlePassword)} value={password} />
                    <Button type="primary" margin="64px 0px 16px 0px" onClick={(handleLogin)}>ENTRAR</Button>

                </LimitedContainer>

            </ContainerLogin>

        </ContainerLoginScreen>);

};

export default LoginScreen;