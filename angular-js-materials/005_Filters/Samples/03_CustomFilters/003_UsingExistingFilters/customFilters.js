angular.module("exampleApp")

.filter("skipItems", function () {
    return function (value, count) {
        if (angular.isArray(value) && angular.isNumber(count)) {
            if (count > value.length || count < 1) {
                return value;
            } else {
                return value.slice(count);
            }
        } else {
            return value;
        }
    }
})
 // сервис $filter применяется для использования других фильтров
.filter("take", function ($filter) {
    return function (data, from, count) {
        var arr = $filter("skipItems")(data, from);
        console.log(arr);
        return $filter("limitTo")(arr, count);
    }
});