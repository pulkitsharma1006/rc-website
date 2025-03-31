
    $(document).ready(function () {
        // Get the full path from the URL
        let path = window.location.pathname;

        // Define the mapping for both elements
        const contentMap = {
            "fuel-monitoring": {heading: "Tank Up Your Power and ",desc: "Drive Fleet Performance Higher!"},
            "video-telematics": {heading: "See Beyond Data",desc: "Empower Safety with Insights."},
            "yard-management": {heading: "Warehouses that work smarter,",desc: "not harder"},
            "last-mile": {heading: "Deliver Satisfaction to",desc: "Your Customer!"},
            "fleet-management": {heading: "From Warehouse to Doorstep",desc: "We Optimize every (s)Mile"},
            "enterprise": {heading: "Tank Up Your Power and ",desc: "Drive Fleet Performance Higher!"},
            "government": {heading: "Tank Up Your Power and ",desc: "Drive Fleet Performance Higher!"},
            "individuals": {heading: "From Warehouse to Doorstep",desc: "We Optimize every (s)Mile"},
            "blog": {heading: "Your Journey to Smarter Operations",desc: "Starts Here."},
            "contact-us": {heading: "Interested in Our Solutions?",desc: "Let’s Get Started!"},
            "careers": {heading: "At Roadcast, ",desc: "We work, celebrate, and grow—together."},
            "podcast": {heading: "Your Journey to Smarter Operations",desc: "Starts Here."}
        };

        // Default values
        let headingText = "Cast aside all other options.";
        let descText = "Choose RoadCast !";

        // Check if any key matches the URL path
        for (let key in contentMap) {
            if (path.includes(key)) {
                headingText = contentMap[key].heading;
                descText = contentMap[key].desc;
                break; // Stop searching once a match is found
            }
        }
        // Update the elements
        $("#footer-contact-heading").text(headingText);
        $("#footer-contact-desc").text(descText);
    });

