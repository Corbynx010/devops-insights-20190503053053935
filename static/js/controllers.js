var ConsoleModule = angular.module('ConsoleModule', ['ngRoute']);

ConsoleModule.config(['$routeProvider', '$locationProvider','$sceDelegateProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $sceDelegateProvider, $httpProvider) {
    $routeProvider.when('/', {
        templateUrl: '/partials/Byzip.html',
        controller: 'wcontroller',
        controllerAs: 'wcontroller'
    });
}]);
var map;
ConsoleModule.controller('wcontroller', ['$scope', '$http', '$routeParams', '$timeout', '$sce',
    function($scope, $http, $routeParams, $timeout, $sce) {

    $scope.somemessage = "Some weather";
    $scope.zip1City = "";
    $scope.zip1Weather = "";
    
	$scope.map = function(){
    map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: -34.397, lng: 150.644},
    	zoom: 8
    });

    $scope.zip = function(which) {

        var data = "";
        if(which === 1) {
            data = $scope.zip1m;
        } else if(which === 2) {
            data = $scope.zip2m;
        } else if(which === 3) {
            data = $scope.zip3m;
        } else if(which === 4) {
            data = $scope.zip4m;
        } 

		if(isNaN(data)) {
			$http({
                method: "GET",
                url: '/api/v1/getWeather3?city=' + data
            }).then( function(response) {
                if(which === 1) {
                    $scope.zip1City = response.data.city;
                    $scope.zip1Weather = response.data.weather;
                } else if(which === 2) {
                    $scope.zip2City = response.data.city;
                    $scope.zip2Weather = response.data.weather;
                } else if(which === 3) {
                    $scope.zip3City = response.data.city;
                    $scope.zip3Weather = response.data.weather;
                } else if(which === 4) {
                    $scope.zip4City = response.data.city;
                    $scope.zip4Weather = response.data.weather;
                } 
            });
		} else {
        if(data.length === 5) {
            $http({
                method: "GET",
                url: '/api/v1/getWeather?zip=' + data
            }).then( function(response) {
                if(which === 1) {
                    $scope.zip1City = response.data.city;
                    $scope.zip1Weather = response.data.weather;
                } else if(which === 2) {
                    $scope.zip2City = response.data.city;
                    $scope.zip2Weather = response.data.weather;
                } else if(which === 3) {
                    $scope.zip3City = response.data.city;
                    $scope.zip3Weather = response.data.weather;
                } else if(which === 4) {
                    $scope.zip4City = response.data.city;
                    $scope.zip4Weather = response.data.weather;
                } 
            });
        } else if(data.length === 4){
        	$http({
                method: "GET",
                url: '/api/v1/getWeather2?zip=' + data
            }).then( function(response) {
                if(which === 1) {
                    $scope.zip1City = response.data.city;
                    $scope.zip1Weather = response.data.weather;
                } else if(which === 2) {
                    $scope.zip2City = response.data.city;
                    $scope.zip2Weather = response.data.weather;
                } else if(which === 3) {
                    $scope.zip3City = response.data.city;
                    $scope.zip3Weather = response.data.weather;
                } else if(which === 4) {
                    $scope.zip4City = response.data.city;
                    $scope.zip4Weather = response.data.weather;
                } 
            });
        } else {
            if(which === 1) {
                    $scope.zip1City = "";
                    $scope.zip1Weather = "";
                } else if(which === 2) {
                    $scope.zip2City = "";
                    $scope.zip2Weather = "";
                } else if(which === 3) {
                    $scope.zip3City = "";
                    $scope.zip3Weather = "";
                } else if(which === 4) {
                    $scope.zip4City = "";
                    $scope.zip4Weather = "";
                } 
        }
    }

    };
    
}]);