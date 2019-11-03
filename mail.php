<?php
	
		$name = $_POST['name'];
		$email = "hp15449@gmail.com";
		$to = "hp62246@gmail.com";
		$subject = "Day Out Pass Submission";
		$message = "Name : ".$name.", Has requested for approval";
		$headers = "From : hp15449@gmail.com";

		echo $name.", ".$email;
	
?>