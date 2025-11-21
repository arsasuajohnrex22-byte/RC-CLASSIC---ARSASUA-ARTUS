<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'vintage_moto');
define('DB_USER', 'your_db_user');
define('DB_PASS', 'your_db_password');

function getDbConnection() {
    $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    if ($mysqli->connect_errno) {
        error_log("DB Error: " . $mysqli->connect_error);
        return null;
    }
    $mysqli->set_charset('utf8mb4');
    return $mysqli;
}
