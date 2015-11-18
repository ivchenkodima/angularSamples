// Директива привязывает обработчики на событие click для элементо button
angular.module("exampleApp")
    .directive("triButton", function () {
    return {
        scope: { counter: "=counter" },
        link: function (scope, element, attrs) {
            element.on("click", function (event) {
                console.log("Button click: " + event.target.innerHTML);
                scope.$apply(function () {
                    scope.counter++;
                });
            });
        }
    }
});