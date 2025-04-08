$(document).ready(function(){

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

    function getCurrencySymbol(currency) {
        switch (currency) {
            case 'INR': return '₹';
            case 'USD': return '$';
            case 'EUR': return '€';
            case 'GBP': return '£';
            case 'JPY': return '¥';
            default: return '$';
        }
    }


    // Calculation for fuel Consumption
    // Change the code aand total capacity of truck 300L monthly
    $(document).ready(function () {
        $('#currencySelect').on('change', function () {
            const symbol = getCurrencySymbol($(this).val());
            $('#currencySymbol').text(symbol);
        });

        $('.custom-button').on('click', function () {
            const fleetSize = parseFloat($('#fleetSizeInput').val()) || 0;
            const fuelPrice = parseFloat($('#fuelPriceInput').val()) || 0;
            const fuelTheft = parseFloat($('#fuelInput').val()) || 0;
            const currencySymbol = getCurrencySymbol($('#currencySelect').val());

            const monthlyLoss = fleetSize * fuelTheft * fuelPrice * 30;
            const monthlySave = monthlyLoss * 0.15; // changed to 15%
            const dailyLoss = monthlyLoss / 30;
            const dailySave = monthlySave / 30;

            $('#lossAmount').text(currencySymbol + monthlyLoss.toFixed(2));
            $('#saveAmount').text(currencySymbol + monthlySave.toFixed(2));
            $('#dailyLoss').html(`On an Average <br> Everyday you are losing <br> ${currencySymbol}${dailyLoss.toFixed(2)}`);
            $('#dailySave').html(`On an Average <br> Everyday you can save <br> ${currencySymbol}${dailySave.toFixed(2)}`);
        });

        // Increment / Decrement functions
        window.incrementFleet = function () {
            let val = parseInt($('#fleetSizeInput').val()) || 0;
            $('#fleetSizeInput').val(val + 1);
        }

        window.decrementFleet = function () {
            let val = parseInt($('#fleetSizeInput').val()) || 0;
            $('#fleetSizeInput').val(Math.max(0, val - 1));
        }

        window.incrementLiter = function () {
            let val = parseFloat($('#fuelInput').val()) || 0;
            $('#fuelInput').val((val + 1).toFixed(1));
        }

        window.decrementLiter = function () {
            let val = parseFloat($('#fuelInput').val()) || 0;
            $('#fuelInput').val(Math.max(0, val - 1).toFixed(1));
        }
    });

    // Calculation for fuel Consumption
    // Change the code aand total capacity of truck 300L monthly


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
                
                let progressBar1Width = Math.min(80 + (scrollPercentage * 0.5), 30) + "%"; // 30% → 80%
                let progressBar2Width = Math.max(30 - (scrollPercentage * 0.5), 80) + "%"; // 80% → 30%

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
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.12" d="M3 8.3C3 6.61984 3 5.77976 3.32698 5.13803C3.6146 4.57354 4.07354 4.1146 4.63803 3.82698C5.27976 3.5 6.11984 3.5 7.8 3.5H16.2C17.8802 3.5 18.7202 3.5 19.362 3.82698C19.9265 4.1146 20.3854 4.57354 20.673 5.13803C21 5.77976 21 6.61984 21 8.3V16.7C21 18.3802 21 19.2202 20.673 19.862C20.3854 20.4265 19.9265 20.8854 19.362 21.173C18.7202 21.5 17.8802 21.5 16.2 21.5H7.8C6.11984 21.5 5.27976 21.5 4.63803 21.173C4.07354 20.8854 3.6146 20.4265 3.32698 19.862C3 19.2202 3 18.3802 3 16.7V8.3Z" fill="#C1C7D0"/>
                <path d="M12 8.5V12.5M12 12.5V16.5M12 12.5H8M12 12.5H16M7.8 21.5H16.2C17.8802 21.5 18.7202 21.5 19.362 21.173C19.9265 20.8854 20.3854 20.4265 20.673 19.862C21 19.2202 21 18.3802 21 16.7V8.3C21 6.61984 21 5.77976 20.673 5.13803C20.3854 4.57354 19.9265 4.1146 19.362 3.82698C18.7202 3.5 17.8802 3.5 16.2 3.5H7.8C6.11984 3.5 5.27976 3.5 4.63803 3.82698C4.07354 4.1146 3.6146 4.57354 3.32698 5.13803C3 5.77976 3 6.61984 3 8.3V16.7C3 18.3802 3 19.2202 3.32698 19.862C3.6146 20.4265 4.07354 20.8854 4.63803 21.173C5.27976 21.5 6.11984 21.5 7.8 21.5Z" stroke="#C1C7D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `);

            // Toggle clicked accordion
            if (content.hasClass("open")) {
                content.slideUp().removeClass("open");
                icon.html(`
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.12" d="M3 8.3C3 6.61984 3 5.77976 3.32698 5.13803C3.6146 4.57354 4.07354 4.1146 4.63803 3.82698C5.27976 3.5 6.11984 3.5 7.8 3.5H16.2C17.8802 3.5 18.7202 3.5 19.362 3.82698C19.9265 4.1146 20.3854 4.57354 20.673 5.13803C21 5.77976 21 6.61984 21 8.3V16.7C21 18.3802 21 19.2202 20.673 19.862C20.3854 20.4265 19.9265 20.8854 19.362 21.173C18.7202 21.5 17.8802 21.5 16.2 21.5H7.8C6.11984 21.5 5.27976 21.5 4.63803 21.173C4.07354 20.8854 3.6146 20.4265 3.32698 19.862C3 19.2202 3 18.3802 3 16.7V8.3Z" fill="#C1C7D0"/>
                    <path d="M12 8.5V12.5M12 12.5V16.5M12 12.5H8M12 12.5H16M7.8 21.5H16.2C17.8802 21.5 18.7202 21.5 19.362 21.173C19.9265 20.8854 20.3854 20.4265 20.673 19.862C21 19.2202 21 18.3802 21 16.7V8.3C21 6.61984 21 5.77976 20.673 5.13803C20.3854 4.57354 19.9265 4.1146 19.362 3.82698C18.7202 3.5 17.8802 3.5 16.2 3.5H7.8C6.11984 3.5 5.27976 3.5 4.63803 3.82698C4.07354 4.1146 3.6146 4.57354 3.32698 5.13803C3 5.77976 3 6.61984 3 8.3V16.7C3 18.3802 3 19.2202 3.32698 19.862C3.6146 20.4265 4.07354 20.8854 4.63803 21.173C5.27976 21.5 6.11984 21.5 7.8 21.5Z" stroke="#C1C7D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                `);
            } else {
                content.slideDown().addClass("open");
                icon.html(`
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.12" d="M3 8.3C3 6.61984 3 5.77976 3.32698 5.13803C3.6146 4.57354 4.07354 4.1146 4.63803 3.82698C5.27976 3.5 6.11984 3.5 7.8 3.5H16.2C17.8802 3.5 18.7202 3.5 19.362 3.82698C19.9265 4.1146 20.3854 4.57354 20.673 5.13803C21 5.77976 21 6.61984 21 8.3V16.7C21 18.3802 21 19.2202 20.673 19.862C20.3854 20.4265 19.9265 20.8854 19.362 21.173C18.7202 21.5 17.8802 21.5 16.2 21.5H7.8C6.11984 21.5 5.27976 21.5 4.63803 21.173C4.07354 20.8854 3.6146 20.4265 3.32698 19.862C3 19.2202 3 18.3802 3 16.7V8.3Z" fill="#5F57FF"/>
                    <path d="M8 12.5H16M7.8 21.5H16.2C17.8802 21.5 18.7202 21.5 19.362 21.173C19.9265 20.8854 20.3854 20.4265 20.673 19.862C21 19.2202 21 18.3802 21 16.7V8.3C21 6.61984 21 5.77976 20.673 5.13803C20.3854 4.57354 19.9265 4.1146 19.362 3.82698C18.7202 3.5 17.8802 3.5 16.2 3.5H7.8C6.11984 3.5 5.27976 3.5 4.63803 3.82698C4.07354 4.1146 3.6146 4.57354 3.32698 5.13803C3 5.77976 3 6.61984 3 8.3V16.7C3 18.3802 3 19.2202 3.32698 19.862C3.6146 20.4265 4.07354 20.8854 4.63803 21.173C5.27976 21.5 6.11984 21.5 7.8 21.5Z" stroke="url(#paint0_linear_40008414_6591)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_40008414_6591" x1="19.658" y1="3.5" x2="5.64357" y2="2.6131" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3BEEE2"/>
                    <stop offset="0.985" stop-color="#05A194" stop-opacity="0.7"/>
                    </linearGradient>
                    </defs>
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



    
    


    
    

    