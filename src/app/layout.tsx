import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Jost({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dental7aesthetics.com"),
  title: "Dental 7 Aesthetics | Classy Dental Care in Karachi",
  description:
    "Dental 7 Aesthetics is a Karachi dental clinic offering general and aesthetic dentistry—whitening, veneers, implants, orthodontics, root canals, and complete smile care near Malir Cantt.",
  keywords: [
    "Dental 7 Aesthetics",
    "dentist Karachi",
    "aesthetic dentistry Karachi",
    "teeth whitening Karachi",
    "dental clinic Malir Cantt",
  ],
  openGraph: {
    title: "Dental 7 Aesthetics",
    description:
      "Certified dental experts in general & aesthetic dentistry. Jinnah Avenue, opposite Malir Cantt, Karachi.",
    url: "https://dental7aesthetics.com",
    siteName: "Dental 7 Aesthetics",
    images: [{ url: "/brand/logo-512.png", width: 512, height: 512 }],
    locale: "en_PK",
    type: "website",
  },
  icons: {
    icon: "/brand/logo.png",
    apple: "/brand/logo-512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
