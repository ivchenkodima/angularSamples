angular.module("exampleApp", [])

.controller("defaultCtrl", function ($scope, $http) {
    

    $http.get("data.json").success(function (data) {
        $scope.products = data;
    });

})