

function carregarListaVersos(tela, nomeElemento)
{
  var str="";
  for(var i = 0; i < tempmarcacao.length; i++)
  {
     var b = tempmarcacao[i].livro;
     var c = tempmarcacao[i].capitulo;
     var v = tempmarcacao[i].verso;
     str += "<p>" + enderecoVerso(b,c,v)+"&nbsp;&nbsp;"+extrairVerso(b,c,v) + "</p>";
  }
  document.getElementById(nomeElemento).innerHTML = str;
}

detalharSelecaoTR=function (va,b,c,v)
{
  var el1 = document.getElementById("iddetalhartr");
  var endereco = b+'_'+c+'_'+v;
  var vetor=greekrefdireta[endereco];
  var saida="<ul class='w3-ul w3-hoverable'>";
  var vetow=[];
  for (var i=0; i<vetor.length; i++)
  {
     var chave=vetor[i];
     if (vetow.indexOf(chave) < 0)
     {
         var elm=greekrefs[parseInt(chave)-1];
         var saida2='';
            if(getNacionalidade()=='pt-BR')
            {
                saida += "<li><b><span class='w3-text-red'>Referencia</span>:</b>"+elm.ref;
                saida += "<br><b><span class='w3-text-blue'>Radical Original</span>:</b>"+elm.orw;
                saida += "<br><b><span class='w3-text-green'>Translitera&ccedil;&atilde;o</span>:</b>" + elm.tra;
                saida += "<br><b><span>Defini&ccedil;&atilde;o 1</span>:</b>" + elm.sho;
                saida += "<br><b><span>Defini&ccedil;&atilde;o 2</span>:</b>" + elm.def;
                saida += "<br><b><span>Fon&eacute;tica</span>:</b>" + elm.pho;
                saida += "<br><b><span>Gram&aacute;tica</span>:</b>" + elm.psp;
            } else {
                saida += "<li><b><span class='w3-text-red'>Reference</span>:</b>"+elm.ref;
                saida += "<br><b><span class='w3-text-blue'>Original Word</span>:</b>"+elm.orw;
                saida += "<br><b><span class='w3-text-green'>Transliteration</span>:</b>" + elm.tra;
                saida += "<br><b><span>Definition 1</span>:</b>" + elm.sho;
                saida += "<br><b><span>Definition 2</span>:</b>" + elm.def;
                saida += "<br><b><span>Phonetic</span>:</b>" + elm.pho;
                saida += "<br><b><span>Grammar</span>:</b>" + elm.psp;
            }
            for(var j=0; j<greekrefx[elm.ref].length; j++)
            {
               saida2+=greekrefx[elm.ref][j]+', ';
            }
            saida += "<br><b><span>Referencia Cruzada</span>:</b>" + saida2;
            saida += "</p></li>";
        vetow.push(chave);
     }
  }
  saida += "</ul><p>&nbsp;</p><p>&nbsp;</p>"

 el1.innerHTML=saida;
 abrirTelaDetalharTR();
}

function escreveMarcacaoTR(t1, va, b, c, v)
{
              return "<p>" + v + " : <span id='v"+v+"'><span onclick='detalharSelecaoTR("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
}

function escreveMarcacao(t1, va, b, c, v)
{
        var selecaoid = getIdESelecao(va, b, c, v);
        var selecaocor = getCorESelecao(selecaoid);

        if (tempselecao.length <= 0)
        {
          if (selecaoid >= 0)
          {
            return "<p>" + v + " : <span id='v"+v+"' class='w3-text-black' style='background-color:"+selecaocor+"'><span onclick='preselecao("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
          }
              return "<p>" + v + " : <span id='v"+v+"'><span onclick='preselecao("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
        } else {
              for(var i = 0; i < tempmarcacao.length ; i++)
              {
                 if (testeVersoTemp(tempmarcacao[i], va, b, c, v))
                 {
	                return "<p>" + v + " : <span id='v"+v+"' style='color: green; text-decoration: underline'><span onclick='preselecao("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
                 }
              }
              return "<p>" + v + " : <span id='v"+v+"'><span onclick='preselecao("+va+","+b+","+c+","+v+")'>" + t1 + "</span></span></p>";
        }
}

