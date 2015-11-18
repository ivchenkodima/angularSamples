angular.module("exampleApp", [])

.controller("defaultCtrl", function ($scope) {

    $scope.counter = 2;

    $scope.incrementCounter = function () {
        $scope.counter++;
    }
})