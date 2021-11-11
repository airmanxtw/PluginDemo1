(function ($) {
    $.fn.extend({
        additem: function (parm) {
            var that = $(this);
            if (typeof parm === "object") {
                var default_param = {
                    items: [],
                    //addclick: function (_item) { }
                }
                var new_parm = $.extend(default_param, parm);

                let panel = $("<div id='itempanel'></div>");
                let addbutton = $("<button>+</button>");

                addbutton.click(function () {
                    new_parm.items.push({id:'',desc:''});
                    genitem();
                });

                var genitem = function () {
                    var target = that.find("#itempanel");
                    target.empty();
                    new_parm.items.forEach(function (item) {
                        var div=$("<div></div>");
                        var idinput=$("<input placeholder='代碼'></input>").val(item.id);
                        var descinput=$("<input placeholder='描述'></input>").val(item.desc);
                        var delbtn=$("<button>刪除</button>").data("key",item.id).click(function(){
                            var delid=$(this).data("key");
                            new_parm.items=new_parm.items.filter(function(item){return item.id!=delid});
                            genitem();
                        });                      
                        div.append(idinput).append(descinput).append(delbtn);
                        target.append(div);
                    })
                }
                that.append(panel).append(addbutton);

                genitem();

            }
            else if (typeof parm === "string") {
                //
            }
        }
    });
})(jQuery);