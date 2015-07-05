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

	$( "#get-btn" ).on( "click", function() { 
		$(".posi").show();
		$(".ajax-image").removeClass("hide");
		var tableHtml = '<table class="table table-bordered allign"> \
    <thead> \
      <tr>\
        <th>Firstname</th>\
        <th>Age</th>\
        <th>Sex</th>\
      </tr>\
    </thead>\
    <tbody>\
' ;
		$.ajax( "/js/TodoJquery/personDetails.php")
		.done(function(data) {
			$(".posi").hide();
			$(".ajax-image").addClass("hide");
			console.log(data);
			for (var i = 0; i < data.length; i++) {
				
				tableHtml = tableHtml + ' \
					<tr>\
        				<td>' + data[i]['name'] + '</td>\
        				<td>' + data[i]['age'] + '</td>\
        				<td>' + data[i]['sex'] + '</td>\
      				</tr>\
				';
			}
			tableHtml = tableHtml +  '</tbody> </table>';
			console.log("Table is ");
			console.log(tableHtml); 
			$("#ajax-div").html(tableHtml);
		})
		.fail(function(error) {
			$(".posi").show();
			$(".ajax-image").removeClass("hide");
			console.log(error);
			console.log("In failure");
		});
	});
});
