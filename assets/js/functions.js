$(document).ready(function(){

    function showMenu(prmBut,prmMenu){
        $(prmBut).hover(function(){
            $(prmMenu).stop(true, true).show();
            $(this).addClass("active");
        }, function(){
            $(prmMenu).hide();
            $(this).removeClass("active");
        });

        $(prmMenu).hover(function(){
            $(this).show();
            $(prmBut).addClass("active");
        }, function(){
            $(this).hide();
            $(prmBut).removeClass("active");
        });
    }

        showMenu(".m1but",".smdiv1");
        showMenu(".m2but",".smdiv2");
        showMenu(".m3but",".smdiv3");
        showMenu(".m4but",".smdiv4");
        showMenu(".m5but",".smdiv5");
        showMenu(".m6but",".smdiv6");

        /*mobile menu | Start*/
	$(document).on('click',".btnmenu",function() {
		$('.mobmenucont').stop(true, true).animate({left:0}, 200);
		$('.bgm').delay(200).fadeIn(200);
	});
		
	$(document).on('click',".closemmenu",function() {
		$('.mobmenucont').stop(true, true).animate({left:'-85%'}, 200);
		$('.bgm').delay(100).fadeOut(700);
	});
	/*mobile menu | End*/

    /*Tree view menu | Start*/
	$("#browser").treeview({
		collapsed: true,
		animated:"normal"
	});	
	/*Tree view menu | End*/

    });

    $(document).ready(function(){
        $("#Testimonials-2").owlCarousel({
            loop: true,                 // Infinite loop
            margin: 16,                 // Space between items
            autoplay: true,             // Very low timeout to keep it moving
            autoplaySpeed: 8000,        // Smooth transition speed
            autoplayHoverPause: false,  // Keep autoplay running
            slideTransition: 'linear',  // Ensures smooth continuous sliding
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3.2
                }
            }
        });
    });

    $(document).ready(function(){
        $("#Testimonials-1").owlCarousel({
            loop: true,                 // Infinite loop
            margin: 16,                 // Space between items
            autoplay: true,             // Very low timeout to keep it moving
            autoplaySpeed: 6500,        // Smooth transition speed
            autoplayHoverPause: false,  // Keep autoplay running
            slideTransition: 'linear',  // Ensures smooth continuous sliding
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3.7
                }
            }
        });
    });
    