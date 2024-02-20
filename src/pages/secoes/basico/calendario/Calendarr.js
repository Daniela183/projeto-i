import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import Segunda from "../../img/palavras/segunda.png";
import Terca from "../../img/palavras/terca.png";
import Quarta from "../../img/palavras/quarta.png";
import Quinta from "../../img/palavras/quinta.png";
import Sexta from "../../img/palavras/sexta.png";
import Sabado from "../../img/palavras/sabado.png";
import Domingo from "../../img/palavras/domingo.png"



function Calendarr() {
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
                            src={Segunda}
                            alt="Bom-dia Image 1"/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={Terca}
                            alt="Bom-dia Image 2"/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={Quarta}
                            alt="Boa-tarde Image 3"/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img 
                            className="d-block w-100"
                            src={Quinta}
                            alt="Boa-noite Image 3"/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={Sexta}
                            alt="Tchau Image 3"/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={Sabado}
                            alt="Tchau Image 3"/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={Domingo}
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

export default Calendarr;