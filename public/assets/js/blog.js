const blogs = [
    { link: "Roadcast-believes-IoT-in-Transportation-can-mitigate-Cyberattacks.html", image: "blog_92.jpg", category: ["Social", "Technology", "Product"], title: "Roadcast believes IoT in Transportation can mitigate Cyberattacks", description: "The Internet of Things (IoT) is revolutionizing transportation, addressing challenges like slow tech adoption", readingTime: "04 min.", date: "March 24, 2025" },
    { link: "Track-Like-a-Woman-The-Instinct-That-Never-Fails.html", image: "blog_91.jpg", category: ["Social", "Technology", "Product"], title: "Track Like a Woman: The Instinct That Never Fails", description: "Ever wondered how women always know exactly where things are? That missing charger", readingTime: "06 min.", date: "March 07, 2025" },
    { link: "If-Shiva-Had-Gadgets-in-2025-Mahashivratri-Meets-Technology.html", image: "blog_90.jpg", category: ["Product"], title: "If Shiva Had Gadgets in 2025! Mahashivratri Meets Technology", description: "Mahashivratri is more than just a festival—it's a symbol of transformation", readingTime: "06 min.", date: "Feb 26, 2025" },
    { link: "Love-at-First-Drive-A-Man-His-Car-and-a-Perfect-Valentines-Date.html", image: "blog_89.jpg", category: ["Social"], title: "Love at First Drive: A Man, His Car, and a Perfect Valentine's Date", description: "Valentine’s Day is all about love, while most people are busy planning", readingTime: "06 min.", date: "Feb 14, 2025" },
    { link: "Kumbh-Where-spirituality-meets-modernity.html", image: "blog_88.jpg", category: ["Engineering"], title: "Kumbh - Where spirituality meets modernity.", description: "Remember the earlier decades when Bollywood movies", readingTime: "06 min.", date: "Feb 10, 2025" },
    { link: "How-A-Safe-And-Efficient-Transportation-System.html", image: "blog_87.jpg", category: ["Security"], title: "How A Safe And Efficient Transportation System Is The 'Cog In India's Tourism Wheel'", description: "India's cultural diversity is one of its most compelling", readingTime: "06 min.", date: "Jan 13, 2025" },
    { link: "Make-A-New-Year-Resolution.html", image: "blog_86.jpg", category: ["Compliance"], title: "Make A New Year Resolution 'NO MORE ROAD ACCIDENTS !'", description: "The New Year is one of the few universally celebrated events, connecting people across borders", readingTime: "06 min.", date: "Jan 01, 2025" },
    { link: "Jingle-Bells-Jingle-Bells-Jingle-All-the-Way.html", image: "blog_85.jpg", category: ["Company"], title: "JINGLE BELLS JINGLE BELLS JINGLE ALL THE WAY", description: "Come Christmas and it's the advent of a joyous occasion!", readingTime: "06 min.", date: "Dec 24, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_84.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_83.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_82.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_81.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_80.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_79.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_78.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_77.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_76.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_75.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_74.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_73.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_72.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_71.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_70.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_69.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_68.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_67.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_66.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_65.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_64.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_63.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_62.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_61.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_60.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_59.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_58.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_57.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_56.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_55.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_54.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_53.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_52.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_51.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_50.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_49.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_48.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_47.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_46.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_45.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_44.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_43.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_42.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_41.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_40.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_39.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_38.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_37.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_36.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_35.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_34.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_33.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_32.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_31.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_30.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_29.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_28.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_27.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
    { link: "Joy-Of-Giving-Roadcast-Delivers-Happiness.html", image: "blog_26.jpg", category: ["Engineering"], title: "Joy Of Giving! Roadcast Delivers Happiness!!", description: "In today’s fast-paced world, the essence of Christmas can sometimes get overshadowed", readingTime: "06 min.", date: "Dec 20, 2024" },
];

let filteredBlogs = blogs;

function renderPaginatedBlogs(data) {
    const $blogContainer = $('#blog-container');
    $blogContainer.empty();

    data.forEach(blog => {
        const blogHtml = `
            <div class="bg-white shadow-md p-4 pb-8 rounded-xl border border-[#eeeeee]">
                <a href="/blog/${blog.link}" class="block">
                    <img src="/assets/images/blog/${blog.image}" alt="" class="w-full object-cover rounded-2xl mb-4">
                    <div class="min-h-28">
                        <h6 class="my-2 text-lg font-semibold text-[#0D0D12] line-clamp-2">${blog.title}</h6>
                        <p class="text-gray-600 text-sm line-clamp-2">${blog.description}</p>
                    </div>
                    <p class="text-gray-500 text-sm mt-3"><span class="font-semibold">Reading Time:</span> ${blog.readingTime} | ${blog.date}</p>
                </a>
            </div>
        `;
        $blogContainer.append(blogHtml);
    });
}

function renderPagination() {
    $('#pagination-container').pagination({
        dataSource: filteredBlogs,
        pageSize: 6,
        showPrevious: true,
        showNext: true,
        callback: function (data, pagination) {
            renderPaginatedBlogs(data);
        }
    });
}

// Category filter
function filterBlogs(category) {
    if (category) {
        filteredBlogs = blogs.filter(blog => blog.category.includes(category));
    } else {
        filteredBlogs = blogs;
    }
    renderPagination(); // refresh pagination after filter
}

// Initial load
$(document).ready(function () {
    renderPagination();
});
