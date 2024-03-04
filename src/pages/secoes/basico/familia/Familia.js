import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import Avo from "../../img/palavras/avó.png"
import Avô from "../../img/palavras/avo.png"
import Mae from "../../img/palavras/mae.png"
import Pai from "../../img/palavras/pai.png"
import Irmao from "../../img/palavras/irmao.png"
import Irma from "../../img/palavras/irma.png"

import Avog from "../../img/gif/avó.gif"
import Avvog from "../../img/gif/avô.gif"
import Maeg from "../../img/gif/mamae.gif"
import Paig from "../../img/gif/pai.gif"
import Irmaog from "../../img/gif/irmão.gif"
import Irmag from "../../img/gif/irmã.gif"

function Familia() {
    const navigate = useNavigate();

    // Definir um array de objetos com as informações de cada imagem
    const images = [
        { id: 1, src: Avo, gifSrc: Avog },
        { id: 2, src: Avô, gifSrc: Avvog },
        { id: 3, src: Mae, gifSrc: Maeg },
        { id: 4, src: Pai, gifSrc: Paig },
        { id: 5, src: Irmao, gifSrc: Irmaog },
        { id: 6, src: Irma, gifSrc: Irmag }
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
                <Typography style={{ borderRadius: '10px ', backgroundColor: '#8dc1ff', textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }} variant="body1" gutterBottom>Família</Typography>
                <Carousel interval={null} >
                    {images.map(image => (
                        <Carousel.Item key={image.id}>
                            <img
                                className="d-block w-100"
                                src={currentImage === image.src ? image.src : image.gifSrc}
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

export default Familia;

