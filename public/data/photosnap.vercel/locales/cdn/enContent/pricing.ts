export default {
    hero: {
        image: "/images/pricing/desktop/hero.jpg",
        title: "PRICING",
        description:
            "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos.",
    },
    options: {
        period: ["Monthly", "Yearly"],
        periodSuffix: {
            month: "per month",
            year: "per year",
        },
        button: "PICK PLAN",
        items: [
            {
                title: "Basic",
                description:
                    "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
                price: {
                    monthly: "$19.00",
                    yearly: "$149.00",
                },
            },
            {
                title: "Pro",
                description:
                    "More advanced features available. Recommended for photography veterans and professionals.",
                price: {
                    monthly: "$39.00",
                    yearly: "$349.00",
                },
            },
            {
                title: "Business",
                description:
                    "Additional features available such as more detailed metrics. Recommended for business owners.",
                price: {
                    monthly: "$99.00",
                    yearly: "$899.00",
                },
            },
        ],
    },
    compare: {
        title: "COMPARE",
        thead: ["THE FEATURES", "BASIC", "PRO", "BUSINESS"],
        tbody: [
            ["UNLIMITED STORY POSTING", true, true, true],
            ["UNLIMITED PHOTO UPLOAD", true, true, true],
            ["EMBEDDING CUSTOM CONTENT", false, true, true],
            ["CUSTOMIZE METADATA", false, true, true],
            ["ADVANCED METRICS", false, false, true],
            ["PHOTO DOWNLOADS", false, false, true],
            ["SEARCH ENGINE INDEXING", false, false, true],
            ["CUSTOM ANALYTICS", false, false, true],
        ],
    },
};
