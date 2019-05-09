angular.module("todo", ["LocalStorageModule"])
    .service("todoService", function (localStorageService) {
        this.key = "angular-todolist";
        if(localStorageService.get(this.key)){
            this.activities = localStorageService.get(this.key);
        } else {
            this.activities = [];
        }

        this.addActiv = function (newActiv) {
            this.activities.push(newActiv);
            this.uploadStorage();
        };
        this.uploadStorage = function () {
          localStorageService.set(this.key, this.activities);
        };
        this.clean = function () {
            this.activities = [];
            this.uploadStorage();
        };
        this.getAll = function () {
            return this.activities;
        };
        this.removeItem = function (item) {
            this.activities = this.activities.filter(function (activity) {
                return activity !== item;
            });
            this.uploadStorage();
            return this.getAll();
        };
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