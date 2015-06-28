// don't forget to include this directive in the index.html file
app.directive('tvShow', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/tvShow.html'
  };
});

// In the directive's template js/directives/tvShow.html, display each TV show's details. Looking at the format of the data in the shows API, display each show's series_img, series, genre, run_start, and description.
// use ng-src for images