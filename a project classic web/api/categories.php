<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'config/database.php';

try {
    $stmt = $pdo->query("
        SELECT 
            id, 
            name as title, 
            slug, 
            description, 
            icon_class as icon, 
            display_order,
            CONCAT('https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80') as image,
            '100+ Models' as models,
            'Vintage' as years
        FROM motorcycle_categories 
        ORDER BY display_order ASC
    ");
    
    $categories = $stmt->fetchAll();
    
    echo json_encode([
        'success' => true,
        'data' => $categories,
        'count' => count($categories),
        'message' => 'Categories retrieved successfully'
    ]);
    
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage(),
        'data' => []
    ]);
}
?>