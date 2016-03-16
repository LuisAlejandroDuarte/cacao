'use strict';

angular.module('myApp')

.controller('edit-AtributoCtrl', ['$scope','$location','datosAtributo','Execute','$route', function($scope,$location,datosAtributo,Execute,$route){
		
	var datos ={
		Accion:"S",
		SQL:"SELECT CAR_CODI,CAR_NOMB FROM ESC_CARA"
	}		

	 Execute.SQL(datos).then(function(result) { 
	 	
		$scope.listCaracterizacion = result.data; 	
	 });	

	

	if ($route.current.params.idAtributo==0)
	{
		$scope.tiTulo = "Nuevo Atributo";
		$scope.buttonText ="Guardar";
	}
	else
	{
		$scope.tiTulo = "Editar Atributo";
		$scope.buttonText="Actualizar";
	}



	  datosAtributo.$promise.then(function(datos){   

	  	$scope.Datos = datos[0];

	  });


	$scope.volver = function()
	{
		$location.path('/atributo');
	}	


	$scope.save = function(datos)
	{
		if (datos.ATR_CODI ==undefined)
		{
			var datos ={
			    Accion:"I",
			    SQL:"INSERT INTO ESC_ATRIB (ATR_NOMB,ATR_CARA_CODI) VALUES ('" + datos.CAR_NOMB + "'," + datos.ATR_CARA_CODI + ")"
			}

			 Execute.SQL(datos).then(function(result) { 

			 	var re = result.data;

			 });
			

			// var bd = Execute.execute.query({Accion:"I",SQL:"INSERT INTO ESC_CARA (Nombre) VALUES ('" + datos.CAR_NOMB + "')"});

			//  bd.$promise.then(function (result){

			//  	var d = result;

			//  });

		}

		else
		{
			var datos ={
			    Accion:"U",
			    SQL:"UPDATE  ESC_ATRIB set ATR_NOMB='" + datos.ATR_NOMB + "',ATR_CARA_CODI="+  datos.ATR_CARA_CODI  + " WHERE ATR_CODI=" + datos.ATR_CODI + ""
			}

			 Execute.SQL(datos).then(function(result) { 

			 	var re = result.data;

			 });

		}



	}  

}])