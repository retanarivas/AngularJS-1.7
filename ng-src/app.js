angular.module("CustomDirective", [])
    .directive("backImg", function () {
        return function (scope, element, attrs) {
            attrs.$observe("backImg", function (value) {
                element.css({
                    "background": "url("+value+")",
                    "background-size": "cover",
                    "background-position": "center"
                });
            });
        }
    })
.controller("appCtrl" ,function ($scope, $http) {
    $http.get('https://api.github.com/users/retanarivas/repos')
        .then(function (response) {
            $scope.repos = response.data;
        }, function (error) {
            
        });
});