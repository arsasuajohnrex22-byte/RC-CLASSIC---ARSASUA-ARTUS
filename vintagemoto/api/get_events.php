<?php
// api/get_events.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

echo json_encode([
    [
        'id' => 1,
        'title' => 'Vintage Motorcycle Show',
        'date' => 'June 15, 2025',
        'location' => 'World Trade Center, Manila'
    ],
    [
        'id' => 2,
        'title' => 'Cafe Racer Rally',
        'date' => 'July 20, 2025',
        'location' => 'Circuit Makati'
    ]
]);
?>