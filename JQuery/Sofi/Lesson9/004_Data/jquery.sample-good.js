(function ($) {

    var methods = {
        init: function (options) {
            return this.each(function () {

                var $this = $(this);
                data = $this.data('info');

                // Если плагин ещё не проинициализирован
                if (!data) {

                    alert('Инициализация')
                    $(this).data('info', 'данныеэ');
                }
            });
        },
        show: function () {
            alert('show');
        },
        hide: function () {
            alert('hide');
        },
        update: function (content) {
            alert('update data - ' + content.data);
        }
    };

    $.fn.block = function (method) {

        // логика вызова метода
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Метод с именем ' + method + ' не существует для jQuery.');
        };
    }

})(jQuery);