angular.module('userProfiles').service('mainService', function($http) {


  this.getUsers = function() {
    return $http.get('http://reqres.in/api/users?page=1')
		.then(function(response) {
			console.log(response);
			console.log(response.status);
			console.log(response.data.data[0].first_name);
			return response.data
		})
		// .then(function(response) {
		// 	console.log(response);
		// 	console.log(response.status);
		// 	return response.data;
		// }
  };

	//toggle fav button
	this.toggleFav = function(userIndex) {
		console.log("you fuckin clicked " + userIndex);
	}

});
