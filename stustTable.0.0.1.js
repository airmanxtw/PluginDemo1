(function ($) {
    $.fn.extend({
        table: function (parm) {
            let defaultParm = {
                data: [],
            };
            var newParm = $.extend(defaultParm, parm);
            let template = `
                <h2>{%= classname %}</h2>
                <table>
                    <thead>
                        <tr>
                            <td>學號</td>
                            <td>姓名</td>
                            <td>成績</td>
                        </tr>
                    </thead>
                    <tbody>
                        {%each(index,val) studs %}
                        <tr>
                            <td>{%= val.studno %}</td>
                            <td>{%= val.studname %}</td>
                            <td style='color:{%if val.score<60 %}red{%else%}green{%/if%}'>{%= val.score %}</td>
                        </tr>
                        {%/each %}
                    </tbody>
                </table>                
            `;
            $.tmpl(template, newParm.data).appendTo($(this));
        }
    });
})(jQuery);