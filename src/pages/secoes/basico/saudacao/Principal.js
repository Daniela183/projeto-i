import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import Oi from "../../img/palavras/oi.png"
import BomDia from "../../img/palavras/bomdia.png"
import BoaTarde from "../../img/palavras/boatarde.png"
import BoaNoite from "../../img/palavras/boanoite.png"
import Tchau from "../../img/palavras/tchau.png"

import Oig from "../../img/gif/oi.gif"

function Principal() {
    const navigate = useNavigate()
  
    const handleClick = (rota) => {
        navigate(rota);
    };


    return (
        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#aee2ff', minHeight: '100vh' }}>
            
            <Box style={{ display: 'dblock', width: 700, padding: 30 }}>
            <Typography style={{ borderRadius: '10px ', backgroundColor: '#8dc1ff', textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }} variant="body1" gutterBottom>Saudações</Typography>
                <Carousel interval={null}>
                <Carousel.Item >
                        <img id='carr1'
                            className="d-block w-100"
                            src={Oi}
                            alt="Bom-dia Image 1"/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={BomDia}
                            alt="Bom-dia Image 2"/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={BoaTarde}
                            alt="Boa-tarde Image 3"/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img 
                            className="d-block w-100"
                            src={BoaNoite}
                            alt="Boa-noite Image 3"/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={Tchau}
                            alt="Tchau Image 3"/>
                    </Carousel.Item>
                </Carousel>
            </Box>
            <Box style={{ display: 'flex', flexDirection: 'column', width: '250px', marginTop: '90px', rowGap: '8px' }}>
                
                <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', columnGap: '5px', marginTop: '15px' }}>
                    <Button onClick={() => handleClick('/nivel-basico')} variant="contained" color="primary" >Voltar para nível basico</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Principal;