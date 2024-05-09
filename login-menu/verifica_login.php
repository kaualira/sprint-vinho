<?php
if(!$_SESSION['nome']) {
	header('Location: l0gin1.php');
	exit();
}