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
            let returnval = function () {
                let val = `${$.number(input.val())}.${$.number(input2.val())}`;
                newParm.oninput(val);
            }
            let boardStyle = {
                "border": "0px",
                "border-bottom": "1px solid"
            };
            input.css({
                ...{
                    "background-color": newParm.color,
                    "text-align": "right",
                }, ...boardStyle
            });
            input2.css({...{
                "width": 50,
            },...boardStyle});
            input.on('input', function () {
                let n = $.number($(this).val(), 0);
                $(this).val(n);
                returnval();
            });
            input2.on('input', function () {
                let n = $(this).val();
                if (n.length == 3) n = n.substring(0, 2);
                n = $.number(n);
                $(this).val(n);
                returnval();
            })

            $(this).append(input).append("<span>.</span>").append(input2);
        },
    });
})(jQuery);
