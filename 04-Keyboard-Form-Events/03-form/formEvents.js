 $(function() {
    // Initialize the Page
    // 
    // Default Focus
    $("#textbox").focus() ; // explicitly set focus for textbox.
    // add the first image in the listbox
    var firstImage = "<img id='flower' src='img/flowers/" + $("#flowerList option:first").val() + "'>" ;
    $(firstImage).appendTo("#listBoxWell") ;

    // LISTBOX
   $("#flowerList").change(function() {
      var selected = $(this).val() ;
      $("#flower").attr("src", "img/flowers/" + selected ) ; 
   }).focus(function(){
       console.log("Gain Focus : Flower Listbox") ;
       $(this).parent().css("background", "#bbb");
   }).blur(function() {
       console.log("Leave Focus (Blur) : Flower Listbox");
       $(this).parent().css("background", "#ddd");
   }); 

   // TEXTBOX
   $("#textbox").change(function() {
       var str = $(this).val() ;
       $("#textResult").text( str  ) ;
       if ( isNaN(str)) {
           $("#error").fadeIn(200) ;
       } else {
            $("#error").fadeOut(200) ;
       }

   })

   // CHECKBOX 
   $("#smoking").change(function(){
      if ( $(this).is(":checked") ) {
          $("#checkText").text("YES") ;
      }  else {
          $("#checkText").text("NO") ;
      }
   });

    // RADIO BUTTON
   $("[name='phone']").change(function(){
        console.log($(this).val());
        $("#phoneText").text(  $(this).val() ) ;
   }) ;

   // SCROLL Event
   $(document).scroll(function() {
       var scrollPos = $(this).scrollTop() ;
       if ( scrollPos > 200 ) {
           $("#bar").slideDown(400) ;
       } else {
           $("#bar").slideUp(400);
       }
   });

   $("#top").click(function(){
       $(document).scrollTop(0) ; // go to top of the page.
   })
});