import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { efetuarLogin } from '../lib/api/autenticar';


function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [emailError, setEmailError] = useState('');
    const [senhaError, setSenhaError] = useState('');

    const handleClick = (rota) => {
        navigate(rota);
    };

    const logar = () => {

        const emailValido = email.length > 5;
        const senhaValida = senha.length > 6;

        setEmailError('');
        setSenhaError('');

        if (emailValido && senhaValida) {
            const enviar = {
                email,
                senha
            }
            
         
            const retorno = efetuarLogin(enviar);            
            if(retorno.sucesso){
                localStorage.setItem('status', 'autenticado');
                localStorage.setItem('user', JSON.stringify(retorno.dados))
                navigate('/home');
            }else {
                if(retorno.error === 'email') setEmailError('Email não cadastrado');
                if(retorno.error === 'senha') setSenhaError('Senha incorreta');
            }
        }
        else {
            if (!emailValido) {
                setEmailError('Informe um Email válido')
            }
            if (!senhaValida) {
                setSenhaError('Senha inválida')
            }
        }
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const onChangeSenha = (event) => {
        setSenha(event.target.value);
    }

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#D0F0C0', minHeight: '100vh' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', width: '250px', marginTop: '90px', rowGap: '8px' }}>
                <Typography style={{ borderRadius: '10px ', backgroundColor:'#c3dfb2', textAlign: 'center', fontWeight: 'bold', fontSize: '25px'}}variant="body1" gutterBottom>Login</Typography>
                <TextField onChange={onChangeEmail} error={emailError.length > 0} helperText={emailError} value={email} label="Email" />
                <TextField style={{ marginBottom: '15px'}} onChange={onChangeSenha} type='password' error={senhaError.length > 0} helperText={senhaError} value={senha} label="Senha" />
                <Button onClick={logar} variant="contained" color="success">Entrar</Button>
                <Button onClick={() => handleClick('/')} variant="outlined" color="success" style={{color: '#006400', border: '1px solid #01411C'}}>Não tenho cadastro</Button>
                <Button onClick={() => handleClick('/esqueceu')} variant="outlined" color="success" style={{color: '#006400', border: '1px solid #01411C'}}>Recuperar senha</Button>
            </Box>
        </Box>
    );


}
export default Login;