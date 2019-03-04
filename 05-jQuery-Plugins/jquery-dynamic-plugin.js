//
// This plugin changes the content of a cell within the selected table.
jQuery.fn.dynamic = function() {
    // implicit loop for each selected items.
    return this.each(function(){
        $(this).find("tbody").on("click", "td", function(){
            var currentVal = $(this).html();
           // var currentCell = $(this) ;
            var width = $(this).width() - 4 ;  // subtract padding left and right
            var height = $(this).height() - 8 ;  // subtract padding top and bottom
            $(this).html("<input type='text' value='" + currentVal + "'>") ;
            $(this).find("input").width(width)
                                 .height(height)
                                 .blur(function() {
                                    $(this).parent().html($(this).val());
                                  })
                                  .click(function(e){
                                     e.stopPropagation();
                                  })
                                  .focus()
                                  .select(); 
        }) ;
    }) ;
};




