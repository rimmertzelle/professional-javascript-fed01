<?php
$basePath = "/2015/week6/code/backbone_routing/";

//Dynamic PHP code that will normally be stored in some kind of controller
$templateData = [
    'matches' => file_get_contents('templates/matches.html'),
    'error' => file_get_contents('templates/error.html')
];

//Build settings that will be available in JS as properties in site.settings
$settings = json_encode([
    'basePath' => $basePath,
    'templates' => $templateData
]);
