(function ($) {
    $.fn.extend({
        add:function(parm){ 

            let defaultParm={
                color:"red",
                oninput:function(){}
            }
            var newParm = $.extend(defaultParm, parm);   
            
            let input=$("<input style='color:red' type='text'></input>");
            input.css("background-color",newParm.color);
            input.on('input',function(){                
                newParm.oninput($(this).val());
            })
            $(this).append(input);
        },        
    });
})(jQuery);