function preselecaocontem(temp, va, livro, cap, verso)
{
        var posicao = -1;
        for (var i = 0; i < temp.length ; i++)
        {
           if (testeVersoTemp(temp[i], va, livro, cap, verso))
           {
              posicao = i;
              break;
           }
        }
        return posicao;
}

//usado para fazer ou desfazer uma selecao (marcar/comparar/compartilhar um verso)
function preselecao(va, livro, cap, verso)
{
  if (tempselecao.length <= 0 && tempmarcacao.length <= 0)
  {
     tempselecao.push({'id':tempselecao.length,'cor':null});
     tempmarcacao.push({'selecaoid':tempselecao[0].id, 'id': tempmarcacao.length, 'versao':va, 'livro':livro, 'capitulo':cap, 'verso':verso});
     document.getElementById("marBtn").style.display = "block";
     document.getElementById("cmpBtn").style.display = "block";
     document.getElementById("shaBtn").style.display = "block";
  }
  else {
     var posicao = preselecaocontem(tempmarcacao, va, livro, cap, verso);
     if (posicao < 0)
     {
        tempmarcacao.push({'selecaoid':tempselecao[0].id, 'id':tempmarcacao.length, 'versao':va, 'livro':livro, 'capitulo':cap, 'verso':verso});
        tempmarcacao[tempmarcacao.length-1].id = tempmarcacao.length;
     } else {
        tempmarcacao.splice(posicao,1);
     }
     if (tempmarcacao.length <= 0)
     {
        tempselecao = [];
        document.getElementById("marBtn").style.display = "none";
        document.getElementById("cmpBtn").style.display = "none";
        document.getElementById("shaBtn").style.display = "none";
        closeNav();
     }
  }
 carregar();
}

function selecaoCorPicker()
{
  var elemento = document.getElementById("htmlColorPicker");
  tempselecao[0].cor = elemento.value;
}

function selecaoCor(cor)
{
  var elemento = document.getElementById("htmlColorPicker");
  elemento.value=cor;
  tempselecao[0].cor = cor;
  salvarMarcacaoComentarioTela();
}

function deselecaoCor()
{
  removerMarcacaoComentarioBanco(tempselecao,tempmarcacao,tempcomentario);
  posSalvarMarcacaoComentarioTela();
}



function retornaPadraoListaVersoComparar(nome, baseversao, tipo)
{
  var str="";
  str += "<div class='cabecalho w3-panel w3-lime'><h4>"+nome+"</h4></div>";
  for(var i = 0; i < tempmarcacao.length; i++)
  {
     var b = tempmarcacao[i].livro;
     var c = tempmarcacao[i].capitulo;
     var v = tempmarcacao[i].verso;
     if (tipo == 0)
     {
      str += "<p>" + enderecoVerso(b,c,v)+"&nbsp;&nbsp;"+extrairVersoBase(baseversao,b,c,v) + "</p>";
     } else {
      str += "<p>" + enderecoVerso(b,c,v)+"&nbsp;&nbsp;"+extrairVersoBaseTipo1(baseversao,b,c,v) + "</p>";
     }

  }
  return str;

}

function carregarListaVersosComparar(nomeElemento)
{
  var str = "";

  str += retornaPadraoListaVersoComparar("Biblia Livre 2018",nblv,0);
  str += retornaPadraoListaVersoComparar("Biblia Livre 2017",blv,0);
  str += retornaPadraoListaVersoComparar("Nova Vers&atilde;o Internacional",nvi,1);
  str += retornaPadraoListaVersoComparar("Almeida Atualizada",aa,1);
  str += retornaPadraoListaVersoComparar("Almeida Corrigida e Fiel",acf,1);
  str += retornaPadraoListaVersoComparar("King James Version",kjv,1);
  str += retornaPadraoListaVersoComparar("World English Bible",web,0);

  str += retornaPadraoListaVersoComparar("Français Bible",nfob,0);
  str += retornaPadraoListaVersoComparar("Reina Valera",nrv,0);


  document.getElementById(nomeElemento).innerHTML = str;
}
