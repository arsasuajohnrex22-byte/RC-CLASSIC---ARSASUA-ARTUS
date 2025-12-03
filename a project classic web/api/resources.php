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
    // Check if resources table exists
    $tableCheck = $pdo->query("SHOW TABLES LIKE 'resources'");
    $tableExists = $tableCheck->rowCount() > 0;
    
    if ($tableExists) {
        $stmt = $pdo->query("
            SELECT 
                id,
                title,
                slug,
                description,
                icon_class as icon,
                resource_type as type,
                download_count
            FROM resources 
            WHERE status = 'published'
            ORDER BY download_count DESC, created_at DESC
            LIMIT 4
        ");
        
        $resources = $stmt->fetchAll();
        
        // Get items for each resource
        foreach ($resources as &$resource) {
            $itemStmt = $pdo->prepare("
                SELECT title, description 
                FROM resource_items 
                WHERE resource_id = ? 
                ORDER BY display_order ASC
            ");
            $itemStmt->execute([$resource['id']]);
            $resource['items_data'] = $itemStmt->fetchAll();
        }
        
        // If no data in database, return fallback data
        if (empty($resources)) {
            $resources = getFallbackResources();
        }
    } else {
        // Table doesn't exist, return fallback data
        $resources = getFallbackResources();
    }
    
    echo json_encode([
        'success' => true,
        'data' => $resources,
        'count' => count($resources),
        'message' => 'Resources retrieved successfully'
    ]);
    
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage(),
        'data' => getFallbackResources()
    ]);
}

function getFallbackResources() {
    return [
        [
            'id' => 'buyers-guide',
            'title' => 'Buyer\'s Guide',
            'slug' => 'buyers-guide',
            'description' => 'Our comprehensive buyer\'s guide provides everything you need to know before purchasing a vintage motorcycle. From price guides to inspection checklists, we\'ve got you covered.',
            'icon' => 'fas fa-book',
            'items_data' => [
                ['title' => 'Price guides for all major models'],
                ['title' => 'Inspection checklist with 50+ points'],
                ['title' => 'Common issues to watch for'],
                ['title' => 'Restoration cost estimates'],
                ['title' => 'Paperwork requirements']
            ],
            'additionalInfo' => [
                'Updated quarterly with current market prices',
                'Includes dealer vs private sale comparisons',
                'Regional price variations included',
                'Tips for negotiating the best price',
                'Financing options for vintage bikes'
            ]
        ],
        [
            'id' => 'restoration',
            'title' => 'Restoration Tips',
            'slug' => 'restoration-tips',
            'description' => 'Learn from our expert restorers with step-by-step guides, techniques, and insider tips for bringing vintage motorcycles back to their former glory.',
            'icon' => 'fas fa-tools',
            'items_data' => [
                ['title' => 'Step-by-step restoration guides'],
                ['title' => 'Parts sourcing tips worldwide'],
                ['title' => 'Paint and chrome restoration'],
                ['title' => 'Engine rebuilding techniques'],
                ['title' => 'Electrical system updates']
            ]
        ],
        [
            'id' => 'parts',
            'title' => 'Parts Directory',
            'slug' => 'parts-directory',
            'description' => 'Find exactly what you need with our comprehensive directory of parts suppliers, manufacturers, and custom fabricators for vintage motorcycles.',
            'icon' => 'fas fa-cogs',
            'items_data' => [
                ['title' => 'Global parts suppliers database'],
                ['title' => 'OEM parts availability tracking'],
                ['title' => 'Aftermarket parts reviews'],
                ['title' => 'Custom parts fabricators'],
                ['title' => 'Online marketplaces guide']
            ]
        ],
        [
            'id' => 'calendar',
            'title' => 'Event Calendar',
            'slug' => 'event-calendar',
            'description' => 'Never miss a vintage motorcycle event again with our comprehensive calendar of shows, rallies, races, and club meetings worldwide.',
            'icon' => 'fas fa-calendar-alt',
            'items_data' => [
                ['title' => 'International motorcycle shows'],
                ['title' => 'Local club meetings & rides'],
                ['title' => 'Vintage racing events'],
                ['title' => 'Auction dates & previews'],
                ['title' => 'Swap meets and markets']
            ]
        ]
    ];
}
?>
