import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";


function NivelAvancado() {
    const row = useNavigate()

    const handleClick = (rota) => {
        row(rota);
    };

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: '	#aee2ff', minHeight: '100vh' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', width: '250px', marginTop: '90px', rowGap: '8px' }}>
                <Button onClick={() => handleClick('/home')} variant="contained" color="primary" >Voltar para home</Button>
            </Box>
        </Box>
    );


}
export default NivelAvancado;