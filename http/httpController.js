var httpApp = angular.module("httpApp", []);
    httpApp.controller("httpController", function($scope, $http){
        $scope.posts = [];
        $scope.newPost = {};
        $http.get("https://jsonplaceholder.typicode.com/posts")
            .then(function(response){
                $scope.posts = response.data;
                console.log($scope.posts);
            }, function(error){

            });

        $scope.addPost = function () {
            $http.post("https://jsonplaceholder.typicode.com/posts", {
                title: $scope.newPost.title,
                body: $scope.newPost.body,
                userId: 1
            })
                .then(function (data, status, headers, config) {
                    $scope.posts.push($scope.newPost);
                    $scope.newPost = {};
                }),
                function (error, status, headers, config) {
                 console.log(error);
                }
        }
    });