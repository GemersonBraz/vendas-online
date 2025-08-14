import React, { useState } from 'react';
import { BackgroundImage, ContainerLogin, LimitedContainer, LogoImage, TitleLogin } from '../styles/loginScreen.styles';
import { ContainerLoginScreen } from '../styles/loginScreen.styles';
import Input from '../../../shared/inputs/input/Input';
import Button from '../../../shared/buttons/button/Button';
import axios from 'axios';


const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        // lógica para lidar com o nome de usuário
        setEmail(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        // lógica para lidar com a senha
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        // lógica para lidar com o login
        // Envia uma requisição POST
        const returnObject = await axios({
            method: "post",
            url: "http://localhost:8080/auth",
            data: {
                email: email,
                password: password,
            },
        })
            .then((result) => {
                alert(`Usuário: ${email} logado com sucesso!`);
                return result.data;
            })
            .catch(() => {
                alert('Usuário ou senha inválidos!');

            });

        // Aqui você pode chamar uma função de autenticação ou redirecionar o usuário
        console.log('returnObject', returnObject);


        // Redirecionar ou realizar outras ações após o login
    };


    return (
        <ContainerLoginScreen>

            <BackgroundImage src="./background.png" />
            <ContainerLogin>
                <LimitedContainer>

                    <LogoImage src="./logo.png" />
                    <TitleLogin >LOGIN</TitleLogin>
                    <Input title="Usuario" margin="32px 0px 0px 0px" onChange={(handleEmail)} value={email} />
                    <Input type='password' title="Senha" margin="32px 0px 0px 0px" onChange={(handlePassword)} value={password} />
                    <Button type="primary" margin="64px 0px 16px 0px" onClick={(handleLogin)}>ENTRAR</Button>

                </LimitedContainer>

            </ContainerLogin>

        </ContainerLoginScreen>);

};

export default LoginScreen;