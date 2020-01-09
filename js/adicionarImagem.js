var meutexto = "";

function setMeuTexto(valor) { meutexto = valor; }
function getMeuTexto() { return meutexto; }


function carregarTelaAdicionarImagem(numeroTela){
    for(var i=1; i <=3 ; i++) {
        if (i!=numeroTela) {
            esconderFerramentas(i);
        }
    }
    mostrarFerramentas(numeroTela);
    abrirTela('telaAdicionarImagem'+numeroTela);
}

function esconderFerramentas(numeroTela)
{
    document.getElementById("ferramentas"+numeroTela).style.display = "none";
}

function mostrarFerramentas(numeroTela)
{
    var idCanvasTela2 = "cvFonte";
    var idCanvasTela3 = "cvPosicao";

    if (numeroTela == 2)
    {

    }
    setMeuTexto(getTextoEscolhidoParaImagem());
    document.getElementById("ferramentas"+numeroTela).style.display = "block";
}

function mostrarControles()
{
    document.getElementById("btv1").style.display = "block";
    document.getElementById("btf1").style.display = "block";
    document.getElementById("btv2").style.display = "block";
    document.getElementById("btf2").style.display = "block";
    document.getElementById("btv3").style.display = "block";
    document.getElementById("btf3").style.display = "block";
}

function esconderControles()
{
    document.getElementById("btv1").style.display = "none";
    document.getElementById("btf1").style.display = "none";
    document.getElementById("btv2").style.display = "none";
    document.getElementById("btf2").style.display = "none";
    document.getElementById("btv3").style.display = "none";
    document.getElementById("btf3").style.display = "none";
}

compartilharImagem=function(){

}

camera=function(){

}
