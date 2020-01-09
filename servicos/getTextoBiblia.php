<?php

$numerolivro = $_GET["livro"];
$numerocapitulo = $_GET["capitulo"];

// Read JSON file
$json = file_get_contents('../basejs/biblias/json/blv.json');

//Decode JSON
$json_data = json_decode($json,true);

//vetor de versiculos
$versiculos = $json_data["blv"][$numerolivro]["capitulos"][$numerocapitulo];

$s="{\"saida\": {";
$s .= "";
foreach($versiculos as $chave => $texto)
{
   $s .= "\"$chave\": \"$texto\",";
}
$s = substr($s,0,strlen($s)-1);

$s .= "}}";

echo $s;

?>
