import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { cadastrar } from '../lib/api/autenticar';
import ReactInputMask from 'react-input-mask';
//import { cadastrarItem, alterarItem, excluirItem } from '../lib/api/gerenciarlista';



function Registrar() {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [repSenha, setRepSenha] = useState('');

    const [nomeError, setNomeError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [telefoneError, setTelefoneError] = useState('');
    const [senhaError, setSenhaError] = useState('');
    const [repSenhaError, setRepSenhaError] = useState('');

    const handleClick = () => {
        navigate("/login");
    };

    /*const clickTemporario = () => {
        const itemFake = { id: 1}
        excluirItem(itemFake);
    }*/

    const formulario = () => {

        const nomeValido = nome.length > 0;
        const emailValido = email.length > 5;
        const telefoneValido = telefone.length === 14 && !telefone.includes('_');
        const senhaValida = senha.length > 6;
        const repSenhaValida = senhaValida && (repSenha === senha);

        setNomeError('');
        setEmailError('');
        setTelefoneError('');
        setSenhaError('');
        setRepSenhaError('');

        if (nomeValido && emailValido && telefoneValido && senhaValida && repSenhaValida) {
            const enviar = {
                nome,
                email,
                telefone,
                senha
            }
            const retorno = cadastrar(enviar); 
            if(retorno.sucesso){
            }else {
                if(retorno.error === 'email') setEmailError('Email já cadastrado');
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
            if (!senhaValida) {
                setSenhaError('Senha inválida')
            }
            if (!repSenhaValida) {
                setRepSenhaError('Senha precisa ser igual')
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
    const onChangeSenha = (event) => {
        setSenha(event.target.value);
    }
    const onChangeRepSenha = (event) => {
        setRepSenha(event.target.value);
    }

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#aee2ff', minHeight: '100vh' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', width: '250px', marginTop: '90px', rowGap: '8px' }}>
                <Typography style={{ borderRadius: '10px ', backgroundColor:'#8dc1ff', textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }} variant="body1" gutterBottom>Cadastrar</Typography>
                <TextField onChange={onChangeNome} inputProps={{ style: { textTransform: 'capitalize'}}} error={nomeError.length > 0} helperText={nomeError} value={nome} label="Nome" />
                <TextField onChange={onChangeEmail} error={emailError.length > 0} helperText={emailError} value={email} label="Email" />
                <ReactInputMask mask="(99) 9999-9999" onChange={onChangeTelefone} value={telefone}>
                <TextField  error={telefoneError.length > 0} helperText={telefoneError}  label="Telefone" />
                </ReactInputMask>
                <TextField onChange={onChangeSenha} type='password' error={senhaError.length > 0} helperText={senhaError} value={senha} label="Senha" />
                <TextField style={{ marginBottom: '15px'}} onChange={onChangeRepSenha} type='password' error={repSenhaError.length > 0} helperText={repSenhaError} value={repSenha} label="Repite a senha" />
                <Button onClick={formulario} variant="contained" color="primary">Enviar o formulário</Button>
                <Button onClick={handleClick} variant="outlined" color="primary" style={{color: '#000', border: '1px solid #23679e'}}>Já tenho cadastro</Button>
            </Box>
        </Box>
    );
}

export default Registrar;
