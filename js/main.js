

function iniciar()
{

   openDatabase();
   if (db!=null)
   {
         carregarEstrutura();
         carregarCores();
         carregarIdioma();
         carregarFonte();
         carregarTamanhoFonte();
   }
   setVersaoAtualMain(0);
   setVersiculoMain(1);
   getLivroCapituloBD();
   //carregarVersao();
   //carregar();
   setLivroMain(43);
   setCapituloMain(1);
   bbuscasimples=false;
  // abrirTelaLeituraBLVAntigo();
   abrirTelaLeituraBLV();

}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

function isConectado()
{
    var networkState = navigator.connection.type;
    return networkState != Connection.NONE; 
}



function zeros(num, valor)
{
	var v = valor + "";
	var t = v.length;
	var s = "";
	for(var i = t ; i < num; i++)
	{
		s += "0";
	}
	return (s+v);
}

function contarZeros(cap,valor)
{
	if (cap==119)
    {
		return zeros(3,valor);
	}
	return zeros(2, valor);
}


function addDays(date, days) {
  var result = date;
  result.setDate(result.getDate() + days);
  return result;
}

function getDataPtFormatado(data)
{
   var dia = data.getDate();
   var mes = data.getMonth()+1;
   var ano = data.getFullYear();
   var sem = data.getDay();
   return semanapt[sem]+", "+dia+"/"+mes+"/"+ano;
}

function getDataEnFormatado(data)
{
   var dia = data.getDate();
   var mes = data.getMonth()+1;
   var ano = data.getFullYear();
   var sem = data.getDay();
   return semanaen[sem]+", "+mes+"/"+dia+"/"+ano;
}
