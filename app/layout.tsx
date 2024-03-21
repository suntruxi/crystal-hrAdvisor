import type { Metadata } from "next";
import { Inter, Tangerine } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const tangerine = Tangerine({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Crystal HR Advisor",
  description:
    "Firmă de consultanță în resurse umane dedicată exclusiv industriei de transport",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={tangerine.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
