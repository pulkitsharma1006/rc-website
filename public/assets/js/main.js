document.addEventListener("DOMContentLoaded", function () {
    initCursorEffect();
    initFeatureClickEvents();
    initCounters();
    initVideoAutoPlay();
    initCarousel();
    initFleetControls();
    initFuelControls();
    initCurrencySelector();
    
});

function initCursorEffect() {
    const cursor = document.createElement("div");
    cursor.classList.add("blob");
    document.body.appendChild(cursor);
    document.addEventListener("mousemove", e => {
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });
}

function initFeatureClickEvents() {
    const features = document.querySelectorAll(".feature-item");
    const featureData = [
        { title: "Optimized For Performance", description: "Enhance efficiency and improve tracking with our latest technology solutions.", icon: "/assets/images/icons/icon-book.svg" },
        { title: "Seamless Integration", description: "Easily connect with third-party applications for a smoother workflow.", icon: "/assets/images/icons/icon-book.svg" },
        { title: "Real-Time Monitoring", description: "Track operations live and take quick actions when needed.", icon: "/assets/images/icons/icon-book.svg" },
        { title: "Secure & Reliable", description: "Ensure data safety with our robust security architecture.", icon: "/assets/images/icons/icon-book.svg" }
    ];
    
    features.forEach((feature, index) => {
        feature.addEventListener("click", function () {
            document.querySelectorAll(".feature-item img").forEach(img => img.src = "/assets/images/icons/icon-feature.svg");
            this.querySelector("img").src = "/assets/images/icons/icon-feature-click.svg";
            updateFeatureContent(featureData[index]);
        });
    });
}

function updateFeatureContent({ title, description, icon }) {
    const elements = ["main-icon", "main-title", "main-desc"].map(id => document.getElementById(id));
    elements.forEach(el => {
        el.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
    });
    setTimeout(() => {
        elements[0].src = icon;
        elements[1].textContent = title;
        elements[2].textContent = description;
        elements.forEach(el => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        });
    }, 300);
}

function initCounters() {
    const counters = [
        { id: "fleet-counter", target: 24000, duration: 2000, step: 1000, format: "short" },
        { id: "rating-counter", target: 46, duration: 1500, step: 1, format: "decimal" },
        { id: "miles-counter", target: 32000, duration: 2500, step: 1000, format: "short" },
        { id: "happy-customers-counter", target: 15000, duration: 2000, step: 500, format: "full" }
    ];
    counters.forEach(({ id, target, duration, step, format }) => animateCounter(id, target, duration, step, format));
}

function animateCounter(elementId, target, duration, step, format) {
    const element = document.getElementById(elementId);
    if (!element) return;
    let value = 0, stepTime = Math.max(1, duration / (target / step));
    const timer = setInterval(() => {
        value = Math.min(value + step, target);
        element.textContent = format === "full" ? value : format === "short" ? `${(value / 1000).toFixed(0)}k` : (value / 10).toFixed(1);
        if (value >= target) clearInterval(timer);
    }, stepTime);
}

function initVideoAutoPlay() {
    document.querySelectorAll(".hover-video").forEach(video => {
        new IntersectionObserver(entries => {
            entries.forEach(entry => entry.target[entry.isIntersecting ? "play" : "pause"]());
        }, { threshold: 0.5 }).observe(video);
    });
}

function initCarousel() {
    const carousel = document.getElementById("carousel");
    const items = document.querySelectorAll("#carousel > div");
    let index = 0, visibleItems = 3;
    const totalItems = items.length;
    const updateCarousel = () => carousel.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;
    
    document.getElementById("nextBtn").addEventListener("click", () => {
        index = (index + 1) % (totalItems - visibleItems + 1);
        updateCarousel();
    });
    document.getElementById("prevBtn").addEventListener("click", () => {
        index = (index - 1 + (totalItems - visibleItems + 1)) % (totalItems - visibleItems + 1);
        updateCarousel();
    });
    setInterval(() => {
        index = (index + 1) % (totalItems - visibleItems + 1);
        updateCarousel();
    }, 3000);
}

function initFleetControls() {
    initIncrementDecrement("vehicle");
}

function initFuelControls() {
    initIncrementDecrement("fuelInput");
}

function initIncrementDecrement(id) {
    const input = document.getElementById(id);
    if (!input) return;
    document.getElementById(`${id}-increment`).addEventListener("click", () => input.value = parseInt(input.value || 0) + 1);
    document.getElementById(`${id}-decrement`).addEventListener("click", () => input.value = Math.max(0, parseInt(input.value || 0) - 1));
}

function initCurrencySelector() {
    const currencySymbols = { INR: "₹", USD: "$", EUR: "€", GBP: "£", JPY: "¥" };
    document.getElementById("currencySelect").addEventListener("change", function () {
        document.getElementById("currencySymbol").textContent = currencySymbols[this.value];
    });
}
