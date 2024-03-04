import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import Oi from "../../img/palavras/oi.png"
import BomDia from "../../img/palavras/bomdia.png"
import BoaTarde from "../../img/palavras/boatarde.png"
import BoaNoite from "../../img/palavras/boanoite.png"
import Tchau from "../../img/palavras/tchau.png"

import Oig from "../../img/gif/oi.gif"
import BomDiag from "../../img/gif/Bom-dia.gif"
import BoaTardeg from "../../img/gif/Boa-tarde.gif"
import BoaNoiteg from "../../img/gif/Boa-noite.gif"
import Tchaug from "../../img/gif/tchau.gif"


function Saudacao() {
    const navigate = useNavigate();

    // Definir um array de objetos com as informações de cada imagem
    const images = [
        { id: 1, src: Oi, gifSrc: Oig },
        { id: 2, src: BomDia, gifSrc: BomDiag },
        { id: 3, src: BoaTarde, gifSrc: BoaTardeg },
        { id: 4, src: BoaNoite, gifSrc: BoaNoiteg },
        { id: 5, src: Tchau, gifSrc: Tchaug },
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
                <Typography style={{ borderRadius: '10px ', backgroundColor: '#8dc1ff', textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }} variant="body1" gutterBottom>Saudações</Typography>
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

export default Saudacao;



/*import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import Oi from "../../img/palavras/oi.png"
import BomDia from "../../img/palavras/bomdia.png"
import BoaTarde from "../../img/palavras/boatarde.png"
import BoaNoite from "../../img/palavras/boanoite.png"
import Tchau from "../../img/palavras/tchau.png"

import Oig from "../../img/gif/oi.gif"
import BomDiag from "../../img/gif/Bom-dia.gif"
import BoaTardeg from "../../img/gif/Boa-tarde.gif"
import BoaNoiteg from "../../img/gif/Boa-noite.gif"
import Tchaug from "../../img/gif/tchau.gif"

function Saudacao() {
    const navigate = useNavigate();

    // Definir um array de objetos com as informações de cada imagem
    const images = [
        { id: 1, src: Oi, gifSrc: Oig },
        { id: 2, src: BomDia, gifSrc: BomDiag },
        { id: 3, src: BoaTarde, gifSrc: BoaTardeg },
        { id: 4, src: BoaNoite, gifSrc: BoaNoiteg },
        { id: 5, src: Tchau, gifSrc: Tchaug },
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
                <Typography style={{ borderRadius: '10px ', backgroundColor: '#8dc1ff', textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }} variant="body1" gutterBottom>Saudações</Typography>
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

export default Saudacao;


/*import { Button, Box, Typography } from '@mui/material';
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

export default Principal;*/