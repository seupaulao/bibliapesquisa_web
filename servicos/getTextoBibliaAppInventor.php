<?php

$numerolivro = $_GET["livro"];
$numerocapitulo = $_GET["capitulo"];
$versao = $_GET["versao"];

if (!$versao)
{
  $versao = "blv";
}

// Read JSON file
$json = file_get_contents("../basejs/biblias/json/$versao.json");

//Decode JSON
$json_data = json_decode($json,true);

//vetor de versiculos
$versiculos = $json_data[$versao][$numerolivro]["capitulos"][$numerocapitulo];

$s="[";
$s .= "";
foreach($versiculos as $chave => $texto)
{
   $s .= "\"$texto\", ";
}
$s = substr($s,0,strlen($s)-2);

$s .= "]";

echo $s;

?>
