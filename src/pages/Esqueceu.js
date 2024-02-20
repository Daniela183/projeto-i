import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import {  useState } from 'react';
//import { alterarDados } from '../lib/api/gerenciarConta';

function Esqueceu() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const [emailError, setEmailError] = useState('');

    /*const string = localStorage.getItem('user')
    const user = JSON.parse(string) 

    useEffect(() => {
        setEmail(user.email);
    }, [])*/

    const eemail = () => {
        navigate("/esqueceu");
    };
    const voltarlog = () => {
        navigate('/login');
    };

    const log = () => {

        const emailValido = email.length > 5;

        setEmailError('');

        if (emailValido) {
            const enviar = {
                email
            }
            console.log(enviar)
        }
        else {
            if (!emailValido) {
                setEmailError('Informe um Email válido')
            }
        }
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }


    return (
        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#aee2ff', minHeight: '100vh' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', width: '250px', marginTop: '90px', rowGap: '8px' }}>
                <Typography style={{ borderRadius: '10px ', backgroundColor:'#8dc1ff', textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }} variant="body1" gutterBottom>Recuperar Senha</Typography>
                <Typography style={{ border: '10px ', backgroundColor:'#8dc1ff1', textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }} variant="body2" gutterBottom>Para recuperar a senha insira seu email no campo abaixo. </Typography>
                <TextField style={{ marginBottom: '15px' }} onChange={onChangeEmail} error={emailError.length > 0} helperText={emailError} value={email} label="Email" />
                <Button onClick={eemail} variant="contained" color="primary">Enviar Email</Button>
                <Button onClick={voltarlog} variant="outlined" color="primary" style={{color: '#000', border: '1px solid #23679e'}}>Voltar para Login</Button>
            </Box>
        </Box>
    );


}
export default Esqueceu;