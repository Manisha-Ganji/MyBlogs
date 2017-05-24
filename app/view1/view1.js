
angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
 $routeProvider.when('/view1', {
templateUrl: 'view1/view1.html'
  });
}])

.controller('View1Ctrl',['$scope','$location','$log','$window',function($scope,$location,$log,$window) {
    $scope.pageName = 'LOGIN';

	var me = {
	email:'manishaganji187@gmail.com',
	password:'manisha187'
	};

     
     $scope.formModel = {
		emailInput:'',
		passwordInput: ''
	};

	var goToPage2 = function() {
       $location.path('/view2'); 
    };

	$scope.submit = function () {
		if ($scope.formModel.emailInput==me.email && $scope.formModel.passwordInput==me.password) {
           goToPage2();
         
         } 
         else {
		 $scope.flag=1;
		 $scope.formModel.emailInput=null;
		 $scope.formModel.passwordInput=null;
		}
	};
}]);