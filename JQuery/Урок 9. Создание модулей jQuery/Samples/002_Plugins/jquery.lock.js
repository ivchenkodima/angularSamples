(function ($) {

    $.fn.lock = function () {

        // возвращаем this для того что бы следующая функция в цепочке могла продолжить работу с jQuery объектом
        return this.each(function () {

            $this = $(this);
            var max = Math.max(
                parseInt($this.css('height')),
                parseInt($this.css('width')));

            $this.css('width', max);
            $this.css('height', max);
        });

    };
})(jQuery);