var vetorPlanoEstudo=[];
var posicaoPlanoEstudo;
var ultimoSelid;
var modoPlanoEstudo = 0;

getVetorPlanoEstudo=function(){ return vetorPlanoEstudo; }
setVetorPlanoEstudo=function(valor) { vetorPlanoEstudo=valor; }
getPosicaoPlanoEstudo=function() { return posicaoPlanoEstudo; }
setPosicaoPlanoEstudo=function(valor) { posicaoPlanoEstudo=valor; }
getUltimoSelid=function() { return ultimoSelid; }
setUltimoSelid=function(valor) { ultimoSelid=valor; }

var book;
var cap;
var vers;
var nomeversao;
var nomecap;
var b1;
var n1;
var versaoAtual=0;
var base="";
var gversos;
var buscasimples;
var bbuscasimples=false;
var versaoMarcacao;
var livroMarcacao;
var capituloMarcacao;
var versoMarcacao;

function getCapituloMain(){   return cap;}
function getLivroMain(){    return book;}
function getVersiculoMain(){    return vers;}
function getVersaoAtualMain(){    return versaoAtual;}
function setCapituloMain(valor){    cap=valor;}
function setLivroMain(valor){    book=valor;}
function setVersiculoMain(valor){    vers=valor;}
function setVersaoAtualMain(valor){    versaoAtual=valor;}

//criar objeto {idioma:'pt', livros:{1: {sigla:'GEN', livro:'Genesis',caps:50, testamento:'velho'}}}
var livrospt=["G&ecirc;nesis","&Ecirc;xodo","Lev&iacute;tico","N&uacute;meros","Deuteron&ocirc;mio","Josu&eacute;","Ju&iacute;zes","Rute","1 Samuel", "2 Samuel", "1 Reis", "2 Reis",
                        "1 Cr&ocirc;nicas", "2 Cr&ocirc;nicas", "Esdras", "Neemias", "Ester", "J&oacute;",
                        "Salmos", "Prov&eacute;rbios","Eclesiastes","C&acirc;nticos","Isa&iacute;as","Jeremias","Lamenta&ccedil;&otilde;es de Jeremias","Ezequiel","Daniel","Os&eacute;ias","Joel","Am&oacute;s","Obadias",
                        "Jonas","Miqu&eacute;ias","Naum","Habacuque","Sofonias","Ageu","Zacarias","Malaquias","Mateus","Marcos","Lucas","Jo&atilde;o","Atos","Romanos","1 Cor&iacute;ntios","2 Cor&iacute;ntios","G&aacute;latas","Ef&eacute;sios","Filipenses","Colossenses","1 Tessalonicenses","2 Tessalonicenses",
                       "1 Tim&oacute;teo","2 Tim&oacute;teo", "Tito", "Filemom", "Hebreus", "Tiago", "1 Pedro", "2 Pedro","1 Jo&atilde;o","2 Jo&atilde;o","3 Jo&atilde;o",
                       "Judas","Revelação"];
