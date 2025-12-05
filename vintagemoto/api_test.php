<?php
// api_test.php - Direct test
$api_files = [
    'get_reviews.php',
    'get_brands.php',
    'get_models.php',
    'get_events.php'
];

echo "<h1>API File Test</h1>";
foreach ($api_files as $file) {
    $path = "api/$file";
    if (file_exists($path)) {
        echo "<p style='color:green'>✅ $file exists</p>";
    } else {
        echo "<p style='color:red'>❌ $file NOT FOUND</p>";
    }
}
?>