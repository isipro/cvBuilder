<?php
	echo "getting to the php";
	$data = $_POST['data'] or exit("Unable to load data ");
	$f = fopen('username.html', 'w+') or exit("Unable to open file!");
	fwrite(f, $data) or exit("Unable to write to file!");
	fclose($f)or exit("Unable to close file!")
?>