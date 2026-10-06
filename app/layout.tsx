import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/context/cart";
import { Header } from "@/components/store/Header";
import { Footer } from "@/components/store/Footer";
import { CartDrawer } from "@/components/store/CartDrawer";
import { WhatsAppButton } from "@/components/brand/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jost = Jost({ subsets: ["latin"], variable: "--font-jost", weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = {
  title: "Mazala Phone ® | Especialista em Apple — Cataguases & Região",
  description: "Seu mundo Apple começa aqui. iPhones lacrados e seminovos com 1 ano de garantia total. Entregas expressas em Cataguases e envio para todo o Brasil.",
  keywords: ["iPhone Cataguases", "Mazala Phone", "Apple Cataguases", "iPhone seminovo garantia 1 ano", "MacBook", "iPad"],
  openGraph: {
    title: "Mazala Phone ® | Seu mundo Apple começa aqui",
    description: "1 Ano de Garantia em todos os seminovos. Lacrados e seminovos selecionados.",
    url: "https://mazalaphone.com.br",
    siteName: "Mazala Phone ®",
    images: [
      {
        url: "/brand/logo.webp",
        width: 800,
        height: 800,
        alt: "Mazala Phone ® Logo Oficial",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jost.variable} dark`}>
      <body className="min-h-screen flex flex-col bg-mazala-bg text-mazala-text antialiased">
        <CartProvider>
          <Header />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <WhatsAppButton />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
