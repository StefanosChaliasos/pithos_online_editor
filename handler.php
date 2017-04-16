<?php 
if(isset($_POST['text']) && isset($_POST['name'])) {
	$content = $_POST['text'];
	$filePath = "resources/" . $_POST['name'];
	file_put_contents($filePath ,$content);
	header('Location: editor.html?source=' . $filePath);
}
?>
