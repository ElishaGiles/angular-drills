angular.module('apiApp').controller('controller', function($scope, service) {

  // $scope.test = 'test';

  $scope.retrieveStarships = function() {
    //5                 //2
    var prms = service.getStarships()
      //6
      prms.then(function(starships) {
        //9
        $scope.starships = starships;
      })
      //7 Wait for data to come back
  }
  //1
  $scope.retrieveStarships();

});
