$(function(){
	var varX;
	// Tab buttons to set vars
    	$('#tab-content > *').click(function(){
    		// Get Variable for tab item 
    		varX = $(this).attr('title');
    		// Now to swap out cursor and stamp for this item and set color
    		/* console.log(varX); */
    	});
	
	// AJAX Color box
	$(".example5").colorbox();

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
	// set the cursor default
	var cursor = 'dog_cursor';
	
	// update the cursor
	function mouse(mouseVar){
			$('body').css('cursor', 'url(img/' + mouseVar + '.png), none');
		}
	// fire the cursor
	//mouse(cursor);
	
	
	// set canvas to fullscreen
 	$("canvas").attr('height',$(window).height());
	$("canvas").attr('width', $(window).width());

	//load bkgd img to canvas
	function dwg(){
		$("canvas").drawImage({
		  		source: "img/bkgd.jpg",
		 		x: 0, 
		 		y: 0, 
		 		height : $(document).height(),
		 		width : $(document).width(),
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
		// log function
			console.log(varX)
		stamp();
	});
	
	// set math for position from top
	// slide out tab 
	 $('.slide-out-div').tabSlideOut({
                 tabHandle: '.handle',           //class of the element that will be your tab
                 pathToTabImage: 'img/plus.png', //path to the image for the tab (optionaly can be set using css)
                 imageHeight: '185px',           //height of tab image
                 imageWidth: '17px',             //width of tab image    
                 tabLocation: 'right',           //side of screen where tab lives, top, right, bottom, or left
                 speed: 300,                     //speed of animation
                 action: 'click',                //options: 'click' or 'hover', action to trigger animation
                 topPos: '400px',                //position from the top
                 fixedPosition: false            //options: true makes it stick(fixed position) on scroll
             });
      
             
	// set overlay height
		var docheight = $(document).height();
		var third= $(document).height()/6;
		var sixth = $(document).height()/12;
		var dh = docheight - third ; 
		
	$('#cboxOverlay').css('height', dh);
	$('#cboxOverlay').css('margin-top', sixth );
	
});//END Doc Ready
