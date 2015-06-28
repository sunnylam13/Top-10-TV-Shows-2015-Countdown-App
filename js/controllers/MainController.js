app.controller('MainController', ['$scope', 'shows', function($scope, shows) {
	// don't forget to change 'forecast.success' to 'SERVICENAME.success'
	// don't forget to include this as a script element in your index.html file or html file
  shows.success(function(data) {
    $scope.shows = data;
  });
}]);