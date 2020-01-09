

function incluirTempComentarioNegocio()
{
   var elemento = document.getElementById("txtcomentario");
   if (elemento.value.length > 0)
   {
        var contar = tempcomentario.length + 1;
        tempcomentario.push({'selecaoid': tempselecao[0].id, 'id': contar, 'comentario': elemento.value});
        elemento.value = "";
        carregarListaComentarios("comentarCompartilhar","listaComentarios2");
   }
}

function carregarListaResultadoPesquisar(elemento)
{
   var str = "";
   var lista = getVetorComentarioPesquisar();
   for(var i = 0; i < lista.length; i++)
   {
        str += "<p>"+lista[i]+"</p>";
   }
   document.getElementById("totalizadores").innerHTML=str;
}

function carregarListaComentarios(tela, nomeElemento)
{
  var str="";
  for(var i = 0; i < tempcomentario.length; i++)
  {
     if (tela=="comentarCompartilhar")
     {
         str += "<p>" + tempcomentario[i].comentario + "</p><button class='w3-btn w3-border w3-teal' onclick='editarTempComentarioNegocio("+tempcomentario[i].id+")'>Editar</button><button class='w3-btn w3-border w3-teal' onclick='compartilharTempComentarioNegocio("+tempcomentario[i].id+")'>Compartilhar</button>";
     } else {
         str += "<p>" + tempcomentario[i].comentario + "</p>";
     }
  }
  document.getElementById(nomeElemento).innerHTML = str;
}

function excluirTempComentarioNegocio(posicao)
{
  document.getElementById("txtcomentario").value = "";
  w3.addClass("#btnExcluirComentario","w3-disabled");
}

function editarTempComentarioNegocio(posicao)
{
  document.getElementById("txtcomentario").value = tempcomentario[posicao-1].comentario;
  var idantigo = posicao;
  var vetornovo=[];
  for(var i=0; i<tempcomentario.length; i++)
  {
     if (tempcomentario[i].id!=idantigo)
     {
         vetornovo.push({'selecaoid': tempcomentario[i].selecaoid, 'id': tempcomentario[i].id, 'comentario': tempcomentario[i].comentario});
     }
  }
  tempcomentario=vetornovo;
  carregarListaComentarios("comentarCompartilhar","listaComentarios2");
  w3.removeClass("#btnExcluirComentario","w3-disabled");
}

function compartilharTempVersoComentarioNegocio()
{
   var str = "";
   for(var i = 0; i < tempmarcacao.length; i++)
   {
      var b = tempmarcacao[i].livro;
      var c = tempmarcacao[i].capitulo;
      var v = tempmarcacao[i].verso;
      str += enderecoVersoCompartilhar(b,c,v)+"  "+extrairVerso(b,c,v);
   }
   if (tempcomentario.length > 0)
   {
     for(var i = 0; i < tempcomentario.length; i++)
     {
        var comentario = tempcomentario[i].comentario;
        str += comentario;
     }
   }
   if (str.length > 0)
   {
     window.plugins.socialsharing.share(str);
   }
}


function compartilharTempComentarioNegocio(posicao)
{
  var str = tempcomentario[posicao-1].comentario;
  window.plugins.socialsharing.share(str);
}

function compartilharEComentarioNegocio(selid, id)
{
  var cc="";
  for(var i=0; i<eComentario.length; i++){
     if(eComentario[i].selecaoid == selid && eComentario[i].id == id)
     {
       cc = eComentario[i].comentario;
       break;
     }
  }
  if (cc.length > 0)
  {
    window.plugins.socialsharing.share(cc);
  }
}