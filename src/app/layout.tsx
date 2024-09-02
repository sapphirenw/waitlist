import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { getMetadata } from "@/lib/metadata";
import { getConfig } from "@/lib/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = getMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // define the custom color overrides
  const config = getConfig()
  const colorOverrides = `--primary: ${config.primaryColor}; --secondary: ${config.secondaryColor};`

  return (
    <html lang="en">
      <head>
        <script defer data-domain={process.env.NEXT_PUBLIC_ANALYTICS_ID!} src="https://analytics.sapphirenw.com/js/script.js"></script>
        {colorOverrides && (
          <style>{`
            :root {
              ${colorOverrides}
            }
          `}</style>
        )}
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
