$( document ).ready(function() {
    console.log( "ready!" );
});

$( ".dropdown" ).click(function() {
	$(".goldbox").addClass('open');
  	$( '#drawer' ).addClass( "active" );
});

$( ".closer" ).click(function() {
	$(".goldbox").removeClass('open');
  $( '#drawer' ).removeClass( "active" );
});