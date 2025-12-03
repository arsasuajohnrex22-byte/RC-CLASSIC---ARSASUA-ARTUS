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
    // Check if events table exists
    $tableCheck = $pdo->query("SHOW TABLES LIKE 'events'");
    $tableExists = $tableCheck->rowCount() > 0;
    
    if ($tableExists) {
        $stmt = $pdo->query("
            SELECT 
                id,
                title,
                description,
                DATE_FORMAT(event_date, '%M %e, %Y') as formatted_date,
                DATE_FORMAT(start_time, '%l:%i %p') as formatted_start_time,
                DATE_FORMAT(end_time, '%l:%i %p') as formatted_end_time,
                CONCAT(DATE_FORMAT(start_time, '%l:%i %p'), ' - ', DATE_FORMAT(end_time, '%l:%i %p')) as time,
                location,
                expected_attendance as attendance,
                entry_type as entry,
                status
            FROM events 
            WHERE status IN ('upcoming', 'ongoing')
            ORDER BY event_date ASC, start_time ASC
            LIMIT 4
        ");
        
        $events = $stmt->fetchAll();
        
        // Get highlights for each event
        foreach ($events as &$event) {
            $highlightStmt = $pdo->prepare("
                SELECT highlight_text 
                FROM event_highlights 
                WHERE event_id = ? 
                ORDER BY display_order ASC
            ");
            $highlightStmt->execute([$event['id']]);
            $event['highlights'] = $highlightStmt->fetchAll(PDO::FETCH_COLUMN, 0);
        }
        
        // If no data in database, return fallback data
        if (empty($events)) {
            $events = getFallbackEvents();
        }
    } else {
        // Table doesn't exist, return fallback data
        $events = getFallbackEvents();
    }
    
    echo json_encode([
        'success' => true,
        'data' => $events,
        'count' => count($events),
        'message' => 'Events retrieved successfully'
    ]);
    
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage(),
        'data' => getFallbackEvents()
    ]);
}

function getFallbackEvents() {
    return [
        [
            'id' => 1,
            'title' => 'Vintage Motorcycle Show',
            'description' => 'Annual showcase of the finest vintage motorcycles from around the world. Featuring rare models, custom builds, and restoration competitions. This year\'s theme focuses on British classics with special exhibits from private collections.',
            'formatted_date' => 'June 15, 2025',
            'time' => '9:00 AM - 6:00 PM',
            'location' => 'World Trade Center, Metro Manila',
            'attendance' => '500+ Enthusiasts',
            'entry' => 'Free Admission',
            'highlights' => [
                "Live restoration demonstrations",
                "Expert panel discussions",
                "Vintage parts marketplace",
                "Ride-in show competition",
                "Photography contest"
            ]
        ],
        [
            'id' => 2,
            'title' => 'Cafe Racer Rally',
            'description' => 'Gathering of cafe racer enthusiasts from across the Philippines. Rideouts through the city, custom bike competitions, live music, and vendor displays. Experience the cafe racer culture at its finest.',
            'formatted_date' => 'July 22, 2025',
            'time' => '8:00 AM - 5:00 PM',
            'location' => 'Circuit Makati, Metro Manila',
            'attendance' => '300+ Riders',
            'entry' => 'PHP 500 Registration',
            'highlights' => [
                "Custom bike competition",
                "Group ride through Metro Manila",
                "Live bands and entertainment",
                "Vendor marketplace",
                "Skills challenge"
            ]
        ],
        [
            'id' => 3,
            'title' => 'British Classics Tour',
            'description' => 'Scenic tour through the beautiful Tagaytay countryside exclusively for British vintage motorcycles. Enjoy cool mountain air, stunning views of Taal Volcano, and camaraderie with fellow British bike enthusiasts.',
            'formatted_date' => 'August 10, 2025',
            'time' => '7:00 AM - 4:00 PM',
            'location' => 'Tagaytay Highlands, Cavite',
            'attendance' => '150+ Motorcycles',
            'entry' => 'PHP 1,000 (includes lunch)',
            'highlights' => [
                "Scenic mountain routes",
                "Photo stops at viewpoints",
                "Group lunch included",
                "Technical assistance team",
                "Commemorative patch"
            ]
        ],
        [
            'id' => 4,
            'title' => 'Vintage Racing Weekend',
            'description' => 'Historic motorcycle racing event featuring classic racing bikes from the 60s, 70s, and 80s. Watch these beautifully restored machines compete on the track in various vintage racing categories.',
            'formatted_date' => 'September 5-7, 2025',
            'time' => 'All Day Event',
            'location' => 'Clark International Speedway, Pampanga',
            'attendance' => '200+ Racers, 1000+ Spectators',
            'entry' => 'PHP 300 per day',
            'highlights' => [
                "Multiple racing categories",
                "Paddock access available",
                "Vendor village",
                "Food and beverage stalls",
                "Awards ceremony"
            ]
        ]
    ];
}
?>