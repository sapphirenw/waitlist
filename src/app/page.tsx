import Image from "next/image"
import FormClient from "./form";
import Content from "./content";
import { getConfig } from "@/lib/config";

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const config = getConfig()
  const refId = searchParams!['refId'] ?? ""

  return <main className="min-h-screen h-full w-screen">
    <div className="grid md:grid-cols-2 place-items-center h-full w-full min-h-screen">
      <div className="text-white w-full h-full md:h-screen bg-primary relative overflow-hidden">
        <div className="z-0 absolute -top-16 -left-16 w-[700px] h-[800px] bg-secondary rounded-full 
                      mix-blend-multiply filter blur-3xl opacity-70" />
        <div className="z-0 absolute -top-1/2 -right-1/2 w-[700px] h-[500px] bg-secondary rounded-full 
                      mix-blend-multiply filter blur-3xl opacity-70" />
        <div className="z-0 absolute top-1/2 right-1/2 w-[700px] h-[500px] bg-secondary rounded-full 
                      mix-blend-multiply filter blur-3xl opacity-70" />
        <div className="z-0 absolute -bottom-16 -right-16 w-[700px] h-[500px] bg-secondary rounded-full 
                      mix-blend-multiply filter blur-3xl opacity-70" />
        <Content />
      </div>
      <div className="w-full h-screen grid place-items-center bg-slate-100 z-10 relative">
        <div className="px-2 lg:px-0">
          <FormClient refId={refId} config={config} />
        </div>
        <div className="p-4 md:p-0 md:absolute md:bottom-4 md:right-4">
          <a target="_blank" href="https://aithing.co">
            <Image
              src="https://pocketbase.sapphirenw.com/api/files/2v0pb1wl1ionpe7/kf77rafap2dwxtx/aithing_dark_340x100_dsCNq2ggDV.png"
              alt="AIThing"
              width={85}
              height={25}
            />
          </a>
        </div>
      </div>
    </div>
  </main>
}
