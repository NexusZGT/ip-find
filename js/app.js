var ipService = angular.module("ipService", ["ngRoute","ipController"]);

ipService.config(["$routeProvider", function($routeProvider){
	$routeProvider.
	when("/:ip",{
		templateUrl: "infoIp.html",
		controller: "infoIpController"
	}).
	otherwise({
		redirecTo: "/"
	});

}]);
