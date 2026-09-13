import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { JourneyProvider } from "@/components/purchase-flow/journey-provider";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://redplanetregistry.com"),
  title: { default: "Red Planet Registry — Your Place on the Red Planet", template: "%s | Red Planet Registry" },
  description: "Create a personalized symbolic designation on Mars with unique coordinates, a registry ID and a beautifully designed certificate.",
  openGraph: { title: "Red Planet Registry", description: "Your place on the Red Planet.", type: "website", images: ["/images/mars-hero.png"] },
  twitter: { card: "summary_large_image", title: "Red Planet Registry", description: "Your place on the Red Planet.", images: ["/images/mars-hero.png"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><JourneyProvider>{children}</JourneyProvider></body>
    </html>
  );
}
