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
    // Check if motorcycles table exists
    $tableCheck = $pdo->query("SHOW TABLES LIKE 'motorcycles'");
    $tableExists = $tableCheck->rowCount() > 0;
    
    if ($tableExists) {
        $sql = "
            SELECT 
                m.*, 
                c.name as category_name,
                c.slug as category_slug
            FROM motorcycles m
            LEFT JOIN motorcycle_categories c ON m.category_id = c.id
            WHERE m.status = 'active'
            ORDER BY m.featured DESC, m.year DESC
            LIMIT 10
        ";
        
        $stmt = $pdo->query($sql);
        $motorcycles = $stmt->fetchAll();
        
        // If no data in database, return sample data
        if (empty($motorcycles)) {
            $motorcycles = getSampleMotorcycles();
        }
    } else {
        // Table doesn't exist, return sample data
        $motorcycles = getSampleMotorcycles();
    }
    
    echo json_encode([
        'success' => true,
        'data' => $motorcycles,
        'count' => count($motorcycles),
        'message' => 'Motorcycles retrieved successfully'
    ]);
    
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage(),
        'data' => getSampleMotorcycles()
    ]);
}

function getSampleMotorcycles() {
    return [
        [
            'id' => 1,
            'model_name' => 'Yamaha XS500 Custom',
            'manufacturer' => 'Yamaha',
            'year' => 1978,
            'engine_size' => 498,
            'power_hp' => 48,
            'weight_kg' => 185,
            'description' => 'This beautifully customized Yamaha 500 features a classic cafe racer design with modern touches.',
            'category_name' => 'Cafe Racers',
            'category_slug' => 'cafe-racers',
            'featured' => true
        ],
        [
            'id' => 2,
            'model_name' => 'Triumph Bonneville',
            'manufacturer' => 'Triumph',
            'year' => 1968,
            'engine_size' => 650,
            'power_hp' => 46,
            'weight_kg' => 195,
            'description' => 'Iconic British motorcycle restored to original specifications.',
            'category_name' => 'British Classics',
            'category_slug' => 'british-classics',
            'featured' => true
        ]
    ];
}
?>
