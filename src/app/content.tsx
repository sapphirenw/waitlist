import { Separator } from "@/components/ui/separator"
import { getConfig } from "@/lib/config"
import Image from "next/image"

export default function Content() {
    const config = getConfig()

    return <div className="z-50 text-center p-4 md:p-8 flex flex-col justify-between h-full w-full">
        <div className="z-50">
            <div className="flex justify-between items-center">
                <Image
                    src={config.image.light}
                    alt={config.image.alt}
                    width={Number(config.image.width) * 0.75}
                    height={Number(config.image.height) * 0.75}
                />
            </div>
            <div className="pt-8 md:pt-16">
                <h2 className="text-3xl md:text-4xl font-bold text-left max-w-lg">{config.tagline}</h2>
                <div className="space-y-8 pt-8 md:pt-16">
                    {config.content.map((item, i) => <ContentItem key={i} props={item} />)}
                </div>
            </div>
        </div>
        <div className="z-50 space-y-4 text-sm font-light opacity-70 pt-4">
            <div className="opacity-50"><Separator /></div>
            <div className="flex items-center space-x-8">
                <a href="/terms" className="hover:underline">Terms</a>
                <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            </div>
        </div>
    </div>
}

export type ContentItemProps = {
    icon: string
    title: string
    text: string
}

function ContentItem({
    props,
}: {
    props: ContentItemProps,
}) {
    return <div className="flex items-start space-x-2">
        <div dangerouslySetInnerHTML={{ __html: props.icon }} />
        <div className="space-y-2 text-left max-w-lg">
            <h3 className="font-medium">{props.title}</h3>
            <p className="text-sm text-left font-light opacity-70 line-clamp-3">{props.text}</p>
        </div>
    </div>
}