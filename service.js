angular.module('userProfiles').service('mainService', function($http) {


  this.getUsers = function() {
    return $http.get(url)
		.then(callback with response) {
			console.log(response);
			console.log(response.status);
			return response.data;
		}
  };


});
