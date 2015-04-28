<?php
$basePath = "/week6/code/backbone_routing/";

//Dynamic PHP code that will normally be stored in some kind of controller
$templateData = array(
    'matches' => file_get_contents('templates/matches.html'),
    'error' => file_get_contents('templates/error.html')
);
$settings = json_encode(array(
    'basePath' => $basePath,
    'templates' => $templateData
));
?>
<!DOCTYPE html>
<html>
<head>
    <title>Backbone Routing</title>
    <meta charset="utf-8"/>
    <link rel="stylesheet" type="text/css" href="<?php print $basePath; ?>css/style.css"/>
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
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min.js"></script>
<script type="text/javascript" src="<?php print $basePath; ?>js/init.js"></script>
<script type="text/javascript">site.settings = <?php print $settings; ?>;</script>
<script type="text/javascript" src="<?php print $basePath; ?>js/models/Match.js"></script>
<script type="text/javascript" src="<?php print $basePath; ?>js/collections/Matches.js"></script>
<script type="text/javascript" src="<?php print $basePath; ?>js/routers/Matches.js"></script>
<script type="text/javascript" src="<?php print $basePath; ?>js/views/TeamLinks.js"></script>
<script type="text/javascript" src="<?php print $basePath; ?>js/views/TeamMatches.js"></script>
<script type="text/javascript" src="<?php print $basePath; ?>js/main.js"></script>
</body>
</html>