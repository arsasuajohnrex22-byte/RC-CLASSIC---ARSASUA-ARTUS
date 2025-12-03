<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once 'config/database.php';

$response = [
    'success' => true,
    'messages' => [],
    'inserted' => []
];

try {
    // Insert categories
    $categories = [
        ['British Classics', 'british-classics', 'Iconic motorcycles from Triumph, Norton, BSA, and other British manufacturers.', 'fas fa-flag-uk', 1],
        ['Japanese Legends', 'japanese-legends', 'Reliable and innovative bikes from Honda, Yamaha, Kawasaki, and Suzuki.', 'fas fa-flag-jp', 2],
        ['Custom Builds', 'custom-builds', 'One-of-a-kind custom motorcycles and cafe racers built by master craftsmen.', 'fas fa-tools', 3],
        ['Cafe Racers', 'cafe-racers', 'Lightweight, minimalist bikes built for speed and style on city streets.', 'fas fa-motorcycle', 4]
    ];
    
    foreach ($categories as $category) {
        $stmt = $pdo->prepare("INSERT IGNORE INTO motorcycle_categories (name, slug, description, icon_class, display_order) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute($category);
        $response['inserted']['categories'] = ($response['inserted']['categories'] ?? 0) + $stmt->rowCount();
    }
    
    $response['messages'][] = 'Categories inserted successfully';
    
    // Insert sample motorcycle
    $motorcycle = [
        4, // category_id for Cafe Racers
        'Yamaha XS500 Custom',
        'Yamaha',
        1978,
        498,
        48,
        185,
        'This beautifully customized Yamaha 500 features a classic cafe racer design with modern touches.',
        'Yamaha XS500 was produced from 1976-1981. This custom build features a cafe racer transformation with clip-on handlebars, rear-set footpegs, and a custom exhaust.',
        true,
        'active'
    ];
    
    $stmt = $pdo->prepare("
        INSERT IGNORE INTO motorcycles 
        (category_id, model_name, manufacturer, year, engine_size, power_hp, weight_kg, description, history, featured, status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");
    $stmt->execute($motorcycle);
    $motorcycleId = $pdo->lastInsertId();
    $response['inserted']['motorcycles'] = $stmt->rowCount();
    
    // Insert sample gallery items
    $galleryItems = [
        ['Classic Cafe Racer', '1968 Triumph Bonneville - Restored to perfection', 'https://pipeburn.com/wp-content/uploads/2017/12/05_12_2017_Kerkus_Triumph_Cafe_Racer_custom_pipeburn_BIG_01.jpg', null, 1, 'Cafe Racers', 0, true],
        ['Vintage Scrambler', '1972 Norton Commando - Off-road ready', 'https://silodrome.com/wp-content/uploads/2015/10/Norton-Commando-Motorcycle-10-1600x1002.jpg', null, 2, 'Scramblers', 0, true],
        ['British Classic', '1965 BSA Gold Star - Museum quality restoration', 'https://www.indiacarnews.com/wp-content/uploads/2021/12/BSA-Gold-Star-Launch.jpg', null, 3, 'British Classics', 0, true]
    ];
    
    foreach ($galleryItems as $item) {
        $stmt = $pdo->prepare("INSERT IGNORE INTO gallery_items (title, description, image_url, thumbnail_url, motorcycle_id, category, view_count, featured) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute($item);
        $response['inserted']['gallery'] = ($response['inserted']['gallery'] ?? 0) + $stmt->rowCount();
    }
    
    $response['messages'][] = 'Gallery items inserted successfully';
    
    // Insert sample resources
    $resources = [
        ['Buyer\'s Guide', 'buyers-guide', 'Our comprehensive buyer\'s guide provides everything you need to know before purchasing a vintage motorcycle.', '<p>Detailed guide content here...</p>', 'fas fa-book', 'guide', null, 1, 'published', date('Y-m-d H:i:s')],
        ['Restoration Tips', 'restoration-tips', 'Learn from our expert restorers with step-by-step guides.', '<p>Restoration content here...</p>', 'fas fa-tools', 'tutorial', null, 1, 'published', date('Y-m-d H:i:s')]
    ];
    
    foreach ($resources as $resource) {
        $stmt = $pdo->prepare("INSERT IGNORE INTO resources (title, slug, description, content, icon_class, resource_type, file_url, author_id, status, published_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute($resource);
        $resourceId = $pdo->lastInsertId();
        $response['inserted']['resources'] = ($response['inserted']['resources'] ?? 0) + $stmt->rowCount();
    }
    
    $response['messages'][] = 'Resources inserted successfully';
    
    // Insert sample gear
    $gearItems = [
        ['Vintage Leather Jacket', 'Apparel', 'Our top-rated vintage-style leather jacket combines classic aesthetics with modern safety features.', 'Editor\'s Choice', 'https://www.mr-styles.com/wp-content/uploads/2019/12/Vintage-Motorcycle-Harley-Davidson-Jacket.jpg', 5, 'Exceptional quality leather with CE-approved armor.', 'John Doe', null, true],
        ['Retro Motorcycle Helmet', 'Helmets', 'Vintage-style helmet with modern safety certifications.', 'Top Pick', 'https://i.ebayimg.com/images/g/7dMAAOSwX7dgAfLY/s-l1600.png', 4, 'Excellent ventilation and comfort.', 'Jane Smith', null, true]
    ];
    
    foreach ($gearItems as $gear) {
        $stmt = $pdo->prepare("INSERT IGNORE INTO gear_items (name, category, description, price_range, image_url, rating, review_text, reviewer_name, amazon_url, featured) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute($gear);
        $response['inserted']['gear'] = ($response['inserted']['gear'] ?? 0) + $stmt->rowCount();
    }
    
    $response['messages'][] = 'Gear items inserted successfully';
    
    // Insert sample events
    $events = [
        ['Vintage Motorcycle Show', 'Annual showcase of the finest vintage motorcycles from around the world.', '2025-06-15', '09:00:00', '18:00:00', 'World Trade Center, Metro Manila', null, 'VintageMoto Club', '500+ Enthusiasts', 0, 'Free Admission', 'upcoming', true],
        ['Cafe Racer Rally', 'Gathering of cafe racer enthusiasts from across the Philippines.', '2025-07-22', '08:00:00', '17:00:00', 'Circuit Makati, Metro Manila', null, 'Cafe Racer PH', '300+ Riders', 500, 'PHP 500 Registration', 'upcoming', true]
    ];
    
    foreach ($events as $event) {
        $stmt = $pdo->prepare("INSERT IGNORE INTO events (title, description, event_date, start_time, end_time, location, location_map_url, organizer, expected_attendance, entry_fee, entry_type, status, featured) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute($event);
        $eventId = $pdo->lastInsertId();
        $response['inserted']['events'] = ($response['inserted']['events'] ?? 0) + $stmt->rowCount();
    }
    
    $response['messages'][] = 'Events inserted successfully';
    $response['message'] = 'Sample data insertion completed';
    
} catch (PDOException $e) {
    $response['success'] = false;
    $response['error'] = $e->getMessage();
    $response['message'] = 'Error inserting sample data';
}

echo json_encode($response);
?>