import homeContent from "./home";
import storiesContent from "./stories";
import featuresContent from "./features";
import pricingContent from "./pricing";

export default {
    header: {
        items: [
            { title: "STORIES", href: "/stories" },
            { title: "FEATURES", href: "/features" },
            { title: "PRICING", href: "/pricing" },
        ],
        button: "GET AN INVITE",
    },
    home: homeContent,
    stories: storiesContent,
    features: featuresContent,
    pricing: pricingContent,
    beta: {
        title: "WE'RE IN BETA. GET YOUR INVITE TODAY!",
        button: "GET AN INVITE",
        image: "/images/shared/desktop/bg-beta.jpg",
    },
    footer: {
        items: [
            { title: "HOME", href: "/" },
            { title: "STORIES", href: "/stories" },
            { title: "FEATURES", href: "/features" },
            { title: "PRICING", href: "/pricing" },
        ],
        button: "GET AN INVITE",
        copyright: "Copyright 2026. All rights reserved.",
        social: {
            prefix: "/images/shared/desktop/",
            icons: [
                "facebook.svg",
                "youtube.svg",
                "twitter.svg",
                "pinterest.svg",
                "instagram.svg",
            ],
        },
    },
    images: {
        logo: {
            dark: "/images/shared/desktop/logo-dark.svg",
            light: "/images/shared/desktop/logo-light.svg",
        },
        arrow: "/images/shared/desktop/arrow.svg",
    },
};
