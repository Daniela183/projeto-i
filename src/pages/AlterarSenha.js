import { TextField, Button, Checkbox, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { alterarSenha } from '../lib/api/gerenciarConta';

function AlterarSenha() {
    const navigate = useNavigate();

    const [senha, setSenha] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [repitaSenha, setRepitaSenha] = useState('');

    const [senhaError, setSenhaError] = useState('');
    const [novaSenhaError, setNovaSenhaError] = useState('');
    const [repitaSenhaError, setRepitaSenhaError] = useState('');

    const string = localStorage.getItem('user')
    const user = JSON.parse(string)

    

    const handleClick = (rota) => {
        navigate(rota);
    };

    const sen = () => {

        const senhaValida = senha.length > 6;
        const novaSenhaValida = novaSenha.length > 6;
        const repitaSenhaValida = novaSenhaValida && (repitaSenha === novaSenha);
        

        setSenhaError('');
        setNovaSenhaError('');
        setRepitaSenhaError('');

        if (senhaValida && novaSenhaValida && repitaSenhaValida) {
            const enviar = {
                senha,
                novaSenha,
                repitaSenha
            }
            const retorno = alterarSenha(novaSenha);            
            if(retorno.sucesso){
                navigate('/login');
            }else {
                if(retorno.error === 'senha') setSenhaError('Senha incorreta');
                if(retorno.error === 'novaSenha') setNovaSenhaError('Senha incorreta');
            }
        }
        else {
            if (!senhaValida) {
                setSenhaError('Senha inválida')
            }
            if (!novaSenhaValida) {
                setNovaSenhaError('Nova senha não pode ser igual a senha')
            }
            if (!repitaSenhaValida) {
                setRepitaSenhaError('Senha não é igual a nova senha')
            }
        }
    }
    const onChangeSenha = (event) => {
        setSenha(event.target.value);
    }
    const onChangeNovaSenha = (event) => {
        setNovaSenha(event.target.value);
    }
    const onChangeRepitaSenha = (event) => {
        setRepitaSenha(event.target.value);
    }

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: '	#aee2ff', minHeight: '100vh' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', width: '250px', marginTop: '90px', rowGap: '8px' }}>
                <Typography style={{ borderRadius: '10px ', backgroundColor:'#8dc1ff', textAlign: 'center', fontWeight: 'bold', fontSize: '25px'}}variant="body1" gutterBottom>Alterar Senha</Typography>
                <TextField onChange={onChangeSenha} type='password' error={senhaError.length > 0} helperText={senhaError} value={senha} label="Senha" />
                <TextField onChange={onChangeNovaSenha} type='password' error={novaSenhaError.length > 0} helperText={novaSenhaError} value={novaSenha} label="Nova senha" />
                <TextField style={{ marginBottom: '15px'}} onChange={onChangeRepitaSenha} type='password' error={repitaSenhaError.length > 0} helperText={repitaSenhaError} value={repitaSenha} label="Repita senha" />
                <Button onClick={sen} variant="contained" color="primary">Enviar</Button>
                <Button onClick={() => handleClick('/configuracao')} variant="outlined" style={{border: '1px solid #23679e', color: '#000'}}>Voltar para Configurações</Button>
            </Box>
        </Box>
    );


}
export default AlterarSenha;