const blogs = [
    { link: "Track-Like-a-Woman-The-Instinct-That-Never-Fails.html", image: "blog_91.jpg", category: "Engineering", title: "Track Like a Woman: The Instinct That Never Fails", description: "Ever wondered how women always know exactly where things are? That missing charger", readingTime: "06 min.", date: "March 07, 2025" },
    { link: "If-Shiva-Had-Gadgets-in-2025-Mahashivratri-Meets-Technology.html", image: "blog_90.jpg", category: "Product", title: "If Shiva Had Gadgets in 2025! Mahashivratri Meets Technology", description: "Mahashivratri is more than just a festival—it's a symbol of transformation", readingTime: "06 min.", date: "Feb 26, 2025" },
    { link: "Love-at-First-Drive-A-Man-His-Car-and-a-Perfect-Valentines-Date.html", image: "blog_89.jpg", category: "Company", title: "Love at First Drive: A Man, His Car, and a Perfect Valentine's Date", description: "Valentine’s Day is all about love, while most people are busy planning", readingTime: "06 min.", date: "Feb 14, 2025" },
    { link: "Kumbh-Where-spirituality-meets-modernity.html", image: "blog_88.jpg", category: "Engineering", title: "Kumbh - Where spirituality meets modernity.", description: "Remember the earlier decades when Bollywood movies", readingTime: "06 min.", date: "Feb 10, 2025" },
    { link: "How-A-Safe-And-Efficient-Transportation-System.html", image: "blog_87.jpg", category: "Security", title: "How A Safe And Efficient Transportation System Is The 'Cog In India's Tourism Wheel'", description: "India's cultural diversity is one of its most compelling", readingTime: "06 min.", date: "Jan 13, 2025" },
    { link: "Make-A-New-Year-Resolution.html", image: "blog_86.jpg", category: "Compliance", title: "Make A New Year Resolution 'NO MORE ROAD ACCIDENTS !'", description: "The New Year is one of the few universally celebrated events, connecting people across borders", readingTime: "06 min.", date: "Jan 01, 2025" },
    { link: "Jingle-Bells-Jingle-Bells-Jingle-All-the-Way.html", image: "blog_85.jpg", category: "Company", title: "JINGLE BELLS JINGLE BELLS JINGLE ALL THE WAY", description: "Come Christmas and it's the advent of a joyous occasion!", readingTime: "06 min.", date: "Dec 24, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_84.jpg", category: "Engineering", title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
];

const blogsPerPage = 6;
let currentPage = 1;
let filteredBlogs = blogs;

function changeActiveClass(clickedElement) {
    // Remove active class from all links
    const allLinks = document.querySelectorAll('.grid a');
    allLinks.forEach(link => {
        link.classList.remove('border-l', 'border-[#14A99C]', 'text-[#14A99C]');
        link.classList.add('text-[#818898]');  // reset text color for all
    });

    // Add active class to clicked link
    clickedElement.classList.remove('text-[#818898]');
    clickedElement.classList.add('border-l', 'border-[#14A99C]', 'text-[#14A99C]');
}

function filterBlogs(category) {
    // Implement your filter logic here, you can use the `category` to filter blogs
    console.log('Filter blogs by category:', category);
}

// Render blogs based on the current page and filter
function renderBlogs() {
    const blogContainer = document.getElementById("blog-container");
    blogContainer.innerHTML = "";

    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex);

    paginatedBlogs.forEach(blog => {
        const blogElement = document.createElement("div");
        blogElement.classList.add("bg-white", "shadow-md", "p-4", "pb-8", "rounded-xl", "border", "border-[#eeeeee]");
        blogElement.innerHTML = `
            <a href="/blog/${blog.link}" class="block">
                <img src="/assets/images/blog/${blog.image}" alt="" class="w-full object-cover rounded-2xl mb-4">
                <p class="text-sm text-[#14A99C] font-medium">${blog.category}</p>
                <h6 class="my-2 text-lg font-semibold text-[#0D0D12] line-clamp-2">${blog.title}</h6>
                <p class="text-gray-600 text-sm line-clamp-2">${blog.description}</p>
                <p class="text-gray-500 text-sm mt-3"><span class="font-semibold">Reading Time:</span> ${blog.readingTime} | ${blog.date}</p>
            </a>
        `;
        blogContainer.appendChild(blogElement);
    });

    renderPagination();
}

// Handle filter selection
function filterBlogs(category) {
    if (category) {
        filteredBlogs = blogs.filter(blog => blog.category === category);
    } else {
        filteredBlogs = blogs;  // Show all blogs if no filter
    }
    currentPage = 1;  // Reset to first page when filtering
    renderBlogs();
}

// Render pagination buttons
function renderPagination() {
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
    const pageNumbers = document.getElementById("page-numbers");
    pageNumbers.innerHTML = "";

    let pages = [];
    if (totalPages <= 6) {
        pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
        pages = [1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    pages.forEach(page => {
        const pageButton = document.createElement("button");
        pageButton.innerText = page;
        pageButton.classList.add("h-12", "w-12", "rounded-full", "text-gray-700", "cursor-pointer", "hover:bg-[#14A99C]", "hover:text-white", "transition");

        if (page === currentPage) {
            pageButton.classList.add("bg-[#14A99C]", "text-white");
        }

        if (page !== "...") {
            pageButton.addEventListener("click", () => {
                currentPage = page;
                renderBlogs();
            });
        }

        pageNumbers.appendChild(pageButton);
    });

    document.getElementById("prev-btn").disabled = currentPage === 1;
    document.getElementById("next-btn").disabled = currentPage === totalPages;
}

// Previous and next buttons functionality
document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderBlogs();
    }
});

document.getElementById("next-btn").addEventListener("click", () => {
    if (currentPage < Math.ceil(filteredBlogs.length / blogsPerPage)) {
        currentPage++;
        renderBlogs();
    }
});

// Initial render
document.addEventListener("DOMContentLoaded", renderBlogs);