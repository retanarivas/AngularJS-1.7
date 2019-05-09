angular.module("childApp", [])
    .run(function ($rootScope) {
        $rootScope.name = "Angel";
    })
    .controller("childController", function ($scope) {
        $scope.name = "Roy";
        setTimeout(function () {
            $scope.$apply(function () {
                $scope.name = "<3";
            })
        }, 2000);
    })
    .controller("secondController", function ($scope) {

    });