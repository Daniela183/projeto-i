import { Button, Box, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()

    const handleDeslogar = () => {
        localStorage.removeItem('status');
        localStorage.removeItem('user');
        navigate('/login')
    }
   

    const handleClick = (rota) => {
        navigate(rota);
    };

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#aee2ff', minHeight: '100vh' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', width: '250px', marginTop: '90px', rowGap: '8px' }}>
                <Box style={{ display: 'flex', justifyContent: 'flex-end' }}><Button size='small' onClick={() => handleClick('/configuracao')} variant="outlined body2" color="primary" style={{ color: '#000', border: '1px solid #23679e' }}>Configuração</Button></Box>
                <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', columnGap: '5px', marginTop: '15px' }}>
                    <Grid item xs={12}> <Button onClick={() => handleClick('/nivel-basico')} variant="contained" style={{ color: '#000' }}>Nível Básico</Button></Grid>
                    <Grid item xs={12}> <Button onClick={() => handleClick('/nivel-intermediario')} variant="contained" style={{ color: '#000' }}>Nível Intermediário</Button></Grid>
                    <Grid item xs={12}> <Button onClick={() => handleClick('/nivel-avancado')} variant="contained" style={{ color: '#000' }}>Nível Avançado</Button></Grid>
                </Box>
                <Button onClick={handleDeslogar} variant="contained" color="primary">Voltar para Login</Button>
            </Box>
        </Box>
    );
}

export default Home;