var livroseng=['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi', 'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'];
//var livrosVelhoEng=['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi'];
//var livrosNovoEng=['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John', 'Jude', 'Revelation'];
var abreveng=['Gen', 'Exo', 'Lev', 'Num', 'Deu', 'Jos', 'Jdg', 'Rut', '1Sa', '2Sa', '1Ki', '2Ki', '1Ch', '2Ch', 'Ezr', 'Neh', 'Est', 'Job', 'Psa', 'Pro', 'Ecc', 'Sng', 'Isa', 'Jer', 'Lam', 'Ezk', 'Dan', 'Hos', 'Jol', 'Amo', 'Oba', 'Jon', 'Mic', 'Nam', 'Hab', 'Zep', 'Hag', 'Zec', 'Mal', 'Mat', 'Mrk', 'Luk', 'Jhn', 'Act', 'Rom', '1Co', '2Co', 'Gal', 'Eph', 'Php', 'Col', '1Th', '2Th', '1Ti', '2Ti', 'Tit', 'Phm', 'Heb', 'Jas', '1Pe', '2Pe', '1Jn', '2Jn', '3Jn', 'Jud', 'Rev'];
var abrevpt=['Gn','Êx','Lv','Nm','Dt','Js','Jz','Rt','1Sm','2Sm','1Rs','2Rs','1Cr','2Cr','Ed','Ne','Et','Jó','Sl','Pv','Ec','Ct','Is','Jr','Lm','Ez','Dn','Os','Jl','Am','Ob','Jn','Mq','Na','Hb','Sf','Ag','Zc','Ml','Mt','Mc','Lc','Jo','At','Rm','1Co','2Co','Gl','Ef','Fp','Cl','1Ts','2Ts','1Tm','2Tm','Tt','Fm','Hb','Tg','1Pe','2Pe','1Jo','2Jo','3Jo','Jd','Ap'];
var livs=['GEN','EXO','LEV','NUM','DEU','JOS','JDG','RUT','1SA','2SA','1KI','2KI','1CH','2CH','EZR','NEH','EST','JOB','PSA','PRO','ECC','SNG','ISA','JER','LAM','EZK','DAN','HOS','JOL','AMO','OBA','JON','MIC','NAM','HAB','ZEP','HAG','ZEC','MAL','MAT','MRK','LUK','JOH','ACT','ROM','1CO','2CO','GAL','EPH','PHP','COL','1TH','2TH','1TI','2TI','TIT','PHM','HEB','JAS','1PE','2PE','1JN','2JN','3JN','JUD','REV'];

//padrao a partir de 2018 11 14
var nv_livros = ['1ES', 'ZEP', 'BAR', 'ROM', 'HOS', 'JOB', 'FRT', 'SIR', 'PHP', '2ES', 'TIT', 'NEH', 'EXO', 'NAM', 'AMO', 'JER', 'MAN', 'ISA', 'JOL', '3MA', 'EZK', 'DEU', 'JOH', '1JN', 'DAN', 'LUK', 'NUM', 'GEN', 'SNG', '1TI', '1KI', '2TH', 'HEB', 'LAM', 'GLO', 'JAS', '2KI', 'REV', 'PS2', '2PE', 'TOB', 'MRK', 'JOS', '2CO', 'JDT', 'COL', 'JUD', 'EST', 'RUT', 'PRO', 'EPH', 'JON', '1CH', '2SA', '1MA', 'GAL', '1CO', 'ACT', '1SA', 'HAB', '2MA', 'DAG', 'ECC', 'JDG', '2CH', '1TH', 'LEV', 'ESG', 'HAG', 'OBA', 'PHM', 'PSA', '2TI', '4MA', '2JN', 'MIC', 'ZEC', 'WIS', 'MAT', 'MAL', '1PE', 'EZR', '3JN']
var nv_capitulos = {'SIR': 51, '1KI': 22, 'BAR': 7, 'NEH': 13, 'GLO': 1, 'TIT': 3, 'EXO': 40, 'JDG': 21, 'MRK': 16, 'REV': 22, 'DEU': 34, 'NAM': 3, 'TOB': 14, '1ES': 9, '2MA': 15, '2PE': 3, 'EPH': 6, 'ACT': 28, 'PS2': 2, 'JDT': 16, 'ISA': 66, 'LUK': 24, '2KI': 25, '2SA': 24, '1TI': 6, 'JOS': 24, 'ECC': 12, 'ROM': 16, 'AMO': 9, 'DAN': 12, '1PE': 5, 'COL': 4, 'JOB': 42, 'NUM': 36, '3JN': 1, '1TH': 5, 'MIC': 7, 'WIS': 19, 'JOL': 3, 'GEN': 50, 'JON': 4, 'ZEC': 14, 'JER': 52, '1SA': 31, 'EST': 10, '1JN': 5, 'LAM': 5, '2TI': 4, 'HAB': 3, 'JAS': 5, '2TH': 3, 'ESG': 10, 'HAG': 2, 'DAG': 15, 'HOS': 14, 'HEB': 13, 'FRT': 1, '2JN': 1, 'OBA': 1, 'JOH': 21, 'MAT': 28, 'SNG': 8, '1CH': 29, 'JUD': 1, 'PHM': 1, '2ES': 16, 'PSA': 150, 'GAL': 6, 'EZR': 10, 'MAL': 4, '4MA': 18, 'ZEP': 3, '2CO': 13, '2CH': 36, 'RUT': 4, 'LEV': 27, 'EZK': 48, '1MA': 16, 'PHP': 4, '1CO': 16, 'PRO': 31, '3MA': 7, 'MAN': 1}



