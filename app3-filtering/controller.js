angular.module("myApp").controller("controller", function($scope, service) {

$scope.test = "success";

$scope.data = service.getData();

})
