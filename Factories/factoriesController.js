angular.module("todo", ["LocalStorageModule"])
    .factory("todoService", function (localStorageService) {
        var todoService = {};
        todoService.key = "angular-todolist";
        if(localStorageService.get(todoService.key)){
            todoService.activities = localStorageService.get(todoService.key);
        } else {
            todoService.activities = [];
        }

        todoService.addActiv = function (newActiv) {
            todoService.activities.push(newActiv);
            todoService.uploadStorage();
        };
        todoService.uploadStorage = function () {
          localStorageService.set(todoService.key, todoService.activities);
        };
        todoService.clean = function () {
            todoService.activities = [];
            todoService.uploadStorage();
        };
        todoService.getAll = function () {
            return todoService.activities;
        };
        todoService.removeItem = function (item) {
            todoService.activities = todoService.activities.filter(function (activity) {
                return activity !== item;
            });
            todoService.uploadStorage();
            return todoService.getAll();
        };
        return todoService;
    })
    .controller("todoController", function ($scope, todoService) {
        $scope.todo = todoService.getAll();
        $scope.newActiv = {};
        $scope.AddActivity = function () {
            todoService.addActiv($scope.newActiv);
            $scope.newActiv = {};
        }
        $scope.removeActivity = function (item) {
            $scope.todo = todoService.removeItem(item);
        }
        $scope.clean = function () {
            $scope.todo = todoService.clean();
        }
});