tempselecao=[];
tempmarcacao=[];
tempcomentario=[];

var semanapt=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
var semanaen=['Sunday','Monday','Tuesday','Wedsneday','Thursday','Friday','Saturday'];

function numeroCapitulos()
{
   return nv_capitulos[livs[getLivroMain()-1]];
}

function buscar()
{
   w3.hide("#telaModalControlesLeitura");
   bbuscasimples=true;
   carregar();
}



function mostrarLivros()
{
	 var elemento = document.getElementById("ltextlivros");
   var texto = "<div class='w3-row'>";
   var cores = ['w3-cyan','w3-gray'];
   var c = 1;
   var d = 0;
   var nacional = getNacionalidade()=='pt-BR';
   //texto += nacional ? "<li><h3>Velho Testamento</h4></li>" : "<li><h4>Old Testament</h3></li>";
	 for (var i = 0; i < 66; i+=1)
	 {
      var temp1 = "<div onclick='irparalivro("+parseInt(c)+")' class='w3-col w3-btn " + cores[d] + " w3-border s4 w3-padding-16'>" + (nacional ? livrospt[i] : livroseng[i]) + "</div>";
      texto += temp1;
      if (c % 3 == 0)
      {
         texto += "</div><div class='w3-row'>"
      }
      c+=1;
      d+=1;
      if (d >= cores.length) d = 0;
	 }
	 texto += "</div>";
	 elemento.innerHTML = texto ;
}

function mostrarCapitulos()
{
var elemento = document.getElementById("ltextcapitulos");
	var elemento1 = document.getElementById("idtxtnr1");
   elemento1.innerHTML = livrospt[getLivroMain()-1];
   var c = 1;
	var texto = "<div class='w3-row'>";
   
         for (var i = 0 ; i < numeroCapitulos(); i+=1)
         {
		  texto += "<div class='w3-col s3 w3-btn w3-padding-16 w3-gray w3-border' onclick='irparacapitulo("+(i+1)+")'>" + contarZeros((i+1),(i+1)) + "</div>";
		  if (c % 4 == 0)
		  {
		  	texto += "</div><div class='w3-row'>";
      }
      c += 1;
         }
	texto += "</div>";
	elemento.innerHTML = texto;
}

