<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

require_once 'config/database.php';

try {
    // Check database connection
    $connectionCheck = $pdo->query("SELECT 1")->fetchColumn();
    
    // Check tables
    $tables = [
        'motorcycle_categories',
        'motorcycles',
        'gallery_items',
        'resources',
        'gear_items',
        'events'
    ];
    
    $tableStatus = [];
    foreach ($tables as $table) {
        $tableCheck = $pdo->query("SHOW TABLES LIKE '$table'");
        $tableStatus[$table] = $tableCheck->rowCount() > 0;
    }
    
    // Count records
    $recordCounts = [];
    foreach ($tables as $table) {
        if ($tableStatus[$table]) {
            $countStmt = $pdo->query("SELECT COUNT(*) FROM $table");
            $recordCounts[$table] = $countStmt->fetchColumn();
        } else {
            $recordCounts[$table] = 0;
        }
    }
    
    echo json_encode([
        'success' => true,
        'database' => DB_NAME,
        'connected' => true,
        'tables' => $tableStatus,
        'records' => $recordCounts,
        'message' => 'Database check completed'
    ]);
    
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'database' => DB_NAME,
        'connected' => false,
        'error' => $e->getMessage(),
        'message' => 'Database connection failed'
    ]);
}
?>