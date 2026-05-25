<?php
header("Content-Type: application/json");

// Only allow POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["status" => "error"]);
    exit;
}

// Get and sanitize data
$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$message = trim($_POST["message"] ?? "");

// Basic validation
if (empty($name) || empty($email) || empty($message)) {
    echo json_encode(["status" => "error"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error"]);
    exit;
}

// Sanitize
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);

// ===== OPTION 1: SEND EMAIL =====
$to = "your@email.com"; // change this
$subject = "Portfolio Contact Message";

$body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

$headers = "From: $email";

// Try sending
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error"]);
}
?>