/*
function mostrarVersos()
{
	 var elemento = document.getElementById("ltextversos");
	 var elemento1 = document.getElementById("idtxtnr2");
     elemento1.innerHTML =  livrospt[getLivroMain()-1] + "&nbsp;" + getCapituloMain();

	 var texto = "<div class='w3-row'>";
	 var index = 1;
    var bbase = getNacionalidade() == 'pt-BR' ? blv : web;
	   while (blv[getLivroMain()].capitulos[getCapituloMain()][index] != undefined)
	   {
		  texto += "<div class='w3-col s3 w3-btn w3-padding-16 w3-gray w3-border' onclick='irpara("+index+")'>" + contarZeros(getCapituloMain(),index) + "</div>";
		  if (index % 4 == 0)
		  {
			texto += "</div><div class='w3-row'>";
		  }
		  index += 1;
	   }
	texto += "</div>";
	elemento.innerHTML = texto;
}


function mostrarLivrosTR()
{
   var nacional = getNacionalidade()=='pt-BR';
	 var elemento = document.getElementById("ltextlivrostr");
	 var texto = "<div class='w3-row'>";
   var c = 39;
   var cores = ['w3-cyan','w3-gray'];
   var d = 0;

   //texto += "<li><h4>"+(nacional?"Novo Testamento":"New Testament")+"</h4></li>";
	 for (var i = 40; i < livrospt.length; i++)
	 {
		 texto += "<div class='w3-col w3-btn " + cores[d] + " w3-border s6' onclick='irparalivrotr("+parseInt(c+1)+")'><p>&nbsp;</p>" + (nacional ? livrospt[i] : livroseng[i]) + "<p>&nbsp;</p></div>";
     c+=1;
     d+=1;
     if (d > cores.length) d=0;
     if (i % 2 == 0)
     {
        texto += "</div><div class='w3-row'>";
     }
  }
	 texto += "</div>";
	 elemento.innerHTML = texto;
}

function mostrarLivrosWLC()
{
   var nacional = getNacionalidade()=='pt-BR';
	 var elemento = document.getElementById("ltextlivrostr");
	 var texto = "<div class='w3-row'>";
	 var c = 0;
   var cores = ['w3-cyan','w3-gray'];
   var d = 0;
   //texto += "<li><h4>"+(nacional?"Velho Testamento":"Old Testament")+"</h4></li>";
	 for (var i = 0; i < 40; i++)
	 {
		 texto += "<div class='w3-col w3-btn " + cores[d] + " w3-border s6' onclick='irparalivrowlc("+parseInt(c+1)+")'><p>&nbsp;</p>" + (nacional ? livrospt[i] : livroseng[i]) + "<p>&nbsp;</p></div>";
		 c+=1;
     d+=1;
     if (d > cores.length) d=0;
     if (i % 2 == 0)
     {
        texto += "</div><div class='w3-row'>";
     }
  }
	 texto += "</div>";
	 elemento.innerHTML = texto;
}





function mostrarCapitulosTR()
{
	 var elemento = document.getElementById("ltextcapitulostr");
	 var texto = "<div>";

         for (var i = 0 ; i < tr[getLivroMain()].qtecapitulos; i+=1)
         {
		  texto += "<button class='w3-button w3-circle w3-gray' onclick='irparacapitulotr("+(i+1)+")'>" + contarZeros((i+1),(i+1)) + "</button>&nbsp;";
		  if (i % 4 == 0)
		  {
			texto += "</div><div>";
		  }
         }
	texto += "</div>";
	elemento.innerHTML = texto;
}

function mostrarVersosTR(cap)
{
	 var elemento = document.getElementById("ltextversostr");
	 var texto = "<div>";
	 var index = 1;
var bbase = getNacionalidade() == 'pt-BR' ? blv : web;
	   while (bbase[getLivroMain()].capitulos[getCapituloMain()][index] != undefined)
	   {
		  texto += "<button class='w3-button w3-circle w3-gray' onclick='irparatr("+index+")'>" + contarZeros(cap,index) + "</button>&nbsp;";
		  if (index % 4 == 0)
		  {
			texto += "</div><div>";
		  }
		  index += 1;
	   }
	texto += "</div>";
	elemento.innerHTML = texto;
}


function mostrarCapitulosWLC()
{
	 var elemento = document.getElementById("ltextcapitulostr");
	 var texto = "<div>";
         var bbase = getNacionalidade() == 'pt-BR' ? blv : web;
         for (var i = 0 ; i < bbase[getLivroMain()].qtecapitulos; i+=1)
         {
		  texto += "<button class='w3-button w3-circle w3-gray' onclick='irparacapitulowlc("+(i+1)+")'>" + contarZeros((i+1),(i+1)) + "</button>&nbsp;";
		  if (i % 4 == 0)
		  {
			texto += "</div><div>";
		  }
         }
	texto += "</div>";
	elemento.innerHTML = texto;
}

function mostrarVersosWLC(cap)
{
	 var elemento = document.getElementById("ltextversostr");
	 var texto = "<div>";
	 var index = 1;
var bbase = getNacionalidade() == 'pt-BR' ? blv : web;
	   while (bbase[getLivroMain()].capitulos[getCapituloMain()][index] != undefined)
	   {
		  texto += "<button class='w3-button w3-circle w3-gray' onclick='irparawlc("+index+")'>" + contarZeros(cap,index) + "</button>&nbsp;";
		  if (index % 4 == 0)
		  {
			texto += "</div><div>";
		  }
		  index += 1;
	   }
	texto += "</div>";
	elemento.innerHTML = texto;
}

function carregar()  {
   var detalhe = "";
   setVersiculoMain(1);
   buscasimples = document.getElementById("buscasimples");
   mostrarVersos(getCapituloMain());
   mostrarCapitulos();
   setLivroCapituloBD(getLivroMain(), getCapituloMain());
   if (bbuscasimples)
   {
       var t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	   while (t1 != null)
	   {
		  rx1=new RegExp(buscasimples.value,"g");
		  t1 = t1.replace(rx1, "<b>"+buscasimples.value+"</b>");
                  detalhe = detalhe + escreveMarcacao(t1, getVersaoAtualMain(), getLivroMain(), getCapituloMain(), getVersiculoMain());
     	          setVersiculoMain(getVersiculoMain()+1);
		  t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	   }
   } else {
           document.getElementById("capitulob1").innerHTML = "";

           var t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	       while (t1 != null)
	       {
                 detalhe = detalhe + escreveMarcacao(t1, getVersaoAtualMain(), getLivroMain(), getCapituloMain(), getVersiculoMain());
	             setVersiculoMain(getVersiculoMain()+1);
        		 t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	       }

    }

   nomecap=document.getElementById("nomecap");
   n1 = document.getElementById("nomelivro");
   bbuscasimples = false;
   nomecap.innerHTML=getCapituloMain();
   n1.innerHTML=base[getLivroMain()].abrev;
   document.getElementById("capitulob1").innerHTML= "<p>&nbsp;</p>"+detalhe+"<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>";
}


function carregarReceptus()  {
   var detalhe = "";
   setVersiculoMain(1);
   mostrarVersosTR(getCapituloMain());
   mostrarCapitulosTR();
   document.getElementById("capitulostr").innerHTML = "";

       var t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	   while (t1 != null)
	   {
                detalhe = detalhe + escreveMarcacaoTR(t1, getVersaoAtualMain(), getLivroMain(), getCapituloMain(), getVersiculoMain());
	            setVersiculoMain(getVersiculoMain()+1);
		        t1 = extrairVerso(getLivroMain(), getCapituloMain(), getVersiculoMain());
	   }


   nomecap=document.getElementById("nomecaptr");
   var b1 = document.getElementById("capitulostr");
   var n1 = document.getElementById("nomelivrotr");
   nomecap.innerHTML=getCapituloMain();
   n1.innerHTML=getNacionalidade()=='pt-BR'? base[getLivroMain()].livro : livroseng[getLivroMain()-1];
   b1.innerHTML= detalhe+"<p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>";
}

function preCarregarWLC()
{
  mostrarVersosWLC(getCapituloMain());
  mostrarCapitulosWLC();
}

function carregarReceptusWlc()
{
  setVersiculoMain(1);
  preCarregarWLC();
  document.getElementById("nomecapwlc").innerHTML=getCapituloMain();
  document.getElementById("nomelivrowlc").innerHTML=livroseng[getLivroMain()-1];
  document.getElementById("capitulowlc").removeAttribute("w3-include-html");
  document.getElementById("capitulowlc").setAttribute("w3-include-html","basejs/biblias/wlc-base/"+livs[getLivroMain()-1]+"/"+getCapituloMain()+".htm");
  w3.includeHTML();
}
*/

