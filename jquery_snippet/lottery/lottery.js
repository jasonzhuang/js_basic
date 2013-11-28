/**
 * Created with JetBrains WebStorm.
 * User: jason
 * To change this template use File | Settings | File Templates.
 */
;
(function($){
    var pluginName = "lottery";

    $.fn[pluginName] =  function(options){
        //default settings
        var defaults = {
           speed:200
        };

        var settings = $.extend(defaults, options);
        var self = this;
        this.previousIndex = -1;

        function stop() {
            if (self.timeoutId) {
                clearTimeout(self.timeoutId);
                clearData();
            }
        }

        function clearData(){
            this.previousIndex = -1;
        }

        function tryLucky(items, elem){
            var randomIndex;
            if(self.previousIndex >= 0){
                randomIndex = self.previousIndex;
                while(randomIndex === self.previousIndex) {
                    randomIndex =  Math.floor(Math.random() * items.length);
                }
            } else {
                randomIndex = Math.floor(Math.random() * items.length);
            }

            self.previousIndex = randomIndex;
            console.log(randomIndex);
            elem.data("plugin_" + pluginName, randomIndex);
            //elem.empty().append("<b>" + items[randomIndex] + "</b>").css("color","blue").data("lotteryIndex", randomIndex);
            self.timeoutId = setTimeout(function(){
                tryLucky(items, elem);
            }, settings.speed);
        }

        $.fn[pluginName].stop = stop;

        return this.each(function(){
            console.log("trigger " + pluginName);
            var elem = $(this);
            tryLucky(settings.items, elem);
            return elem;
        });
    }
}(jQuery));
