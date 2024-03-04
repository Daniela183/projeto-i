import { Button, Box, Grid, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
    const handleClick = (rota) => {
        navigate(rota);
    };

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#aee2ff', minHeight: '100vh' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', width: '800px', marginTop: '25px', rowGap: '8px' }}>
                <Box style={{ display: 'flex', justifyContent: 'flex-end' }}><Button onClick={() => handleClick('/')} variant="contained" color="primary">Voltar para Home</Button></Box>
                <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', columnGap: '5px'}}>
                <Typography style={{ borderRadius: '10px ', backgroundColor: '#8dc1ff', textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }} variant="body1" gutterBottom>Sobre a Libratização</Typography>
                <Typography style={{ border: 'solid #aee2ff 15px ', backgroundColor: '#aee2ff', justifyContent: 'center', textAlign:'justify', fontWeight: 'bold', fontSize: '20px' }}>Libratização é um site desenvolvido para auxiliar professores da educação infantil no ensino da Língua  Portuguesa como uma segunda língua aos seus alunos surdos. O site visa fornecer  apoio de forma inclusiva na alfabetização através do uso da tecnologia, apresentando novas formas de inovação, projetados em seus testes que serão aplicados ao estudante. 
Sua estrutura é dividida em níveis sendo eles nível básico, nível intermediário e nível avançado. Os níveis são separados em temas iguais, dos quais são: Saudações, Família, Calendário e Cores, se diferenciando no grau de dificuldade projetados em seus testes. 
O nível Básico apresenta conteúdo de alfabetização sobre temas básicos e iniciais de um possível processo de alfabetização.
O Nível Intermediário é a fixação dos conteúdos do nível básico através da escrita de palavras por meio da visualização do sinal em Libras.
O Nível Avançado tem como função a construção de frases que serão feitas com o auxílio da visualização do sinal em Libras como no nível intermediário
</Typography>
    </Box>
              </Box>  
    </Box>
    );
}

export default Home;