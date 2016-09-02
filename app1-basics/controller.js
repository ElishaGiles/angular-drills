angular.module('app').controller('controller', function($scope) {

  // $scope.test = 'test';

  $scope.textInput = "";

  //This will change the words in the input box to busted after 3 seconds because it's two way bound
  $timeout(function() {
    $scope.textInput = "Busted";
  } 3000);

})
