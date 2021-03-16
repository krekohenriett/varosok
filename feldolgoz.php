<?php

require './MySqlDB.php';

$mySql = new MySqlDB();
$adat=$_GET['nev'];

$varos = array();
$result = $mySql->lekerdez("varos", "nev like '%".$adat."%'");


if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {

        $varos[] = $row;
    }
    echo json_encode($varos);
} else {
    echo "0 results";
}
//print_r( $telefonkonyvem);

