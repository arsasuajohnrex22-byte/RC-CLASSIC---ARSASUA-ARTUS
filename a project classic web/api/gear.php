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
    // Check if gear_items table exists
    $tableCheck = $pdo->query("SHOW TABLES LIKE 'gear_items'");
    $tableExists = $tableCheck->rowCount() > 0;
    
    if ($tableExists) {
        $stmt = $pdo->query("
            SELECT 
                id,
                name as title,
                category,
                description,
                price_range as price,
                image_url as image,
                rating,
                review_text as review,
                reviewer_name,
                featured
            FROM gear_items 
            ORDER BY featured DESC, rating DESC
            LIMIT 4
        ");
        
        $gear = $stmt->fetchAll();
        
        // If no data in database, return fallback data
        if (empty($gear)) {
            $gear = getFallbackGear();
        }
    } else {
        // Table doesn't exist, return fallback data
        $gear = getFallbackGear();
    }
    
    echo json_encode([
        'success' => true,
        'data' => $gear,
        'count' => count($gear),
        'message' => 'Gear items retrieved successfully'
    ]);
    
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage(),
        'data' => getFallbackGear()
    ]);
}

function getFallbackGear() {
    return [
        [
            'id' => 1,
            'title' => 'Vintage Leather Jacket',
            'price' => 'Editor\'s Choice',
            'description' => 'Our top-rated vintage-style leather jacket combines classic aesthetics with modern safety features. Perfect for both style and protection.',
            'image' => 'https://www.mr-styles.com/wp-content/uploads/2019/12/Vintage-Motorcycle-Harley-Davidson-Jacket.jpg',
            'rating' => 5,
            'review' => 'Exceptional quality leather with CE-approved armor. A perfect blend of vintage style and modern safety.',
            'category' => 'Apparel',
            'featured' => true
        ],
        [
            'id' => 2,
            'title' => 'Retro Motorcycle Helmet',
            'price' => 'Top Pick',
            'description' => 'This vintage-style helmet offers DOT and ECE safety certifications while maintaining authentic retro design elements.',
            'image' => 'https://i.ebayimg.com/images/g/7dMAAOSwX7dgAfLY/s-l1600.png',
            'rating' => 4,
            'review' => 'Excellent ventilation and comfort. The classic look doesn\'t compromise on modern safety standards.',
            'category' => 'Helmets',
            'featured' => true
        ],
        [
            'id' => 3,
            'title' => 'Leather Riding Gloves',
            'price' => 'Best Value',
            'description' => 'Handcrafted leather gloves with reinforced palms and knuckle protection for the classic rider.',
            'image' => 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/merchandise/2022/july-replenishment/98113-23vw/98113-23VW_F.jpg',
            'rating' => 5,
            'review' => 'Superior grip and durability. These gloves break in beautifully and offer excellent protection.',
            'category' => 'Gloves',
            'featured' => true
        ],
        [
            'id' => 4,
            'title' => 'Classic Motorcycle Boots',
            'price' => 'Premium Selection',
            'description' => 'Vintage-style boots featuring modern ankle protection and oil-resistant soles for safety and style.',
            'image' => 'https://img.joomcdn.net/3399559eb9aa903cd9cf39d3a31f5263cc8dce54_original.jpeg',
            'rating' => 4,
            'review' => 'Authentic vintage appearance with modern protective features. Comfortable for all-day riding.',
            'category' => 'Footwear',
            'featured' => true
        ]
    ];
}
?>