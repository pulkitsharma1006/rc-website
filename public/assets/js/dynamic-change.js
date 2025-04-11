
    $(document).ready(function () {
        // Get the full path from the URL
        let path = window.location.pathname;

        // Define the mapping for both elements
        const contentMap = {
            "fuel-monitoring": {heading: "Tank Up Your Power and",desc: "Drive Fleet Performance Higher!"},
            "video-telematics": {heading: "See Beyond Data",desc: "Empower Safety with Insights."},
            "yard-management": {heading: "Warehouses that work smarter,",desc: "not harder"},
            "fleet-management": {heading: "Deliver Satisfaction",desc: "to your Customer!"},
            "last-mile": {heading: "From Warehouse to Doorstep",desc: "We Optimize every (s)Mile"},
            "enterprise": {heading: "Enterprise that moves,",desc: "Trust tracking that delivers!"},
            "government": {heading: "Transforming Public Services Through",desc: "The Power Of Technology!"},
            "individuals": {heading: "Your Moves. Our track(er).",desc: "Perform with freedom."},
            "blog": {heading: "Your Journey to Smarter Operations",desc: "Starts Here."},
            "contact-us": {heading: "Interested in Our Solutions?",desc: "Let’s Get Started!"},
            "careers": {heading: "At Roadcast, ",desc: "Great teams don't happen by chance. they happen by choice!"},
            "podcast": {heading: "Streaming thoughts,",desc: "One episode at a time."},
            "about": {heading: "Cast aside all other options.",desc: "Choose RoadCast!"},
            "transport-and-logistics": {heading: "Transport Management Solutions.",desc: "We'd rather call it Tailor Made Solutions."},
            "emergency": {heading: "Roadcast Gives You The",desc: "Power To Save A Life!"},
            "pharmaceutical": {heading: "Smarter logistics. Healthier outcomes.",desc: "Choose Roadcast!"},
            "construction": {heading: "Smart tracking, safe sites.",desc: "Constructing the future with technology!"},
            "food-beverages": {heading: "Fast, fresh and futuristic: food delivery reimagined.",desc: "Choose RoadCast!"},
            "e-commerce": {heading: "Our E-Commerce and Retail platform bridges the gap",desc: "between desire and delivery."}
        };

        // Default values
        let headingText = "Cast aside all other options.";
        let descText = "Choose RoadCast!";

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