function marcarBaseNovoTexto()
{
  setVersiculoMain(1);
  document.getElementById("numerocapnv").innerHTML=getCapituloMain();
  document.getElementById("nomelivronv").innerHTML=livroseng[getLivroMain()-1];
  document.getElementById("capitulonv").removeAttribute("w3-include-html");
}


function carregarLeitura()
{
  //alert(getIdPorSigla(sigla));
  //setVersaoAtualMain(getIdPorSigla(sigla));
  marcarBaseNovoTexto();
  var endereco = "basejs/biblias/blv/"+livs[getLivroMain()-1]+getCapituloMain()+".html";
  //alert(endereco);
  document.getElementById("capitulonv").setAttribute("w3-include-html",endereco);
  w3.includeHTML();
}


function getIdPorSigla(sigla)
{
      var id = 0 
      if (sigla == "blv") id = 0
      else if (sigla == "web") id = 1
      else if (sigla == "tr") id = 2
      else if (sigla == "fob") id = 3
      else if (sigla == "srv") id = 4
      else if (sigla == "erv") id = 5
      else if (sigla == "wlc") id = 6
      else if (sigla == "aa") id = 7
      else if (sigla == "acf") id = 8
      else if (sigla == "nvi") id = 9
      else if (sigla == "kjv") id = 10
      else id = 0;
      return id;
}


