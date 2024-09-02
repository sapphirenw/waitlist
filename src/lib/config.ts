import { ContentItemProps } from '@/app/content';
import fs from 'fs';
import path from 'path';

export type AppConfig = {
    title: string
    desc: string
    url: string
    tagline: string
    primaryColor: string
    secondaryColor: string
    image: {
        light: string
        dark: string
        alt: string
        height: string
        width: string
    }
    keywords: string[]
    content: ContentItemProps[]
}

export function getConfig() {
    const configPath = path.join(process.cwd(), 'config.json');
    const configData = fs.readFileSync(configPath, 'utf8');
    return JSON.parse(configData) as AppConfig;
}