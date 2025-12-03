<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'config/database.php';

try {
    // Check if gallery_items table exists
    $tableCheck = $pdo->query("SHOW TABLES LIKE 'gallery_items'");
    $tableExists = $tableCheck->rowCount() > 0;
    
    if ($tableExists) {
        $stmt = $pdo->query("
            SELECT 
                id,
                title,
                description,
                image_url as url,
                thumbnail_url,
                category,
                view_count,
                featured
            FROM gallery_items 
            ORDER BY featured DESC, created_at DESC
            LIMIT 10
        ");
        
        $gallery = $stmt->fetchAll();
        
        // If no data in database, return fallback data
        if (empty($gallery)) {
            $gallery = getFallbackGallery();
        }
    } else {
        // Table doesn't exist, return fallback data
        $gallery = getFallbackGallery();
    }
    
    echo json_encode([
        'success' => true,
        'data' => $gallery,
        'count' => count($gallery),
        'message' => 'Gallery items retrieved successfully'
    ]);
    
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage(),
        'data' => getFallbackGallery()
    ]);
}

function getFallbackGallery() {
    return [
        [
            'id' => 1,
            'title' => 'Classic Cafe Racer',
            'description' => '1968 Triumph Bonneville - Restored to perfection',
            'url' => 'https://pipeburn.com/wp-content/uploads/2017/12/05_12_2017_Kerkus_Triumph_Cafe_Racer_custom_pipeburn_BIG_01.jpg',
            'category' => 'Cafe Racers',
            'featured' => true
        ],
        [
            'id' => 2,
            'title' => 'Vintage Scrambler',
            'description' => '1972 Norton Commando - Off-road ready',
            'url' => 'https://silodrome.com/wp-content/uploads/2015/10/Norton-Commando-Motorcycle-10-1600x1002.jpg',
            'category' => 'Scramblers',
            'featured' => true
        ],
        [
            'id' => 3,
            'title' => 'British Classic',
            'description' => '1965 BSA Gold Star - Museum quality restoration',
            'url' => 'https://www.indiacarnews.com/wp-content/uploads/2021/12/BSA-Gold-Star-Launch.jpg',
            'category' => 'British Classics',
            'featured' => true
        ],
        [
            'id' => 4,
            'title' => 'Custom Build',
            'description' => 'Hand-built cafe racer with modern performance',
            'url' => 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            'category' => 'Custom Builds',
            'featured' => false
        ],
        [
            'id' => 5,
            'title' => 'Racing Heritage',
            'description' => '1969 Honda CB750 - The original superbike',
            'url' => 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            'category' => 'Japanese Legends',
            'featured' => false
        ],
        [
            'id' => 6,
            'title' => 'Desert Sled',
            'description' => '1975 Ducati Scrambler - Ready for adventure',
            'url' => 'https://www.mototriti.gr/jpg/MTR/1600/NEWS/Ducati-Scrambler-Des_11321.jpg',
            'category' => 'Scramblers',
            'featured' => false
        ]
    ];
}
?>