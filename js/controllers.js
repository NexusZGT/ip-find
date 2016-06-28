var ipController = angular.module("ipController",[]);

ipController.controller("currentIpController", ["$scope","$http",function($scope,$http) {

		var url = 'http://ip-api.com/json/';
		$http.get(url).success(function(data){
			$scope.currentIp = data;
		});
}]);

ipController.controller("infoIpController",["$scope", "$http","$routeParams",function($scope,$http,$routeParams){
		var urlDetalles = "http://ip-api.com/json/" + $routeParams.ip ;
		$http.get(urlDetalles).success(function(datos){
			$scope.detailIP = datos;
		});

}]);
