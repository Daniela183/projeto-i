function mudarImg(elemento) {
    if (elemento.id === "carr1") {
        elemento.src = "../../img/gif/oig.gif";
        elemento.id = "carr1fundo1";
        return "carr1";
    }
    else {
        (elemento.id = "carr1fundo1");
        elemento.src = "../../img/palavras/oi.png";
        elemento.id = "carr1fundo2";
        return "carr1fundo1";
    }
}
export default mudarImg;
/*function mudaImg(elemento){
    if(elemento.id == "carr2"){
        elemento.src="../../../img/gif/Bom-dia.gif";
        elemento.id="carr2fundo";       
    }
    else{
        (elemento.id=="carr1fundo1")
            elemento.src="../../../img/palavras/bomdia.png";
            elemento.id="carr1fundo2";
    }     
}
function mudImg(elemento)
{
    if(elemento.id == "carr3"){
        elemento.src="../../../img/gif/Boa-tarde.gif";
        elemento.id="carr3fundo";       
    }
    else{
        (elemento.id=="carr1fundo1")
            elemento.src="../../../img/palavras/boatarde.png";
            elemento.id="carr1fundo2" ; 
    }     
}
function muImg(elemento)
{
    if(elemento.id == "carr3"){
        elemento.src="../../../img/gif/Boa-noite.gif";
        elemento.id="carr3fundo";       
    }
    else{
        (elemento.id=="carr1fundo1")
            elemento.src="../../../img/palavras/boanoite.png";
            elemento.id="carr1fundo2" ; 
    }     
}
function mImg(elemento)
{
    if(elemento.id == "carr3"){
        elemento.src="../../../img/gif/Obrigado.gif";
        elemento.id="carr3fundo";       
    }
    else{
        (elemento.id=="carr1fundo1")
            elemento.src="../../../img/palavras/obrigada.png";
            elemento.id="carr1fundo2" ; 
    }     
}
function mudIm(elemento)
{
    if(elemento.id == "carr3"){
        elemento.src="../../../img/gif/Desculpa-.gif";
        elemento.id="carr3fundo";       
    }
    else{
        (elemento.id=="carr1fundo1")
            elemento.src="../../../img/palavras/desculpa.png";
            elemento.id="carr1fundo2" ; 
    }     
}
function mudI(elemento)
{
    if(elemento.id == "carr3"){
        elemento.src="../../../img/gif/TCHAU.gif";
        elemento.id="carr3fundo";       
    }
    else{
        (elemento.id=="carr1fundo1")
            elemento.src="../../../img/palavras/tchau.png";
            elemento.id="carr1fundo2" ; 
    }     
}*/