function getSiglaBibliaPorId(id)
{
   switch(id)
   {
      case 0: return "blv"; break;
      case 1: return "web"; break;
      case 2: return "tr"; break;
      case 3: return "fob"; break;
      case 4: return "srv"; break;
      case 5: return "erv"; break;
      case 6: return "wlc"; break;
      case 7: return "aa"; break;
      case 8: return "acf"; break;
      case 9: return "nvi"; break;
      case 10: return "kjv"; break;
   }
}


function getNomeBibliaPorId(id)
{
   switch(id)
   {
      case 0: return "Bíblia Livre"; break;
      case 1: return "World English Bible"; break;
      case 2: return "Textus Receptus Stephanus 1550"; break;
      case 3: return "Français Bible"; break;
      case 4: return "Version Reina Valera"; break;
      case 5: return "Easy English"; break;
      case 6: return "Hebraico"; break;
      case 7: return "Almeida Atualizada"; break;
      case 8: return "Almeida Corrigida Fiel"; break;
      case 9: return "Nova Versão Internacional"; break;
      case 10: return "King James Version"; break;
   }
}

/*
function carregarVersao()
{
   switch(versaoAtual)
   {
     case 0: base = blv; break;
     case 1: base = web; break;
     case 2: base = tr; break;
     case 3: base = nfob; break;
     case 4: base = nrv; break;
     case 5: base = nblv; break;
   }
}
*/

/*
function carregarTexto(numero)
{
   setVersaoAtualMain(numero);
   switch(numero){
        case 0: carregarVersao2(numero); break;
        case 1: carregarVersao2(numero); break;
        case 2: carregarReceptus(); break;
        case 3: carregarVersao2(numero); break;
        case 4: carregarVersao2(numero); break;
        case 5: carregarVersao2(numero); break;
   }
}
*/
/*
function getIdResultadosPorVersao(versao)
  {
     if (versao=='BLV') setVersaoAtualMain(0);
     else if (versao=='WEB') setVersaoAtualMain(1);
     else if (versao=='TR') setVersaoAtualMain(2);
     else if (versao=='NFOB') setVersaoAtualMain(3);
     else if (versao=='NRVE') setVersaoAtualMain(4);
     else if (versao=='NBLV') setVersaoAtualMain(5);
     carregarVersao();
     return getVersaoAtualMain();
  }
*/
/*
function loadVersion(versao)
{
	setVersaoAtualMain(versao);
	carregarVersao();
	carregar();
}
function carregarVersao2(c)
{
    loadVersion(c);
    abrirTela('leitura');
}
*/
/*


function extrairVerso(b,c,v)
{
  return base[b].capitulos[c][v];
}


function extrairVersoBase(baseversao,b,c,v)
{
  return baseversao[b].capitulos[c][v];
}

function extrairVersoBaseTipo1(baseversao,b,c,v)
{
  return baseversao[b-1].chapters[c-1][c][v];
}
*/
/*
function enderecoVerso(b,c,v)
{

   return livrospt[b-1]+"&nbsp;"+c+":"+v;
   //if (b<40)
  // {
//      return livrosVelho[b-1]+"&nbsp;"+c+":"+v;
  // } else {
  //    return livrosNovo[b-40]+"&nbsp;"+c+":"+v;
  // }
}
*/

