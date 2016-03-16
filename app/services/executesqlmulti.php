<?php

	 require_once("config.php");  
	  $d= json_decode(file_get_contents("php://input"),TRUE); 
     
     //  $Accion = $d['Accion'];
     //  $SQL = $d['SQL'];

	//   $datos = json_encode($d);

	 for ($i=0; $i <count($d); $i++) { 
	 		echo $d[$i]['SQL'];

	 		switch ($d[$i]['Accion']) {
	 			case 'S':


	 			
	 				# code...
	 				break;
	 			
	 			default:
	 				# code...
	 				break;
	 		}



	 }

	// foreach($d as $posicion=>$jugador)
	// {
	// 	echo "El " . $posicion . " es " . $jugador;
	// }
// $equipo = array('portero'=>'Cech', 'defensa'=>'Terry', 'medio'=>'Lampard', 'delantero'=>'Torres');
 
// foreach($equipo as $posicion=>$jugador)
// 	{
// 	echo "El " . $posicion . " es " . $jugador;
// 	}
	 
       
?>       