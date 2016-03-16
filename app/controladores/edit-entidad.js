'use strict';

angular.module('myApp')

.controller('edit-EntidadCtrl', ['$scope','$location','datosEntidad','Execute','$route','$window', function($scope,$location,datosEntidad,Execute,$route,$window){
	
	if ($route.current.params.idEntidad==0)
	{
		$scope.tiTulo = "Nueva Entidad";
		$scope.buttonText ="Guardar";
	}
	else
	{
		$scope.tiTulo = "Editar Entidad";
		$scope.buttonText="Actualizar";
	}



	  datosEntidad.$promise.then(function(datos){   

	  	$scope.Datos = datos[0];

	  });


	$scope.volver = function()
	{
		$location.path('/entidad');
	}	


	$scope.save = function(datos)
	{
		if (datos.ENT_CODI ==undefined)
		{
			var datos ={
			    Accion:"I",
			    SQL:"INSERT INTO ESC_ENTI (ENT_NOMB) VALUES ('" + datos.ENT_NOMB + "')"
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
			    SQL:"UPDATE  ESC_ENTI set ENT_NOMB='" + datos.ENT_NOMB + "' WHERE ENT_CODI=" + datos.ENT_CODI + ""
			}

			 Execute.SQL(datos).then(function(result) { 

			 	var re = result.data;
			 	$window.alert('Actualizado');

			 });

		}



	}  

}])