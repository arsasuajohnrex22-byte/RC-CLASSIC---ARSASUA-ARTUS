<?php
// api/get_brands.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

echo json_encode([
    ['id' => 1, 'name' => 'Harley-Davidson', 'country' => 'USA'],
    ['id' => 2, 'name' => 'Honda', 'country' => 'Japan'],
    ['id' => 3, 'name' => 'Yamaha', 'country' => 'Japan'],
    ['id' => 4, 'name' => 'Triumph', 'country' => 'UK']
]);
?>