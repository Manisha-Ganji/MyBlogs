
angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html'
    });
}])

.controller('View2Ctrl', ['$scope', '$log','$location','$window', function($scope, $log, $location,$window) {


	$scope.pageName = 'BLOG';

	var goToPage1 = function() {
       $location.path('/view1'); 
    };

	$scope.submit = function () {
		goToPage1();
	};

	$scope.blogsArray=[];

$scope.add=function(nb)
{
    if(($scope.nb.titleInput==null)||($scope.nb.blogInput==null)||($scope.nb.id==null))
    {
      $scope.flag=1;
    }
    else
    {
     $scope.flag=0;
		$scope.blogsArray.push(angular.copy(nb));
    $scope.nb.titleInput=null;
    $scope.nb.blogInput=null;
    $scope.nb.id=null;

    }

};

 $scope.delete=function(blog)
   {
   	   for(var i=0;i<$scope.blogsArray.length;i++)
       {
          if(blog.id==$scope.blogsArray[i].id)
          {
          $scope.blogsArray.splice(i,1);
          }

        }
   };

}]);