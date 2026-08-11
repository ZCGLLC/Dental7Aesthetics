import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { asset } from "@/lib/paths";
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
  title: {
    default: "Dental 7 Aesthetics | Classy Dental Care in Karachi",
    template: "%s | Dental 7 Aesthetics",
  },
  description:
    "Dentist-led general and aesthetic dentistry in Karachi—checkups, whitening, veneers, implants, orthodontics, root canals, and emergency care near Malir Cantt.",
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
    images: [{ url: asset("/brand/logo-512.png"), width: 512, height: 512 }],
    locale: "en_PK",
    type: "website",
  },
  icons: {
    icon: asset("/brand/logo-512.png"),
    apple: asset("/brand/logo-512.png"),
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
