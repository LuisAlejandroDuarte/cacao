'use strict';

angular.module('myApp')

.controller('edit-ProductoCtrl', ['$scope','$location','datosProducto','Execute','$route','$window', function($scope,$location,datosProducto,Execute,$route,$window){
	
	if ($route.current.params.idProducto==0)
	{
		$scope.tiTulo = "Nuevo Producto";
		$scope.buttonText ="Guardar";
	}
	else
	{
		$scope.tiTulo = "Editar Producto";
		$scope.buttonText="Actualizar";
	}



	  datosProducto.$promise.then(function(datos){   

	  	$scope.Datos = datos[0];

	  });


	$scope.volver = function()
	{
		$location.path('/producto');
	}	


	$scope.save = function(datos)
	{
		if (datos.PRO_CODI ==undefined)
		{
			var datos ={
			    Accion:"I",
			    SQL:"INSERT INTO ESC_PROD (PRO_NOMB,PRO_CODI_MUES) VALUES ('" + datos.PRO_NOMB + "','" + datos.PRO_CODI_MUES + "')"
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
			    SQL:"UPDATE  ESC_PROD set PRO_NOMB='" + datos.PRO_NOMB + "',PRO_CODI_MUES='" + datos.PRO_CODI_MUES + "' WHERE PRO_CODI=" + datos.PRO_CODI + ""
			}

			 Execute.SQL(datos).then(function(result) { 

			 	var re = result.data;
			 	$window.alert('Actualizado');

			 });

		}



	}  

}])