angular.module('myApp')

.controller('navCtrl', function($scope,$cookieStore,$location){
	
 $scope.usrConectado = {nombre: "", puesto: '', estaConectado: false};		 

  var usr = $cookieStore.get('myUser');

    if (usr != null) {     
      $scope.usrConectado.estaConectado = true;
    }
    else
    	  $scope.usrConectado.estaConectado = false;


	$scope.onClicSalir = function()
	{
		 $cookieStore.remove('myUser');
		  $scope.usrConectado.estaConectado = false;
		  $location.path("/inicio");

	}    	

});