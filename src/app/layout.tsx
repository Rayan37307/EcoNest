import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { contactInfo } from "@/data/navigation";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EcoNest | Premium Real Estate Developments",
  description: "Discover luxury living with EcoNest — Bangladesh's premier real estate developer. Premium apartments, commercial spaces, and signature developments across Dhaka.",
  keywords: "real estate, Bangladesh, Dhaka, luxury apartments, EcoNest, property developer",
  openGraph: {
    title: "EcoNest | Premium Real Estate Developments",
    description: "Discover luxury living with EcoNest",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const whatsappNumber = contactInfo.phone.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${whatsappNumber}`;

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body text-charcoal bg-white antialiased">
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[#1ebc5a]"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.199-.297.299-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.521.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.073.149.198 2.096 3.2 5.077 4.487.709.306 1.262.49 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.123-.272-.198-.57-.347Z" />
              <path d="M20.52 3.48A11.98 11.98 0 0 0 12.024 0C5.426 0 0 5.426 0 12.024c0 2.12.554 4.19 1.608 6.003L0 24l6.082-1.598A11.99 11.99 0 0 0 12.024 24C18.622 24 24 18.574 24 11.976c0-3.2-1.25-6.214-3.48-8.496ZM12.024 21.6c-1.84 0-3.64-.496-5.203-1.43l-.374-.223-3.608.948.964-3.52-.243-.364A9.58 9.58 0 0 1 2.4 11.976c0-5.292 4.332-9.624 9.624-9.624 2.57 0 4.989 1 6.798 2.809a9.57 9.57 0 0 1 2.81 6.815c0 5.292-4.332 9.624-9.624 9.624Z" />
            </svg>
          </Link>
        </SmoothScroll>
      </body>
    </html>
  );
}
