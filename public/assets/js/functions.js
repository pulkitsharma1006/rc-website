// new WOW().init();
$(document).ready(function(){

    function showMenu(prmBut,prmMenu){
        $(prmBut).hover(function(){
            $(prmMenu).css({
                "top": "0",  // Start position (above the button)
                "display": "block",
                "opacity": "1"
            }).animate({
                "top": "39px",  // Move down to normal position
                "opacity": "1"
            }, 600); // Animation duration (300ms)
            $(this).addClass("active");
        }, function(){
            $(prmMenu).css({"display": "none", "opacity": "0"});
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
        var owl = $(".owl-carousel");
    
        owl.owlCarousel({
            loop: true,                // Infinite loop
            margin: 30,                // Space between items
            nav: false,                // Hide default navigation
            autoplay: true,            // Auto-slide
            autoplayTimeout: 2000,     // Slide every 2 seconds
            autoplayHoverPause: true,  // Pause on hover
            animateOut: "fadeOut",     // Fade-out effect
            animateIn: "fadeIn",       // Fade-in effect
            smartSpeed: 800,           // Smooth transition speed
            responsive: {
                0: { items: 1 },       // 1 item on small screens
                640: { items: 2 },     // 2 items on medium screens
                1024: { items: 2.5 },    // 3 items on large screens
                1440: { items: 4 },    // 3 items on large screens
            }
        });
    
        // Custom Navigation
        $(".next").click(function() {
            owl.trigger("next.owl.carousel");
        });
    
        $(".prev").click(function() {
            owl.trigger("prev.owl.carousel");
        });
    });

    $(document).ready(function () {
        $("#openPopup").click(function () {
            $("#videoFrame").attr("src", "https://www.youtube.com/embed/ldWWGNb37lE?si=-ItWkk4RoA41F_eT");
            $("#videoPopup").removeClass("hidden");
            $('body').addClass('overflow-hidden');
        });

        $("#closePopup").click(function () {
            $("#videoPopup").addClass("hidden");
            $("#videoFrame").attr("src", ""); // Stop the video when closing
            $('body').removeClass('overflow-hidden');
        });

        // Close modal when clicking outside the video
        $("#videoPopup").click(function (e) {
            if ($(e.target).closest(".relative").length === 0) {
                $("#videoPopup").addClass("hidden");
                $("#videoFrame").attr("src", "");
            }
        });
    });




    $(document).ready(function () {
        let lastScrollTop = 0;
        let animationTriggered = false;

        function isElementInViewport(el) {
            let rect = el.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom > 0;
        }

        function animateProgress(scrollTop) {
            if (!animationTriggered && isElementInViewport(document.querySelector(".progress-container"))) {
                $(".progress-container").removeClass("opacity-0");

                // Adjust width based on scroll position
                let scrollPercentage = (scrollTop / ($(document).height() - $(window).height())) * 100;
                
                let progressBar1Width = Math.min(30 + (scrollPercentage * 0.5), 80) + "%"; // 30% → 80%
                let progressBar2Width = Math.max(80 - (scrollPercentage * 0.5), 30) + "%"; // 80% → 30%

                $(".progress-bar-1").css("width", progressBar1Width);
                $(".progress-bar-2").css("width", progressBar2Width);

                animationTriggered = true;
            }
        }

        $(window).on("scroll", function () {
            let scrollTop = $(window).scrollTop();

            if (isElementInViewport(document.querySelector(".progress-container"))) {
                animateProgress(scrollTop);
            }

            lastScrollTop = scrollTop;
        });

        // Initial check if already in view
        animateProgress($(window).scrollTop());
    });

    $(document).ready(function () {
        $(".hoverVideo").each(function () {
            this.pause(); // Ensure all videos are paused on page load
        });
    
        $(".playPauseButton").on("click", function () {
            let video = $(this).siblings(".hoverVideo")[0]; // Get the associated video
            let playIcon = $(this).find(".playIcon");
            let pauseIcon = $(this).find(".pauseIcon");
    
            if (video.paused) {
                video.play();
                playIcon.addClass("hidden");
                pauseIcon.removeClass("hidden");
            } else {
                video.pause();
                playIcon.removeClass("hidden");
                pauseIcon.addClass("hidden");
            }
        });
    
        $(".hoverVideo").on("play", function () {
            let button = $(this).siblings(".playPauseButton");
            button.find(".playIcon").addClass("hidden");
            button.find(".pauseIcon").removeClass("hidden");
        });
    
        $(".hoverVideo").on("pause", function () {
            let button = $(this).siblings(".playPauseButton");
            button.find(".playIcon").removeClass("hidden");
            button.find(".pauseIcon").addClass("hidden");
        });
    
        $(".relative.group").on("mouseenter", function () {
            $(this).find(".playPauseButton").css("opacity", "1");
        });
    
        $(".relative.group").on("mouseleave", function () {
            let video = $(this).find(".hoverVideo")[0];
            if (!video.paused) {
                $(this).find(".playPauseButton").css("opacity", "0");
            }
        });
    });



    // accordion | Start
    $(document).ready(function () {
        $(".accordion-button").click(function () {
            let content = $(this).next(".accordion-content");
            let icon = $(this).find(".icon");

            // Close all other accordions
            $(".accordion-content").not(content).slideUp().removeClass("open");
            $(".icon").html(`
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                </svg>
            `);

            // Toggle clicked accordion
            if (content.hasClass("open")) {
                content.slideUp().removeClass("open");
                icon.html(`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                    </svg>
                `);
            } else {
                content.slideDown().addClass("open");
                icon.html(`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                    </svg>
                `);
            }
        });
    });

    /*-------------------------------------------------------------------------------
	  Contact Page Form 
	-------------------------------------------------------------------------------*/

    
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            country: {
                required: false
            },
            phone: {
                required: true,
                minlength: 6
            },
            message: {
                required: true,
                minlength: 20
            }
        },
        messages: {
            name: {
                required: "please enter your name",
                minlength: "please enter your name"
            },
            email: {
                required: "please enter email"
            },
            subject: {
                required: "please enter phone number"
            },
            message: {
                required: "you have to write something to send this form.",
                minlength: "Add atleast 20 characters to submit the form."
            }
        },
        submitHandler: function(form) {
            $('#submitBtn').html('Sending...');
        
            // Define a unique key to track submission time
            const formSubmitKey = "formSubmitted";
            const storedTimestamp = localStorage.getItem(formSubmitKey);
            const currentTime = new Date().getTime();
        
            // Check if the key exists and if 24 hours have passed
            if (storedTimestamp && (currentTime - storedTimestamp) < 24 * 60 * 60 * 1000) {
                $('#submitBtn').html('Request a Demo');
                return false; // Prevent form submission
            }
        
            // Set the timestamp value
            $('#formSubmitTimestamp').val(new Date().toISOString());
        
            console.log($(form).serialize());
        
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "https://prod-s2.track360.net.in/api/v1/auth/contact-details-website",
                success: function() {
                    // Store the current timestamp in localStorage
                    localStorage.setItem(formSubmitKey, currentTime);
        
                    $('#submitBtn').html('Sent !');
                    $('#contactForm :input').attr('disabled', 'disabled');
                    $('#contactForm').fadeTo("slow", 1, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor', 'default');
                        window.location = 'https://roadcast.in/thanks.html';
                    });
                },
                error: function() {
                    $('#contactForm').fadeTo("slow", 1, function() {
                        $('#error').fadeIn();
                        $('#submitBtn').html('Failed !');
                    });
                }
            });
        }
            
    });
    


    
    

    