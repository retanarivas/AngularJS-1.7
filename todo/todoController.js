var todo = angular.module("todo", ["LocalStorageModule"]);
todo.controller("todoController", function ($scope, localStorageService) {
    if(localStorageService.get("todoList")){
        $scope.todo = localStorageService.get("todoList");
    } else {
        $scope.todo = [];
    }
    $scope.addActv = function () {
        $scope.todo.push($scope.newActv);
        $scope.newActv = {};
        localStorageService.set("todoList", $scope.todo);
    }
    $scope.limpiar = function () {
        $scope.todo = [];
        localStorageService.set("todoList", $scope.todo)
    }
});