$(function(){
	/*== GLOBALS ==*/
	var varX;
	var pageVar;
	var cursor;
	
	/*== MODAL WINDOW ==*/
	//select all the a tag with name equal to modal
    $('a[name=modal]').click(function(e) {
        //Cancel the link behavior
        e.preventDefault();
        //Get the A tag
        var id = $(this).attr('href');
     
     	// set overlay height
		var docheight = $(window).height();
		var fourth = $(window).height()/4;
		var dh = docheight - fourth ; 
     
        //Get the screen height and width
        /*  var maskHeight = $(document).height(); */
        var maskWidth = $(window).width();
     
        //Set height and width to mask to fill up the whole screen
        $('#mask').css({'width':maskWidth,'height':dh});
        $('#mask').css('margin-top', '100px');
         
        //transition effect     
        $('#mask').fadeIn(1000);    
        $('#mask').fadeTo("slow",0.8);  
     
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();
               
        //Set the popup window to center
        var num = 3;
        $(id).css('top', 120);
        $(id).css('left', winW/2-$(id).width()/2);
     
        //transition effect
        $(id).fadeIn(2000); 
     
    }); 
     
    //if close button is clicked
    $('.window .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('#mask, .window').hide();
    });     
     
    //if mask is clicked
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });     
    
    /*== AJAX ==*/
	// Nav buttons to set vars for AJAX
    	$('nav > *').click(function(){
    		// Get Variable for tab item 
    		pageVar = $(this).attr('title');
    		// Now swap out page var
    		console.log(pageVar);
    		 $.ajax({
 	        		  type: "POST",
 	        		  data: '',
					  url: 'pages/' + pageVar + '.php',
					  success: function(data) 
					  	{
					  			$('#ajax-content').empty();
						   		$('<section id="page"/>').html(data).fadeIn(1000).appendTo('#ajax-content');
						   		// Delegate functions to children
								$('nav').delegate('div', 'click', function(){
									// grab arrow button events
									var name = $(this).attr('id');
								 	console.log(name);
								});
					 	}
	 			});// END AJAX
    	});
    	
	/*== PRESS PAGE - MASONRY ==*/
	// Masonry 
	$('.press').masonry({
		  itemSelector: '.box',
		  columnWidth: 100,
		  isAnimated: true
		});

	/*== CURSOR ==*/
	// update the cursor
	function mouse(mouseVar){
			$('body').css('cursor', 'url(img/stamps/cursors/' + mouseVar + '_cursor.png), none');
		}
		
	// cursor to icon 
	$('body').mouseout(function(){
               $('#mycursor').hide();
               return false;
          });
          $('#canvas').mouseenter(function(){
               $('#mycursor').show();
               return false;
          });
          $('#canvas').mousemove(function(e){
               $('#mycursor').css('left', e.clientX - 20).css('top', e.clientY + 7);
     });
     
     //stamp function 
	function stamp(){
			$("canvas").drawImage({
		  		source: "img/"+ varX +"_stamp.png",
		 		x: $.mynamespace.xpos, 
		 		y: $.mynamespace.ypos
			});
		}
	
	// get cursor coordinates
	 $(document).mousemove(function(e){ 
		 $.mynamespace = { 
			 	 xpos : parseInt(e.pageX), 
				 ypos : parseInt(e.pageY), 
				 width : 200, 
				 height : 200
		 	}; 
		 });
		 
	// Stamp only if no modal
	$(document).click(function (){
		// fire off stamp
		if ($('#modal').is(":visible")){
			// do nothing prevent stamp while modal is up
		}else{
			stamp();
		}
	});
	
	/*== TAB ==*/	
	// Tab buttons to set vars
    	$('#tab-content > *').click(function(){
    		// Get Variable for tab item 
    		varX = $(this).attr('title');
    		// Now to swap out cursor and stamp for this item and set color
			mouse(varX);
    	});

		
	//hide tooltip and show on hover
	$('#tooltip').hide();
	$('.handle').hover(function(){
			$('#tooltip').slideToggle("slow");
		return true;
	});
	
	// slide out tab 
	 $('.slide-out-div').tabSlideOut({
                 tabHandle: '.handle',           //class of the element that will be your tab
                 pathToTabImage: 'img/icons/plus.png', //path to the image for the tab (optionaly can be set using css)
                 imageHeight: '185px',           //height of tab image
                 imageWidth: '17px',             //width of tab image    
                 tabLocation: 'right',           //side of screen where tab lives, top, right, bottom, or left
                 speed: 300,                     //speed of animation
                 action: 'click',                //options: 'click' or 'hover', action to trigger animation
                 //topPos: 600+ 'px',            //position from the top
                 fixedPosition: false            //options: true makes it stick(fixed position) on scroll
             });
             
         //load bkgd img to canvas
		function dwg(){
			$("canvas").drawImage({
			  		source: "img/elements/bkgd.jpg",
			 		x: 0, 
			 		y: 0, 
			 		height : $(window).height(),
			 		width : $(window).width(),
			 		fromCenter: false
				});
			}
		dwg();
            
        /*==RESIZE CANVAS TO MAINTAIN PROPORTION ==*/
        // set canvas to fullscreen
	 	$("canvas").attr('height',$(window).height());
		$("canvas").attr('width', $(window).width());

	    var fixDimensions = function(){
	    
		    //Get the image dimensions:
		    var image = {
		        width: $("canvas").width(),    
		        height: $("canvas").height()
		    };
		    
		    //Get the page dimensions:
		    var page = {
		        width:$(window).width(),
		        height:$(window).height()
		    };
		    
		    //Get the image ratio, this is what we want to preserve:
		    var imageRatio = image.width/image.height;
		    
		    //Get the page ratio, this is what we use to decide which dimension to fix:
		    var pageRatio = page.width/page.height;
		    
		    //Do we fix the height? (if not, we fix the width)
		    var fixHeight = (imageRatio > pageRatio);
		    
		    //Create a place to store the new image dimensions:
		    var newImage = {
		        left:0,
		        top:0,
		        width:0,
		        height:0
		    };
		    
		    //Do the calculations:
		    if (fixHeight){
		        newImage.height = page.height;
		        newImage.width = page.height * imageRatio;
		        //The height matches the page height, so we need to center
		        //the width.
		        newImage.left = -(newImage.width - page.width) / 2;
		    } else {
		        newImage.height = page.width / imageRatio;
		        newImage.width = page.width;
		        newImage.top = -(newImage.height - page.height) / 2;
		    
		    }
		    
		    //Now we set the image's new dimensions:
		    $("canvas").css({
		        "position":"absolute",
		        "top":newImage.top + 'px',
		        "left":newImage.left + 'px',
		        "width":newImage.width + 'px',
		        "height":newImage.height + 'px' 
		    });
			
			/*== RESPONSIVE ==*/
			//fix mask width too
			 $('#mask').css('width',newImage.width +'px' );
			 $('#modal').css('width',newImage.width/3 *2 +'px' );
			/*== RESPONSIVE ==*/
			
		    //console.log(fixHeight, image, page);
	};
	
	fixDimensions();
	$(window).resize(fixDimensions);
	/*==RESIZE CANVAS TO MAINTAIN PROPORTION ==*/
});//END Doc Ready
