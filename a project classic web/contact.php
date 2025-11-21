<?php
header('Content-Type: application/json; charset=utf-8');

$ADMIN_EMAIL = 'admin@example.com';

$SMTP_HOST = 'smtp.example.com';
$SMTP_PORT = 587;
$SMTP_USER = 'smtp_user@example.com';
$SMTP_PASS = 'smtp_pass_here';
$SMTP_SECURE = 'tls';

require __DIR__ . '/db.php';

if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require __DIR__ . '/vendor/autoload.php';
} else {
    require_once __DIR__ . '/phpmailer/src/PHPMailer.php';
    require_once __DIR__ . '/phpmailer/src/SMTP.php';
    require_once __DIR__ . '/phpmailer/src/Exception.php';
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

function respond($ok, $msg) {
    echo json_encode(['success' => $ok, 'message' => $msg]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, "Invalid request.");
}

$name = trim($_POST['name'] ?? "");
$email = trim($_POST['email'] ?? "");
$subject = trim($_POST['subject'] ?? "Message");
$message = trim($_POST['message'] ?? "");

if (!$name || !$email || !$message) {
    respond(false, "All fields required.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, "Invalid email.");
}

$db = getDbConnection();
if (!$db) respond(false, "DB error.");

$stmt = $db->prepare("INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $subject, $message);
$stmt->execute();
$id = $stmt->insert_id;
$stmt->close();

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $SMTP_HOST;
    $mail->SMTPAuth = true;
    $mail->Username = $SMTP_USER;
    $mail->Password = $SMTP_PASS;
    $mail->SMTPSecure = $SMTP_SECURE;
    $mail->Port = $SMTP_PORT;

    $mail->setFrom($SMTP_USER, "VintageMoto Website");
    $mail->addAddress($ADMIN_EMAIL);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = "New Message: $subject";
    $mail->Body = "
        <strong>Name:</strong> $name<br>
        <strong>Email:</strong> $email<br>
        <strong>Subject:</strong> $subject<br><br>
        <strong>Message:</strong><br>$message
    ";

    $mail->send();

    respond(true, "Message sent successfully!");
} catch (Exception $e) {
    respond(true, "Message saved but email failed: " . $e->getMessage());
}
