import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const sora = Sora({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vaibhav Takuli",
  description: "Product Developer",
  icons: [
    { rel: "icon", url: "/logo.png", type: "image/png" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.className} h-full antialiased`}
    >
      <body className="min-h-full">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
          </div>
        </div>
        <SmoothScroll />
      </body>
    </html>
  );
}
