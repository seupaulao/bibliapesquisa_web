
  function setMensagemDicionario(tipo, msg)
  {
    if (msg.length > 0)
    {
            document.getElementById("errodicionario").innerHTML="<h3>"+tipo+"</h3><p>"+msg+"</p>";
            w3.show("#errodicionario");
    } else {
            document.getElementById("errodicionario").innerHTML="&nbsp;";
            w3.hide("#errodicionario");
   }
  }

function limparDicionario()
{
        document.getElementById("textoPesquisaDicionario").value="";
        document.getElementById("saidaDicionario").innerHTML="";
        setMensagemDicionario("","");
}

function significadoDicionario(palavra)
{
        var elemento = document.getElementById("saidaDicionario");
        var achou = false;
        setMensagemDicionario("","");
        for(var i=0; i < base1.length; i++)
        {
            if (palavra.toLowerCase()==base1[i].palavra.trim().toLowerCase()){
                elemento.innerHTML = "<h3>" + palavra + "</h3><br>" + base1[i].texto + "<p>&nbsp;</p><p>&nbsp;</p>";
                achou = true;
                break;
            }
        }

        if (!achou) {
          for(var i=0; i < base2.length; i++)
          {
              if (palavra.toLowerCase()==base2[i].palavra.toLowerCase()){
                  elemento.innerHTML = "<h3>" + palavra + "</h3><br>" + base2[i].texto + "<p>&nbsp;</p><p>&nbsp;</p>";
                  achou = true;
                  break;
              }
          }
        }

        if (!achou) {
          setMensagemDicionario("ALERTA","Palavra n&atilde;o encontrada na base de dados.");
        }

  abrirTela('dicionario');
}

function pesquisarDicionario() {
        var busca = document.getElementById("textoPesquisaDicionario");
        significadoDicionario(busca.value);
}

function carregarDicionarioLetra(letra)
{
   var elemento = document.getElementById("listapalavras");
   str = "";
   for(var i = 0; i < base2.length; i++)
   {
        if (letra.toUpperCase() == base2[i].palavra[0].toUpperCase())
        {
           if (i % 2 == 0)
           {
             str += "<div class='w3-container w3-gray' onclick='significadoDicionario(\""+base2[i].palavra+"\")'>" +base2[i].palavra+ "</div>";
           } else {
             str += "<div class='w3-container w3-teal' onclick='significadoDicionario(\""+base2[i].palavra+"\")'>" +base2[i].palavra+ "</div>";
           }
        }
   }
   elemento.innerHTML=str+"<p>&nbsp;</p><p>&nbsp;</p>";
   abrirTela('dicionariolistapalavras');
}

function limparStrong(tipo)
{
  document.getElementById("numeroStrongg").value = "";
  document.getElementById("resultadoStrongG").innerHTML= "";

}

function pesquisarStrong(tipo)
{
  var num = parseInt(document.getElementById("numeroStrongg").value);
  if (num <= 0 || num > 5624)
  {
    document.getElementById("resultadoStrongG").innerHTML = '<font color="red"><b>Os numeros strong para grego devem estar no intervalo de 1 a 5624</b></font>';
  }

  var nacional = getNacionalidade()=='pt-BR';
  var s = '';
  if (nacional)
  {
    s = " <b>N&uacute;mero</b> : " + gregorefs[num-1].ref + "<br>" +
    " <b>Classe Gramatical</b> : " + gregorefs[num-1].psp + "<br>" +
    " <b>Pron&uacute;ncia</b> : " + gregorefs[num-1].tra + "<br>" +
    " <b>Original (Radical)</b> : " + gregorefs[num-1].orw + "<br>" +
    " <b>Significado</b> : " + gregorefs[num-1].def + "<br>";

  }
  else {
    s = " <b>Number</b> : " + gregokrefs[num-1].ref + "<br>" +
    " <b>Gramatical Class</b> : " + gregokrefs[num-1].psp + "<br>" +
    " <b>Pronunce</b> : " + gregokrefs[num-1].tra + "<br>" +
    " <b>Original</b> : " + gregokrefs[num-1].orw + "<br>" +
    " <b>Meaning</b> : " + gregokrefs[num-1].def + "<br>";
  }


  //gregorefs - palavras
  //gregorefx - referencia cruzada
  document.getElementById("resultadoStrongG").innerHTML = s;

}
