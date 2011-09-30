<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>MDM Architects</title>
	
	<meta name="author" content="Christopher Moore at StudioConover" />
	<meta name="description" content=""/>
	<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>

	<link rel="stylesheet" type="text/css" href="css/reset.css"media="screen" />
	<link rel="stylesheet" type="text/css" href="css/style.css"media="screen" />
	<link rel="stylesheet" type="text/css" href="css/media-queries.css"media="screen" />
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
	<link href='http://fonts.googleapis.com/css?family=Droid+Serif:700,400,400italic,700italic' rel='stylesheet' type='text/css'>
	<!--[if IE]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>
<body>
	<!-- Modal Window -->
	<div id="boxes">
	    <div id="modal" class="window"> 
	    	 <a href="#" class="close">X</a>
	    	 	<div id="ajax-content">
	    	 	</div>
	    </div>
	    <div id="mask"></div>
	</div>
	<!-- Modal Window -->
	<div id="canvas">
		<canvas height="" width="" id="supersized" >
			Uh... Maybe you should update your browser. 
			<a href="http://browsehappy.com/">Browse Happy</a>
		</canvas>
	</div>
	<div id="container">
		<section id="content">
			<header>
				<!-- <a href="#"><img class="logo" src="imgs/logo.png"/></a> -->
				<h1> Melvin Dalton McGEE ARCHITECTS, INC.</h1>
				<hr/>
				<nav>
					<a href="#modal" name="modal" title="About">ABOUT</a>
					<a href="#modal" name="modal" title="Projects">PROJECTS</a>
					<a href="#modal" name="modal" title="Press">PRESS</a>
					<a href="#modal" name="modal" title="Contact">CONTACT</a>
					<div class="clearfix"></div>
				</nav>	
			</header>
		</section>
	</div> <!-- END container -->
	<footer>
		<p>619.299.9111 <span>1530 West Lewis Street, San Diego CA 92103</span></p>
		<hr/>
	</footer>	
	
	 <div id="tab" class="slide-out-div">
 		<a class="handle">+</a>
        <div id="tab-content">
       
      			<!-- Set these via php Vars -->
				<img src="img/stamps/icons/tab_dog.png" class="stamp" title="dog"/>
				<img src="img/stamps/icons/tab_strat.png" class="stamp" title="strat"/>
				<img src="img/stamps/icons/tab_man.png" class="stamp" title="man"/>
				<div class="stamp color" id="red" title="red"></div>
				<div class="stamp color" id="orange" title="orange"></div>
				<div class="stamp color" id="green" title="green"></div>
				 <div id="tooltip"><p>Architect's Stamp</p></div>
		</div>	
    </div>
	<script type="text/javascript" src="http://www.google.com/jsapi"></script>
	<script type="text/javascript">
		google.load('jquery', '1');
		google.load('jqueryui', '1');
		/* add google analytics */
	</script>
		 <script type="text/javascript" src="js/jcanvas.min.js"></script>
		 <script type="text/javascript" src="js/jquery.tabSlideOut.v1.3.min.js"></script>	
		 <script type="text/javascript" src="js/masonry.min.js"></script>
		 <script type="text/javascript" src="js/functions.js"></script>
	</body>
</html>
