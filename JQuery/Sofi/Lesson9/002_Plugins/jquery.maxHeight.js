(function ($) {

    $.fn.maxHeight = function () {

        var max = 0;

        // перебираем все элементы jQuery объекта
        this.each(function () {
            max = Math.max(max, $(this).height());
        });

        return max;
    };
})(jQuery);