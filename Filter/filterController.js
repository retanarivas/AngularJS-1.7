angular.module("appFilter", [])
    .filter("htmlRemover", function () {
        return function (text) {
            String(text).replace(/<[^>]+>/gm, '');
        }
    })
    .controller("filterController", function ($scope) {
        $scope.myHtml = "<p>hola mundo</p>"
    });