import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import Amarelo from "../../img/palavras/amarelo.png"
import Azul from "../../img/palavras/azul.png"
import Laranja from "../../img/palavras/laranja.png"

import Amarelog from "../../img/gif/amarelo.gif"
import Azulg from "../../img/gif/azul.gif"
import laranjag from "../../img/gif/laranja.gif"


function Cor() {
    const navigate = useNavigate();

    // Definir um array de objetos com as informações de cada imagem
    const images = [
        { id: 1, src: Amarelo, gifSrc: Amarelog },
        { id: 2, src: Azul, gifSrc: Azulg },
        { id: 3, src: Laranja, gifSrc: laranjag },
       
    ];

    const [currentImage, setCurrentImage] = useState(images[0].src); // Inicializar com a primeira imagem

    const handleClick = (rota) => {
        navigate(rota);
    };

    const handleImageClick = (image) => {
        if (currentImage === image.src) {
            setCurrentImage(image.gifSrc);
        } else {
            setCurrentImage(image.src);
        }
    };

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#aee2ff', minHeight: '100vh' }}>
            <Box style={{ display: 'dblock', width: 700, padding: 30 }}>
                <Typography style={{ borderRadius: '10px ', backgroundColor: '#8dc1ff', textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }} variant="body1" gutterBottom>Cores</Typography>
                <Carousel interval={null} >
                    {images.map(image => (
                        <Carousel.Item key={image.id}>
                            <img
                                className="d-block w-100"
                                src={currentImage === image.src ? image.src : image.gifSrc }
                                alt="Image"
                                onClick={() => handleImageClick(image)}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Box>
            <Box style={{ display: 'flex', flexDirection: 'column', width: '250px', marginTop: '90px', rowGap: '8px' }}>
                <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', columnGap: '5px', marginTop: '15px' }}>
                    <Button onClick={() => handleClick('/nivel-basico')} variant="contained" color="primary" >Voltar para nível básico</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Cor;

