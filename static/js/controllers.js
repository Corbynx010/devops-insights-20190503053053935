var ConsoleModule = angular.module('ConsoleModule', ['ngRoute']);

ConsoleModule.config(['$routeProvider', '$locationProvider','$sceDelegateProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $sceDelegateProvider, $httpProvider) {
    $routeProvider.when('/', {
        templateUrl: '/partials/Byzip.html',
        controller: 'wcontroller',
        controllerAs: 'wcontroller'
    });
}]);


ConsoleModule.controller('wcontroller', ['$scope', '$http', '$routeParams', '$timeout', '$sce',
    function($scope, $http, $routeParams, $timeout, $sce) {

    $scope.somemessage = "Some weather";
    $scope.zip1City = "";
    $scope.zip1Weather = "";

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
    
    
    function initMap() {
        var hamilton = new google.maps.LatLng(-37.783329, 175.283325);

        var map = new google.maps.Map(document.getElementById('map'), {
          center: hamilton,
          zoom: 4
        });

	var cities = [
	{lat: -46.400002, lng: 168.350006}, 'Invercargill',
	{lat: -45.874161, lng: 170.503616}, 'Dunedin',
	{lat: -44.400002, lng: 171.25}, 'Timaru',
	{lat: -43.533329, lng: 172.633331}, 'Christchurch',
	{lat: -41.283329, lng: 173.283325}, 'Nelson',
	{lat: -41.516029, lng: 173.952805}, 'Blenheim',
	{lat: -39.066669, lng: 174.083328}, 'New Plymouth',
	{lat: -35.73167, lng: 174.323914}, 'Whangarei',
	{lat: -41.28664, lng: 174.775574}, 'Wellington',
	{lat: -41.216671, lng: 174.916672}, 'Lower Hutt',
	{lat: -41.138271, lng: 175.050201}, 'Upper Hutt',
	{lat: -40.916672, lng: 175.016663}, 'Paraparaumu',
	{lat: -40.959721, lng: 175.657501}, 'Masterton',
	{lat: -39.933331, lng: 175.050003}, 'Wanganui',
	{lat: -40.633331, lng: 175.274994}, 'Levin',
	{lat: -40.349998, lng: 175.616669}, 'Parmerston North',
	{lat: -39.6381, lng: 176.849182}, 'Hastings',
	{lat: -36.992821, lng: 174.879868}, 'Manukau City',	
	{lat: -37.06572, lng: 174.943924}, 'Papakura',
	{lat: -36.866669, lng: 174.766663}, 'Auckland',
	{lat: -36.799999, lng: 174.75}, 'North Shore',
	{lat: -37.783329, lng: 175.283325}, 'Hamilton',
	{lat: -37.87822, lng: 175.440201}, 'Cambridge',
	{lat: -38.683331, lng: 176.083328}, 'Taupo',
	{lat: -38.138741, lng: 176.245163}, 'Rotorua',
	{lat: -37.686111, lng: 176.166672}, 'Tauranga',
	{lat: -37.958549, lng: 176.985443}, 'Whakatane',
	{lat: -38.653332, lng: 178.004166}, 'Gisborne'];
	
	var marker = [];
	for(var i = 0; i < cities.length; i++){
		marker[i] = new google.maps.Marker({
    		position: cities[i*2],
    		map: map,
    		title: cities[(i*2)+1]
		  });

		  marker[i].addListener('click', function() {
          map.setCenter(this.getPosition());
          
          var contentString = ($.proxy(function(data) {
          	$http({
                method: "GET",
                url: '/api/v1/getWeather3?zip=' + this.title
            }).then( function(response) {
                    return response.data.city;
            });
            },this))();

          var infowindow = new google.maps.InfoWindow({
          content: contentString
        	});
          
          infowindow.open(map, this);
        });
	}
    }

      var TILE_SIZE = 256;

      function createInfoWindowContent(latLng, zoom) {
        var scale = 1 << zoom;

        var worldCoordinate = project(latLng);

        var pixelCoordinate = new google.maps.Point(
            Math.floor(worldCoordinate.x * scale),
            Math.floor(worldCoordinate.y * scale));

        var tileCoordinate = new google.maps.Point(
            Math.floor(worldCoordinate.x * scale / TILE_SIZE),
            Math.floor(worldCoordinate.y * scale / TILE_SIZE));

        return [
          'Chicago, IL',
          'LatLng: ' + latLng,
          'Zoom level: ' + zoom,
          'World Coordinate: ' + worldCoordinate,
          'Pixel Coordinate: ' + pixelCoordinate,
          'Tile Coordinate: ' + tileCoordinate
        ].join('<br>');
      }

      // The mapping between latitude, longitude and pixels is defined by the web
      // mercator projection.
      function project(latLng) {
        var siny = Math.sin(latLng.lat() * Math.PI / 180);

        // Truncating to 0.9999 effectively limits latitude to 89.189. This is
        // about a third of a tile past the edge of the world tile.
        siny = Math.min(Math.max(siny, -0.9999), 0.9999);

        return new google.maps.Point(
            TILE_SIZE * (0.5 + latLng.lng() / 360),
            TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI)));
      }


}]);