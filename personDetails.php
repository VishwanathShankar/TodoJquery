<?php
//$data = "{[{'name': 'Manasa', 'age': 23, 'sex' : 'Female'}, {'name': 'Vishwa', 'age': 29, 'sex': 'Male'}]}";
$data[] = array("name" => "Manasa", "age" => "23", "sex" => "Female");
$data[] = array("name" => "Vishwa", "age" => "29", "sex" => "Male");
header('Content-Type: application/json');
sleep(3);
echo json_encode($data);
?>