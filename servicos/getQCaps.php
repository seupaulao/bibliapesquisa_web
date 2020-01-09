<?php

$numerolivro = $_GET["livro"];
$tipo = $_GET["tipo"];

// Read JSON file
$json = file_get_contents("../basejs/bases/baseversos.json");

//Decode JSON
$json_data = json_decode($json,true);

//vetor de versiculos
if ($tipo) 
{
    $versos = $json_data["baseversos"][$numerolivro]["qteversos"];
    $s = "[";
    foreach($versos as $chave=>$valor)
    {
       $s .= $valor . ",";
    }
    $s = substr($s,0,strlen($s)-1);
    $s .= "]";
    echo $s;

} else {
    $qte = $json_data["baseversos"][$numerolivro]["qtecapitulos"];
    echo "[$qte]";
}


?>
