$(document).ready(function(){

	$( "#add-btn" ).on( "click", function() {
		console.log("Am i here");
		var ipValue = $(".add-input").val();
  		$('.manasa-wrapper').append(" \
  			<div class=\"row\"> \
			<div class=\"col-md-6\"> \
				<input type=\"text\" class=\"list-items\" value="+ipValue+"></input> \
			</div> \
			<div class=\"col-md-2\"> \
				<button class=\"btn btn-primary\"> \
					<span class=\"glyphicon glyphicon-remove\"></span> \
				</button> \
			</div> \
		</div>"
  			);
  		$('.add-input').val('');
	});

	$(".manasa-wrapper").on( "click", function(e) {
		var node = e.target;
		if($(node).hasClass('btn-primary')) {
			console.log("this can be contained");
			$(node).parent().parent().remove();
		}
	});

	
	$( "#save-btn" ).on( "click", function() {
		$('.list-items').map( function(){return $(this).val(); }).get();
		console.log($('.list-items').map( function(){return $(this).val(); }).get());
	});
});
