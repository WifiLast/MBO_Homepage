<?php
$indexPath = __DIR__ . "/browser/index.html";

if (!is_file($indexPath)) {
    http_response_code(404);
    header("Content-Type: text/plain; charset=UTF-8");
    echo "Angular index.html not found at: " . $indexPath;
    exit;
}

header("Content-Type: text/html; charset=UTF-8");
readfile($indexPath);
