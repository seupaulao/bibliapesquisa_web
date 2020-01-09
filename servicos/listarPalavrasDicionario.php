<?php
   header("Content-type: text/html; charset=iso-8859-1");
   header("Access-Control-Allow-Origin: *");

   $palavra = $_GET["w"];
   $idioma = $_GET["lang"] ? $_GET["lang"] : "pt";
   if ($palavra) 
   {
    # echo("Palavra para pesquisar : $palavra, Idioma: $idioma");
   }
   else {
     die("Entrada Invalida. Deve ser fornecido a palavra/frase");
   }


$servername = "localhost";
$username = "root";
$password = "verde54@";
$dbname = "biblias";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT palavra, texto, idioma FROM dicionario where palavra like '$palavra%' and idioma='$idioma'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	// output data of each row 
    $saida = '{"resultados": [';
    while($row = $result->fetch_assoc()) {
        $saida .= '{"palavra": "' . $row["palavra"]. '", "retorno": "' . $row["texto"]. '"},';
    }
    $saida .= substr($saida,0,strlen($saida)-1) . "]}";
    echo $saida;
} else {
    echo "0 results";
}
$conn->close();

?>
