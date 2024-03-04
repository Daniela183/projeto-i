import { Button, Box } from '@mui/material';
import { useNavigate } from "react-router-dom";
//import { useState, useEffect } from 'react';

import Saudacao from "../secoes/img/saudacao.jpg"
import Familia from "../secoes/img/familia.jpg"
import Calendar from "../secoes/img/calendar.jpg"
import Cor from "../secoes/img/cores.jpg"



function NivelBasico() {
    const navigate = useNavigate()

    const handleClick = (rota) => {
        navigate(rota);
    };


    return (
        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: '	#aee2ff', minHeight: '100vh' }}>
          
            <Box style={{display:'flex', flexDirection: 'column'}}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px', margin: '15px'}}>
                    <img onClick={() => handleClick('/saudacoes')} style={{ width: '30vh', height: '30vh', marginBottom: '15px' }} src={Saudacao} />
                
                    <img onClick={() => handleClick('/familia')} style={{ width: '30vh', height: '30vh', marginBottom: '15px' }} src={Familia}/>
                </Box>
            </Box>
            <Box style={{display:'flex', flexDirection: 'column'}}>
                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px', margin: '15px' , rowGap: '8px' }}>
                    <img onClick={() => handleClick('/calendario')} style={{ width: '30vh', height: '30vh', marginBottom: '15px' }} src={Calendar} />
                
                    <img onClick={() => handleClick('/cor')} style={{ width: '30vh', height: '30vh', marginBottom: '15px' }} src={Cor} />
                </Box>
            </Box>
            <Box style={{ display: 'flex', flexDirection: 'column', width: '250px', marginTop: '90px'}}>
                <Button onClick={() => handleClick('/home')} variant="contained" color="primary" >Voltar para home</Button>
            </Box>
        </Box>
    );


}
export default NivelBasico;
/**
 * style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
 *  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
 */