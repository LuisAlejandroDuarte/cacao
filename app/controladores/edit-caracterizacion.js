'use strict';

angular.module('myApp')

.controller('edit-CaracterizacionCtrl', ['$scope','$location','datosCaracterizacion','Execute','$route','$window', function($scope,$location,datosCaracterizacion,Execute,$route,$window){
	
	if ($route.current.params.idCaracterizacion==0)
	{
		$scope.tiTulo = "Nueva Caracterización";
		$scope.buttonText ="Guardar";
	}
	else
	{
		$scope.tiTulo = "Editar Caracterización";
		$scope.buttonText="Actualizar";
	}



	  datosCaracterizacion.$promise.then(function(datos){   

	  	$scope.Datos = datos[0];

	  });


	$scope.volver = function()
	{
		$location.path('/caracterizacion');
	}	


	$scope.save = function(datos)
	{
		if (datos.CAR_CODI ==undefined)
		{
			var datos ={
			    Accion:"I",
			    SQL:"INSERT INTO ESC_CARA (CAR_NOMB) VALUES ('" + datos.CAR_NOMB + "')"
			}

			 Execute.SQL(datos).then(function(result) { 

			 	var re = result.data;
			 	$window.alert('Ingresado');

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
			    SQL:"UPDATE  ESC_CARA set CAR_NOMB='" + datos.CAR_NOMB + "' WHERE CAR_CODI=" + datos.CAR_CODI + ""
			}

			 Execute.SQL(datos).then(function(result) { 

			 	var re = result.data;
			 	$window.alert('Actualizado');

			 });

		}



	}  

}])