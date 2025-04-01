const blogs = [
    {
        link: "Track-Like-a-Woman-The-Instinct-That-Never-Fails.html",
        image: "blog_91.jpg",
        category: "Engineering",
        title: "Track Like a Woman: The Instinct That Never Fails",
        description: "Ever wondered how women always know exactly where things are? That missing charger",
        readingTime: "06 min.",
        date: "March 07, 2025"
    },
    {
        link: "If-Shiva-Had-Gadgets-in-2025-Mahashivratri-Meets-Technology.html",
        image: "blog_90.jpg",
        category: "Engineering",
        title: "If Shiva Had Gadgets in 2025! Mahashivratri Meets Technology",
        description: "Mahashivratri is more than just a festival—it's a symbol of transformation",
        readingTime: "06 min.",
        date: "Feb 26, 2025"
    },
    {
        link: "Love-at-First-Drive-A-Man-His-Car-and-a-Perfect-Valentines-Date.html",
        image: "blog_89.jpg",
        category: "Engineering",
        title: "Love at First Drive: A Man, His Car, and a Perfect Valentine's Date",
        description: "Valentine’s Day is all about love, while most people are busy planning",
        readingTime: "06 min.",
        date: "Feb 14, 2025"
    },
    {
        link: "Kumbh-Where-spirituality-meets-modernity.html",
        image: "blog_88.jpg",
        category: "Engineering",
        title: "Kumbh - Where spirituality meets modernity.Take a dip in Roadcast’s safety solutions",
        description: "Remember the earlier decades when Bollywood movies",
        readingTime: "06 min.",
        date: "Feb 10, 2025"
    },
    {
        link: "How-A-Safe-And-Efficient-Transportation-System.html",
        image: "blog_87.jpg",
        category: "Engineering",
        title: "How A Safe And Efficient Transportation System Is The 'Cog In India's Tourism Wheel'",
        description: "India's cultural diversity is one of its most compelling",
        readingTime: "06 min.",
        date: "Jan 13, 2025"
    },
    {
        link: "Make-A-New-Year-Resolution.html",
        image: "blog_86.jpg",
        category: "Engineering",
        title: "Make A New Year Resolution 'NO MORE ROAD ACCIDENTS !'",
        description: "The New Year is one of the few universally celebrated events, connecting people across borders",
        readingTime: "06 min.",
        date: "Jan 01, 2025"
    },
    {
        link: "Jingle-Bells-Jingle-Bells-Jingle-All-the-Way.html",
        image: "blog_85.jpg",
        category: "Engineering",
        title: "JINGLE BELLS JINGLE BELLS JINGLE ALL THE WAY",
        description: "Come Christmas and it's the advent of a joyous occasion ! Myriad thoughts begin to swirl",
        readingTime: "06 min.",
        date: "Dec 24, 2024"
    },
    {
        link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html",
        image: "blog_84.jpg",
        category: "Engineering",
        title: "Joy Of Giving! Roadcast Delivers Happiness!!",
        description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed by",
        readingTime: "06 min.",
        date: "Dec 20, 2024"
    },
];

// Function to render blogs in the frontend
document.addEventListener("DOMContentLoaded", () => {
    const blogContainer = document.getElementById("blog-container");
    blogs.forEach(blog => {
        const blogElement = document.createElement("div");
        blogElement.classList.add("blog-item");
        blogElement.innerHTML = `
            <a href="/blog/${blog.link}" class="${blog.category}">
                <img src="/assets/images/blog/${blog.image}" alt="" class="w-full object-cover rounded-2xl mb-2">
                <p class="text-base text-[#14A99C] font-normal">${blog.category}</p>
                <h6 class="my-2 text-2xl font-normal text-[#0D0D12] line-clamp-2">${blog.title}</h6>
                <p class="text-[#666D80] text-base font-normal line-clamp-2">${blog.description}</p>
                <p class="text-base text-[#666D80] mt-3"><span class="font-semibold">Reading Time :-</span> ${blog.readingTime}&nbsp;&nbsp;|&nbsp;&nbsp;${blog.date}</p>
            </a>
        `;
        blogContainer.appendChild(blogElement);
    });
});
