

let app = angular.module('myApp', ['ngRoute','firebase','ui.router']);


app.run(['$rootScope', function ($rootScope) {

	$rootScope.hideX =false; 
	$rootScope.showX =false;

}])