/*
function enderecoVersoCompartilhar(b,c,v)
{
   return base[b].livro+" "+c+":"+v;
}
*/


function retrocedercap()
{
    desfazer();
    setCapituloMain(getCapituloMain()-1);
    if (getCapituloMain() < 1){
        setLivroMain(getLivroMain()-1);
        if (getLivroMain()<1){
           setLivroMain(1);
           setCapituloMain(1);
        } else {
           setCapituloMain(numeroCapitulos());
        }
    }
    carregarLeitura();
}
/*
function retrocedercaptr()
{
    desfazer();
    setCapituloMain(getCapituloMain()-1);
    if (getCapituloMain() < 1){
        setLivroMain(getLivroMain()-1);
        if (versaoAtual==2)
        {
            if (getLivroMain()<=40){
                setLivroMain(40);
                setCapituloMain(1);
            } else {
              setCapituloMain(numeroCapitulos());
            }
        }
    }
   carregarReceptus();
}

function retrocedercapwlc()
{
    desfazer();
    setCapituloMain(getCapituloMain()-1);
    if (getCapituloMain() < 1){
        setLivroMain(getLivroMain()-1);
        if (getLivroMain()<=1){
            setLivroMain(1);
            setCapituloMain(1);
        } else {
            setCapituloMain(numeroCapitulos());
        }
    }
   carregarReceptusWlc();
}
*/


function adiantarcap()
{
   var qte = numeroCapitulos();
   desfazer();
   setCapituloMain(getCapituloMain()+1);
   if (getCapituloMain() > qte)
   {
     setLivroMain(getLivroMain()+1);
     if (getLivroMain() > 66)
     {
        setLivroMain(66);
        setCapituloMain(qte);
     }
     else {
        setCapituloMain(1);
     }
   }
   carregarLeitura();
}


/*
function adiantarcaptr()
{
   var qte = numeroCapitulos();
   desfazer();
   setCapituloMain(getCapituloMain()+1);
   if (getCapituloMain() > qte)
   {
     setLivroMain(getLivroMain()+1);
       if (getLivroMain() > 66)
       {
          setLivroMain(66);
          setCapituloMain(qte);
       } else {
          setCapituloMain(1);
       }
   }
   carregarReceptus();
}

function adiantarcapwlc()
{
   var qte = numeroCapitulos();
   desfazer();
   setCapituloMain(getCapituloMain()+1);
   if (getCapituloMain() > qte)
   {
     setLivroMain(getLivroMain()+1);
     if (getLivroMain() >= 39)
     {
        setLivroMain(39);
        setCapituloMain(qte);
     } else {
        setCapituloMain(1);
     }
   }
   carregarReceptusWlc();
}

*/
var mc = new Hammer(document.getElementById("capitulob1"));
mc.on("swipeleft", function(ev) {

    switch (modoPlanoEstudo) {
      case 0: adiantarcapplanoestudo(); break;
      case 1: adiantarcap(); break;
     // case 2: adiantarcapwlc(); break;
      //case 3: adiantarcaptr(); break;
      default:  adiantarcap(); break;
    }

});

mc.on("swiperight", function(ev) {

  switch (modoPlanoEstudo) {
    case 0: retrocedercapplanoestudo(); break;
    case 1: retrocedercap(); break;
   // case 2: retrocedercapwlc(); break;
   // case 3: retrocedercaptr(); break;
    default:  retrocedercap(); break;
  }

});


var mcnv = new Hammer(document.getElementById("capitulonv"));
mcnv.on("swipeleft", function(ev) {
    adiantarcap();
});
mcnv.on("swiperight", function(ev) {
    retrocedercap();
});
/*
var mcwlc = new Hammer(document.getElementById("capitulowlc"));
mcwlc.on("swipeleft", function(ev) {
    adiantarcapwlc();
});
mcwlc.on("swiperight", function(ev) {
retrocedercapwlc();
});


var mctr = new Hammer(document.getElementById("capitulostr"));
mctr.on("swipeleft", function(ev) {
    adiantarcaptr();
});
mctr.on("swiperight", function(ev) {
retrocedercaptr();
});
*/