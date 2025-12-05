<?php
// api/get_reviews.php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Simple test response
echo json_encode([
    [
        'id' => 1,
        'name' => 'Harley Sportster 883',
        'brand' => 'Harley-Davidson',
        'year' => 2018,
        'rating' => 4.2,
        'excerpt' => 'Great beginner Harley with classic styling',
        'content' => 'The Harley-Davidson Sportster Iron 883 is perfect for beginners...',
        'engine' => '883cc V-Twin',
        'power' => '50 HP'
    ],
    [
        'id' => 2,
        'name' => 'Honda CB750',
        'brand' => 'Honda',
        'year' => 1969,
        'rating' => 4.8,
        'excerpt' => 'The motorcycle that changed everything',
        'content' => 'The Honda CB750 revolutionized motorcycling...',
        'engine' => '736cc Inline-Four',
        'power' => '67 HP'
    ]
]);
?>