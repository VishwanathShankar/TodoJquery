<?php include 'header.php';?>
<?php include 'leftNav.php';?>

<div class="col-md-9" manasa="manasa">
	<div class="row"> 
		<div class="col-md-6">
			<input type="text" class="add-input"></input> 
		</div>
		<div class="col-md-2">
			<button class="btn btn-primary" id="add-btn">Add</button>
		</div>

	</div>

	<div class="manasa-wrapper"></div>

	<div class="row">
		<button class="btn btn-success" id="save-btn">Save</button>
		<button class="btn btn-primary" id="get-btn">Get People Data</button>
	</div>

	<div id="ajax-div"> </div>
</div>

</div> <!-- Closure of leftnav row div -->
<?php include 'footer.php';?>