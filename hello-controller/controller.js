var app = angular.module("myFirstApp", []);
app.controller("firstControler", function($scope) {
    $scope.name = "Angel";
    $scope.nuevoComentario = {};
    $scope.comentarios = [
        {
            comentario: "mal tutorial",
            usuario: "angel"
        },
        {
            comentario: "buen tutorial",
            usuario: "anonimo"
        }
    ];
    $scope.agregarComentario = function() {
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario = {};
    }
});