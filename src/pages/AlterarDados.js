import { TextField, Button, Checkbox, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { alterarDados } from '../lib/api/gerenciarConta';
import ReactInputMask from 'react-input-mask';

function AlterarDados() {
    const navigate = useNavigate();


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    

    const [nomeError, setNomeError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [telefoneError, setTelefoneError] = useState('');
   

    const string = localStorage.getItem('user')
    const user = JSON.parse(string)

    useEffect(() => {
        setNome(user.nome);
        setEmail(user.email);
        setTelefone(user.telefone);
    }, [])

    const handleClick = (rota) => {
        navigate(rota);
    };

    const dados = () => {

        const nomeValido = nome.length > 0;
        const emailValido = email.length > 5;
        const telefoneValido = telefone.length === 14 && !telefone.includes('_');
        
       
        setNomeError('');
        setEmailError('');
        setTelefoneError('');

        if (nomeValido && emailValido && telefoneValido) {          
            
            const retorno = alterarDados(nome, email, telefone);            
            if(retorno.sucesso){
                navigate('/configuracao');
            }else {
               
                if(retorno.error === 'nome') setNomeError('Nome inválido');
                if(retorno.error === 'email') setEmailError('Email inválido');
                if(retorno.error === 'telefone') setTelefoneError('Telefone inválido');
            }
        }
        else {
            
            if (!nomeValido) {
                setNomeError('O nome é obrigatório')
            }
            if (!emailValido) {
                setEmailError('Informe um Email válido')
            }
            if (!telefoneValido) {
                setTelefoneError('Informe um Telefone válido')
            }
        }
    }
    
    const onChangeNome = (event) => {
        setNome(event.target.value);
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const onChangeTelefone = (event) => {
        setTelefone(event.target.value);
    }

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#aee2ff', minHeight: '100vh' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', width: '250px', marginTop: '90px', rowGap: '8px' }}>
                <Typography style={{ borderRadius: '10px ', backgroundColor:'#8dc1ff', textAlign: 'center', fontWeight: 'bold', fontSize: '25px'}}variant="body1" gutterBottom>Alterar os Dados</Typography>
                <TextField onChange={onChangeNome} inputProps={{ style: { textTransform: 'capitalize'}}} error={nomeError.length > 0} helperText={nomeError} value={nome} label="Nome" />
                <TextField onChange={onChangeEmail} error={emailError.length > 0} helperText={emailError} value={email} label="Email" />
                <ReactInputMask mask="(99) 9999-9999" onChange={onChangeTelefone} value={telefone}>
                <TextField  error={telefoneError.length > 0} helperText={telefoneError}  label="Telefone" />
                </ReactInputMask>
                <Button onClick={dados} variant="contained" color="primary">Enviar</Button>
                <Button onClick={() => handleClick('/configuracao')} variant="outlined" color="primary" style={{color: '#000'}}>Voltar para Configurações</Button>
        
            </Box>
        </Box>
    );


}
export default AlterarDados;