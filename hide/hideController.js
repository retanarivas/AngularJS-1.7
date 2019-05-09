var httpApp = angular.module("httpApp", []);
httpApp.controller("httpController", function($scope, $http){
    $scope.posts = [];
    $scope.loading = true;
        $http.get("https://jsonplaceholder.typicode.com/posts")
            .then(function(response){
                $scope.posts = response.data;
                $scope.loading = false;
            }, function(response){
                console.log("no hay resultados");
                console.log(response);
                $scope.loading = false;
            });
});