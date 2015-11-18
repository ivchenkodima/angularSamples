(function ($) {

    $.fn.lock = function () {

        // возвращаем this для того что бы следующая функция в цепочке могла продолжить работу с jQuery объектом
        return this.each(function () {

            var self = $(this);
            var max = Math.max(
                parseInt(self.css('height')),
                parseInt(self.css('width')));

            self.css('width', max);
            self.css('height', max);
        });

    };
})(jQuery);