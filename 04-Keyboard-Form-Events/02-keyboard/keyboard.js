 
$(function() {
   // keypress is used to detect printable character key strokes.
   // as a default action, it add the new character to the content of 
   // the textbox/textarea.
   $("#stdID").keypress(function(e) {
	   // for non-digit characters.
	   if ( e.which < 48 || e.which > 57) {
		   $("#warning").text( String.fromCharCode(e.which) + " not valid")
                                .stop(true)
                                .fadeIn(200).delay(1000).fadeOut(200);
		   e.preventDefault() ;  // do not display non-digit characters within textbox.
	   }
   }).on("copy paste select", function(e){
	   $("#warning").text( e.type + " event detected").fadeIn(200).delay(1000).fadeOut(200);
		e.preventDefault();  // do not allow copy/paste/select on textbox.
   }).keydown(function(e){
	  // left-right arrow control characters do not trigger window object.
          e.stopPropagation(); 
   });
   
      
   // Photo album in which a user can change photos by pressing
   // left or right arrow keys.
   //var album = ["car1.jpg", "car2.jpg", "car3.jpg", "car4.jpg"];
   var album = [] ;
   $(".album_plugin img").each(function(){
      album.push($(this).attr("src")) ;
   });
   var current = 0 ;
   $(".album_plugin").html("<img src='" + album[current] + "' id='photo'><br><p><span>" + (current+1) + "</span>/" + album.length + "</p>" ) ;
      
   
   $(window).keydown(function(e){
	   // left arrow key : 37
	   // right arrow key : 39
	   // console.log(e.which) ;
	   if ( e.which === 37) {
			current--;
		} else if( e.which === 39) {
			current++;
		}
		if ( current < 0 ) current = album.length - 1 ;
		if ( current === album.length) current = 0 ;
		$("#photo").attr("src", album[current])
                        .parent()
                        .find("p span")
                        .text(current+1) ;
                
   });
});
