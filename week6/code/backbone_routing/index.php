<?php
require_once "includes/initialize.php";
?>
<!DOCTYPE html>
<html>
<head>
    <title>Backbone Routing</title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" type="text/css" href="<?= $basePath; ?>css/style.css"/>
</head>
<body>
<div id="container">
    <div id="team-links">
        <a href="#" data-club="Ajax" data-league="Eredivisie">Ajax</a>
        <a href="#" data-club="Getafe" data-league="PrimeraDivision">Getafe</a>
        <a href="#" data-club="Liverpool" data-league="PremierLeague">Liverpool</a>
    </div>

    <div id="team-matches">
        <span class="start-message">Choose a team on the left!</span>
    </div>
</div>
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.2.1/backbone-min.js"></script>
<script type="text/javascript" src="<?= $basePath; ?>js/init.js"></script>
<script type="text/javascript">site.settings = <?= $settings; ?>;</script>
<script type="text/javascript" src="<?= $basePath; ?>js/models/Match.js"></script>
<script type="text/javascript" src="<?= $basePath; ?>js/collections/Matches.js"></script>
<script type="text/javascript" src="<?= $basePath; ?>js/routers/Matches.js"></script>
<script type="text/javascript" src="<?= $basePath; ?>js/views/TeamLinks.js"></script>
<script type="text/javascript" src="<?= $basePath; ?>js/views/TeamMatches.js"></script>
<script type="text/javascript" src="<?= $basePath; ?>js/main.js"></script>
</body>
</html>
