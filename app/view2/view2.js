
angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html'
    });
}])

.controller('View2Ctrl', ['$scope', '$log','$location', function($scope, $log, $location) {


	$scope.pageName = 'BLOG';

	var goToPage1 = function() {
       $location.path('/view1'); 
    };

	$scope.submit = function () {
		goToPage1();
	};

	$scope.blogsArray=[];

	$scope.newBlog=[{
	  id:'',
      titleInput:'',
      blogInput:''
	}];
		
var id;
	$scope.add=function(nb){

        		//$scope.nb.titleInput=null;
		//$scope.nb.blogInput=null;
		$scope.blogsArray.push(angular.copy(nb));
		
}


 //  $scope.delete=function()
  //  {
  //        for(var i=0;i<blogsArray.length;i++)
    //     {
      //    	if(blog.id==$scope.newBlog.id)
//
  //        }
    //}


}]);