// Basic Structure of a jQuery plugin.

$.fn.content = function(val) {
    return this.each(function(){
        $(this).html(val) ;
    });
};
// Immediately invoked function expression
(function(num){ console.log(num);}(12)) ;

// $ is a popular variable name in other libraries
// Use $ as a local variable that references to jQuery object.
(function ($){
    $.fn.toRed = function() {
        return this.each(function(){
            $(this).css("color", "#F00");
        });
    };
}(jQuery)); 

// to support chaining return this;  ( each method returns this)
// This jQuery plugin blurs the selected text elements.
// If you click on blurred text, it reveals its content.
(function($){
    $.fn.blurfx = function(options) {
        // default settings
        var settings = $.extend({ 
                              bg: "#0F0",
                              fx : "2px"
                             }, options) ;

        return this.each(function() {
                var saveBg = $(this).css("background") ; 
                $(this).css("background", settings.bg)
                       .css("filter", "blur(" + settings.fx + "px)")
                       .one("click", function(){
                                            $(this).css('background', saveBg)
                                                    .css('filter', 'none')
                                                    .css("cursor", "default")
                                                    .off({mouseenter : enter, mouseleave: leave}) ;
                            })
                            .mouseenter(enter)
                            .mouseleave(leave);
                    
                 function enter() { $(this).css("cursor", "grab"); console.log("enter");}
                 function leave() { $(this).css("cursor", "default"); console.log("leave");}
            });
    } ;
}(jQuery)) ;




