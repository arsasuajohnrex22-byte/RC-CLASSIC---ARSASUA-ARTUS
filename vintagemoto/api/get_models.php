<?php
// api/get_models.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

echo json_encode([
    ['id' => 1, 'name' => 'Sportster 883', 'brand' => 'Harley-Davidson', 'year' => 2018],
    ['id' => 2, 'name' => 'CB750', 'brand' => 'Honda', 'year' => 1969],
    ['id' => 3, 'name' => 'XS650', 'brand' => 'Yamaha', 'year' => 1970]
]);
?>