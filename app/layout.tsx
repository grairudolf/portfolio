import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Background from "@/components/ui/Background";
import Cursor from "@/components/ui/Cursor";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"]
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Grai Rudolf | Software Engineer & AI/ML Developer",
  description:
    "Personal portfolio of Grai Rudolf, a software engineer and AI/ML developer based in Buea, Cameroon."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="relative overflow-x-hidden bg-offwhite text-charcoal">
        <Background />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
