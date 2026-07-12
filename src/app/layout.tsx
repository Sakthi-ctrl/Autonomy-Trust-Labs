import type { Metadata } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Autonomy Trust Labs — Trust Infrastructure for the Autonomous World",
  description: "Helping organizations build, validate, deploy, and monitor trusted autonomous systems and Physical AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans text-text-dark bg-white antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
