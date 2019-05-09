angular.module("CustomDirective", [])
    .directive("myAutocomplete", function () {
        function link(scope, element, attrs) {
            $(element).autocomplete({
                source: scope.$eval[attrs.myAutocomplete],
                select: function (ev, ui) {
                    ev.preventDefault();
                    if (ui.item){
                        scope.optionSelected(ui.item.value);
                    }
                },
                focus: function (ev, ui) {
                    ev.preventDefault();
                    $(this).val(ui.item.label);
                }
            });
        };
        return  {
            link: link
        };
    })
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
        $http.get('https://api.github.com/users/twitter/repos')
            .then(function (response) {
                $scope.repos = response.data;
                for (let i = $scope.repos.length -1; i>=0; i--) {
                    let repo = $scope.repos[i];
                    $scope.repos.push(repo.name);
                }
            }, function (error) {

            });
        $scope.optionSelected = function (data) {
            $scope.$apply(function () {
                $scope.main_repo = data;
            })
        }
    });