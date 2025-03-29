// new WOW().init();
// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    var cursor = document.createElement("div"); // Create a div element
    cursor.classList.add("blob"); // Add class "blob"
    document.body.appendChild(cursor); // Append it inside the body
  
    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    });
  });
  

document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature-item");

    // Text content for each feature
    const featureData = [
        {
            title: "Optimized For Performance",
            description: "Enhance efficiency and improve tracking with our latest technology solutions.",
            icon: "/assets/images/icons/icon-book.svg"
        },
        {
            title: "Seamless Integration",
            description: "Easily connect with third-party applications for a smoother workflow.",
            icon: "/assets/images/icons/icon-book.svg"
        },
        {
            title: "Real-Time Monitoring",
            description: "Track operations live and take quick actions when needed.",
            icon: "/assets/images/icons/icon-book.svg"
        },
        {
            title: "Secure & Reliable",
            description: "Ensure data safety with our robust security architecture.",
            icon: "/assets/images/icons/icon-book.svg"
        }
    ];

    features.forEach((feature, index) => {
        feature.addEventListener("click", function () {
            // Reset all feature icons
            features.forEach(f => {
                f.querySelector("img").src = "/assets/images/icons/icon-feature.svg";
            });

            // Change clicked feature icon
            this.querySelector("img").src = "/assets/images/icons/icon-feature-click.svg";

            // Elements to animate
            const mainIcon = document.getElementById("main-icon");
            const mainTitle = document.getElementById("main-title");
            const mainDesc = document.getElementById("main-desc");

            // Apply down-to-top animation
            [mainIcon, mainTitle, mainDesc].forEach(el => {
                el.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                el.style.opacity = 0;
                el.style.transform = "translateY(20px)";
            });

            setTimeout(() => {
                // Update content
                mainIcon.src = featureData[index].icon;
                mainTitle.textContent = featureData[index].title;
                mainDesc.textContent = featureData[index].description;

                // Bring elements back with animation
                [mainIcon, mainTitle, mainDesc].forEach(el => {
                    el.style.opacity = 1;
                    el.style.transform = "translateY(0)";
                });
            }, 300);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    function animateCounter(elementId, target, duration, step, format = "short") {
        const element = document.getElementById(elementId);
        if (!element) return;

        let value = 0, stepTime = Math.max(1, duration / (target / step));

        const timer = setInterval(() => {
            value = Math.min(value + step, target);

            // Show "15000" instead of "15k" only for happy-customers-counter
            if (elementId === "happy-customers-counter") {
                element.textContent = value; 
            } else {
                element.textContent = format === "short" ? `${(value / 1000).toFixed(0)}k` 
                    : (value / 10).toFixed(1);
            }

            if (value >= target) clearInterval(timer);
        }, stepTime);
    }

    // Start counters
    animateCounter("fleet-counter", 24000, 2000, 1000, "short");    // "24k"
    animateCounter("rating-counter", 46, 1500, 1, "decimal");       // "4.6"
    animateCounter("miles-counter", 32000, 2500, 1000, "short");    // "32k"
    animateCounter("happy-customers-counter", 15000, 2000, 500);    // "15000" (not "15k")
});


//this is for the when video content comes into screen video automatically play
document.querySelectorAll(".hover-video").forEach(video => {
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();  // Play when in viewport
            } else {
                entry.target.pause(); // Pause when out of viewport
            }
        });
    }, { threshold: 0.5 }); // 50% visibility required to trigger

    observer.observe(video);
});



    const carousel = document.getElementById("carousel");
        const items = document.querySelectorAll("#carousel > div");
        const totalItems = items.length;
        const visibleItems = 3;
        let index = 0;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;
        }

        document.getElementById("nextBtn").addEventListener("click", () => {
            index = (index + 1) % (totalItems - visibleItems + 1);
            updateCarousel();
        });

        document.getElementById("prevBtn").addEventListener("click", () => {
            index = (index - 1 + (totalItems - visibleItems + 1)) % (totalItems - visibleItems + 1);
            updateCarousel();
        });

        // Auto-slide every 3 seconds
        setInterval(() => {
            index = (index + 1) % (totalItems - visibleItems + 1);
            updateCarousel();
        }, 3000);


        
        function incrementFleet() {
            let input = document.getElementById("vehicle");
            let value = parseInt(input.value || 0);
            input.value = value + 1;
        }
        
        function decrementFleet() {
            let input = document.getElementById("vehicle");
            let value = parseInt(input.value || 0);
            if (value > 0) {
                input.value = value - 1;
            }
        }
        function increment() {
            let input = document.getElementById("fuelInput");
            input.value = parseInt(input.value || 0) + 1; // Increase value
        }
    
        function decrement() {
            let input = document.getElementById("fuelInput");
            input.value = Math.max(0, parseInt(input.value || 0) - 1); // Decrease but not below 0
        }

        function incrementLiter() {
            let input = document.getElementById("fuelInput");
            input.value = parseInt(input.value || 0) + 1; // Increase value
        }
    
        function decrementLiter() {
            let input = document.getElementById("fuelInput");
            input.value = Math.max(0, parseInt(input.value || 0) - 1); // Decrease but not below 0
        }

       // Currency mapping
    const currencySymbols = {
        "INR": "₹",
        "USD": "$",
        "EUR": "€",
        "GBP": "£",
        "JPY": "¥"
    };

    // Update currency symbol dynamically
    document.getElementById("currencySelect").addEventListener("change", function () {
        const selectedCurrency = this.value;
        document.getElementById("currencySymbol").textContent = currencySymbols[selectedCurrency];
    });
        