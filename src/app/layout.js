// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ['latin'], weight: ['500'] });

export const metadata = {
  title: "Sleepstiq",
  description: "Your number one sleep guide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-mainText relative`}>
        <nav className="absolute"><Navbar /></nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
