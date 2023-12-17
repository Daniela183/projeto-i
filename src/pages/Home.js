import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Home() {
    const row = useNavigate()

    const handleDeslogar = () => {
        localStorage.removeItem('status');
        localStorage.removeItem('user');
        row('/login')
    }

    const handleClick = (rota) => {
        row(rota);
    };

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#D0F0C0', minHeight: '100vh' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', width: '250px', marginTop: '90px', rowGap: '8px' }}>
                <Box style={{ display: 'flex', justifyContent: 'flex-end' }}><Button size='small' onClick={() => handleClick('/configuracao')} variant="outlined body2"  color="success" style={{color: '#006400', border: '1px solid #01411C' }}>Configuração</Button></Box>
                <Typography style={{ borderRadius: '10px ', backgroundColor:'#c3dfb2', textAlign: 'center', fontWeight: 'bold', fontSize: '20px', color: 'darkgreen' }} variant="body1" gutterBottom>Você está na Home</Typography>
                <Button onClick={handleDeslogar} variant="contained" color="success">Voltar para Login</Button>
            </Box>
        </Box>
    );
}

export default Home;