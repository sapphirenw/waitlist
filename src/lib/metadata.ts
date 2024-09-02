import { Metadata } from "next"
import { getConfig } from "./config"

export const getMetadata = () => {
    const config = getConfig()

    const meta: Metadata = {
        title: {
            template: "%s",
            default: config.title,
        },
        description: config.desc,
        generator: 'Next.js',
        applicationName: config.title,
        referrer: 'origin-when-cross-origin',
        keywords: config.keywords,
        authors: [
            {
                name: "Jake Landers",
                url: "https://jakelanders.com"
            },
            {
                name: "Kevin Landers",
            },
        ],
        creator: 'Jake Landers',
        formatDetection: {
            email: true,
            address: false,
            telephone: false,
        },
        metadataBase: new URL(config.url),
        openGraph: {
            title: config.title,
            description: config.desc,
            url: config.url,
            siteName: config.title,
            images: [
                {
                    url: "/favicon.ico",
                    height: 256,
                    width: 256,
                },
            ],
            locale: 'en_US',
            type: 'website',
        },
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: false,
                noimageindex: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        twitter: {
            card: 'summary_large_image',
            title: config.title,
            description: config.desc,
            siteId: 'GMq2t4Zb39BbuOJpVPE8rfrfurEsuiDq',
            creator: '@sapphirenw',
            creatorId: 'GMq2t4Zb39BbuOJpVPE8rfrfurEsuiDq',
            images: ['/favicon.ico'],
        },
        verification: {
            google: 'google',
            yandex: 'yandex',
            yahoo: 'yahoo',
            // other: {
            //   me: ['my-email', 'my-link'],
            // },
        },
    }

    return meta
}