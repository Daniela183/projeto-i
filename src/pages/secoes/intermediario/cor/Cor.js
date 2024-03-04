import React, { useState } from 'react';
import { Button, Box, Typography, Input } from '@mui/material';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

import Amarelo from "../../img/gif/amarelo.gif"
import Azul from "../../img/gif/azul.gif"
import Laranja from "../../img/gif/laranja.gif"


function Cor() {
    const navigate = useNavigate();

    const gifs = [
        { id: 1, src: Amarelo, expectedText: "Amarelo" },
        { id: 2, src: Azul, expectedText: "Azul" },
        { id: 3, src: Laranja, expectedText: "Laranja" },
    ];

    const [currentGifIndex, setCurrentGifIndex] = useState(0);
    const [inputText, setInputText] = useState("");
    const [isTextCorrect, setIsTextCorrect] = useState(false);

    const handleClick = (rota) => {
        navigate(rota);
    };

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = () => {
        if (inputText.toLowerCase() === gifs[currentGifIndex].expectedText.toLowerCase()) {
            setIsTextCorrect(true);
        } else {
            setIsTextCorrect(false);
        }
    };

    const handleSelect = (selectedIndex, e) => {
        setCurrentGifIndex(selectedIndex);
        setIsTextCorrect(false);
    };
    return (
        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#aee2ff', minHeight: '100vh' }}>
            <Box style={{ display: 'dblock', width: 700, padding: 30 }}>
                <Typography style={{ borderRadius: '10px ', backgroundColor: '#8dc1ff', textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }} variant="body1" gutterBottom>Cores</Typography>
                <Carousel interval={null} activeIndex={currentGifIndex} onSelect={handleSelect}>
                    {gifs.map(gif => (
                        <Carousel.Item key={gif.id}>
                            <img
                                src={gif.src}
                                alt="Gif"
                                style={{ width: '700px', height: '400px' }}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Box>

            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#aee2ff', marginTop: '8px' }}>
                <Box style={{ display: 'flex', flexDirection: 'column', width: '250px', marginTop: '-40px', rowGap: '8px' }}>
                    <Box style={{ display: 'flex', flexDirection: 'row', columnGap: '5px', marginBottom: '280px' }}>
                        <Button onClick={() => handleClick('/nivel-intermediario')} variant="contained" color="primary" >Voltar para nível intermediário</Button>
                    </Box>
                </Box>
                <Box style={{ display: 'flex' }}>
                    <Input
                        placeholder="Digite aqui"
                        value={inputText}
                        onChange={handleInputChange}
                        style={{ backgroundColor: '#fff', marginBottom: '120px' }}
                    />
                    <Box style={{ display: 'flex', flexDirection: 'column', width: '100px' }}>
                        <Button onClick={handleSubmit} variant="contained" color="primary" style={{ flexDirection: 'row', marginLeft: '5px', marginBottom: '10px' }}>Verificar</Button>
                        {isTextCorrect ? <Typography style={{ color: 'green', marginLeft: '5px' }}>Correto!</Typography> : <Typography style={{ color: 'red', marginLeft: '5px' }}>Incorreto!</Typography>}
                    </Box>
                </Box>
            </Box>

        </Box>
    );
}

export default Cor;

