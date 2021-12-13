(function ($) {
    $.fn.extend({
        add: function (parm) {

            let defaultParm = {
                color: "red",
                oninput: function () { }
            }
            var newParm = $.extend(defaultParm, parm);

            let input = $("<input></input>");
            let input2 = $("<input></input>");
            input.css({
                "background-color": newParm.color,
                "text-align": "right",
                "border": "0px",
                "border-bottom": "1px solid"
            });
            input2.css({
                "width": 50,
                "border": "0px",
                "border-bottom": "1px solid"
            });
            input.on('input', function () {
                let n0 = $(this).val();
                let n = $.number($(this).val(), 0);
                console.log(`n0:${n0} n:${n}`);
                $(this).val(n);
            })
            $(this).append(input).append("<span>.</span>").append(input2);
        },
    });
})(jQuery);
