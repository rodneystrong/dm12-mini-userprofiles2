angular.module('userProfiles').controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
  	 mainService.getUsers().then(function(response) {
       //creating a var here called 'users' that
       //we want to use in the view.
       $scope.users = response.data.data;
     });
  }

  $scope.getUsers();

  $scope.toggleFav = mainService.toggleFav;

});
