<?php

$registro['idFecha'] = '2022-05-15';
$registro['idHora'] = '11:11';
$registro['nomPaciente'] = 'Adrian';
$registro['patPaciente'] = 'Briseno';
$registro['matPaciente'] = 'Torres';
$registro['dirCliente'] = 'Madero 6253';
$registro['colCliente'] = 'Militar';
$registro['codCliente'] = '88140';
$registro['emailPaciente'] = 'usuario@gmai.com';
$registro['telPaciente'] = '867 751 90 33';
$registro['ciudad'] = 'Nuevo Laredo';
$registro['estado'] = 'Tamps.';

$registroJson = json_encode($registro);
echo $registroJson;
?>