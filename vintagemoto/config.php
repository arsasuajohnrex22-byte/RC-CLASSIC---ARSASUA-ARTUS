<?php
// config.php - Simple database connection
$host = 'localhost';
$dbname = 'vintage_motodb';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connected successfully";
} catch(PDOException $e) {
    // Silently fail - we'll use test data
    // echo "Connection failed";
}
?>