import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { alterarFoto } from '../lib/api/gerenciarConta';

function Configurar() {
    const row = useNavigate()
    const imagemInputRef = useRef(null);

    const [img, setImg] = useState('');

    const string = localStorage.getItem('user')
    const user = JSON.parse(string)

    useEffect(() => {
        setImg(user.imagem);
    }, [])

    const onClickAlterarImagem = () => {
        imagemInputRef.current.click();
    }

    const onChangeImg = (event) => {
        console.log(event.target.files)
        if (event.target.files.length === 0) {
            return;
        }
        const imagem = URL.createObjectURL(event.target.files[0]);
        setImg(imagem);
        alterarFoto(imagem);
    }

    const handleClick = (rota) => {
        row(rota);
    };

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#D0F0C0', minHeight: '100vh' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', width: '250px', marginTop: '90px', rowGap: '8px' }}>
                <Typography style={{ borderRadius: '10px ', backgroundColor:'#c3dfb2', textAlign: 'center', fontWeight: 'bold', fontSize: '20px', color: 'darkgreen'}} variant="body1" gutterBottom>Configurações</Typography>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <input ref={imagemInputRef} onChange={onChangeImg} type="file" style={{ display: 'none' }} />
                    <img onClick={onClickAlterarImagem} style={{ width: '80px', height: '80px', border: '2px solid black' , borderRadius: '40px', marginBottom: '15px' }} src={img || require('../img/iconn.PNG')} />
                    <Typography>{user.nome}</Typography>
                    <Typography>{user.email}</Typography>
                    <Typography>{user.telefone}</Typography>
                </Box>
                <Box style={{ display: 'flex', flexDirection: 'row', columnGap: '10px', marginTop: '15px' }}><Button onClick={() => handleClick('/alterarDados')} variant="contained" color="success">Alterar dados</Button>
                    <Button onClick={() => handleClick('/alterarSenha')} variant="contained" color="success" >Alterar senha</Button></Box>
                <Button onClick={() => handleClick('/home')} variant="contained" color="success" >Voltar para home</Button>
            </Box>
        </Box>
    );


}
export default Configurar;