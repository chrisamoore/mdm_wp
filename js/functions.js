$(function(){
	/*== GLOBALS ==*/
	var varX;
	var pageVar;
	var cursor;
	
	/*== HIDE SCROLL BARS ==*/
	$("html").css("overflow", "hidden");
	$("html").css("overflow", "auto");
	
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
        
	/*== PRESS PAGE - MASONRY ==*/
	// Masonry 
	$('.press').masonry({
		  itemSelector: '.box',
		  columnWidth: 100,
		  isAnimated: true
		});

	
	// update the cursor
	function mouse(mouseVar){
			$('body').css('cursor', 'url(img/' + mouseVar + '_cursor.png), none');
		}
	// Tab buttons to set vars
    	$('#tab-content > *').click(function(){
    		// Get Variable for tab item 
    		varX = $(this).attr('title');
    		// Now to swap out cursor and stamp for this item and set color
			mouse(varX);
    	});
	
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
					 	}
	 			});// END AJAX
    	});

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
	
	// set canvas to fullscreen
 	$("canvas").attr('height',$(window).height());
	$("canvas").attr('width', $(window).width());

	//load bkgd img to canvas
	function dwg(){
		$("canvas").drawImage({
		  		source: "img/bkgd.jpg",
		 		x: 0, 
		 		y: 0, 
		 		height : $(window).height(),
		 		width : $(window).width(),
		 		fromCenter: false
			});
		}
	dwg();
	
	// fire stamp function 
	function stamp(){
			$("canvas").drawImage({
		  		source: "img/"+ varX +"_stamp.png",
		 		x: $.mynamespace.xpos, 
		 		y: $.mynamespace.ypos
			});
		}
		
	// resize window event
	$(window).resize(function(){
			//console.log($(window).height()+', '+$(window).width());
			$("canvas").attr('height',$(window).height());
			$("canvas").attr('width', $(window).width());
			dwg();
		});
		
	// Stop distort w/ jcanvas
	$("canvas").scaleCanvas({
			 x: 100, y: 100,
		 	 width: 1, height: 1
	})
	
	// get cursor coordinates
	 $(document).mousemove(function(e){ 
		 $.mynamespace = { 
			 	 xpos : parseInt(e.pageX), 
				 ypos : parseInt(e.pageY), 
				 width : 200, 
				 height : 200
		 	}; 
		 });
		 
	$(document).click(function (){
		// fire off stamp
		stamp();
	});
	
	$('#tooltip').hide();
	$('.handle').hover(function(){
			$('#tooltip').slideToggle("slow");
		return true;
	});
	
	// slide out tab 
	 $('.slide-out-div').tabSlideOut({
                 tabHandle: '.handle',           //class of the element that will be your tab
                 pathToTabImage: 'img/plus.png', //path to the image for the tab (optionaly can be set using css)
                 imageHeight: '185px',           //height of tab image
                 imageWidth: '17px',             //width of tab image    
                 tabLocation: 'right',           //side of screen where tab lives, top, right, bottom, or left
                 speed: 300,                     //speed of animation
                 action: 'click',                //options: 'click' or 'hover', action to trigger animation
              //   topPos: 600+ 'px',                //position from the top
                 fixedPosition: false            //options: true makes it stick(fixed position) on scroll
             });
      	
});//END Doc Ready
