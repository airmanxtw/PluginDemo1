(function ($) {
    $.fn.extend({
        cube: function (parm) {
            let defaultParm = { data: [] };
            var newParm = $.extend(defaultParm, parm);
            let css = "width:50px;height: 50px;margin-right:20px;border-width: 1px;border-style:solid;padding:5px"
            let events = {
                clickcube: function (index, val) {
                    $.observable(newParm.data).refresh(
                        Array.from(newParm.data, function (v, i) {
                            return i == index ? (val === "O" ? "X" : "O") : v;
                        })
                    );
                }
            }
            let temp = `
                <span style='${css};background-color:{{if #data=="X"}}red{{else}}white{{/if}}' 
                    data-link="{on 'click' ~clickcube #index #data}">
                        {{:#data}}
                </span>
            `;
            let template = $.templates(temp);
            template.link($(this), newParm.data, events);
        }
    });
})(jQuery);      