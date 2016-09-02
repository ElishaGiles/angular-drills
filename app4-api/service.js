angular.module('apiApp').service('service', function($http) {

  this.getStarships = function(){
  //3
  var promise = $http( {
    method: 'GET',
    url: 'http://swapi.co/api/starships/'
  }).then(function(response){
    //8 - we got data back
    if(response.status === 200) {
      return response.data;
    }
    else {
      return "Error getting data";
    }
  })
  //4
  return promise;
}


});
