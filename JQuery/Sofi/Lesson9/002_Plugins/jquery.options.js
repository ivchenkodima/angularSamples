(function ($) {

    $.fn.myTooltip = function (options) {

        // Создаём настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
        var settings = $.extend({
            'border': '5px',
            'color': 'blue'
        }, options);

        return this.each(function () {

            current = $(this);

            current.mouseover(function () {
                $(this).text($(this).attr('title'));
                $(this).css('border', settings.border + ' solid black');
                $(this).css('background-color', settings.color);
            });

            current.mouseout(function () {
                $(this).empty('');
                $(this).css('border', '');
                $(this).css('background-color', '');
            });

        });

    };

})(jQuery);
