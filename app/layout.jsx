import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ondesk",
  description: "Ondesk is a beautiful landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={
          (inter.className, "w-full md:w-10/12 mx-auto bg-[#f3ede5] relative")
        }
      >
        {children}
      </body>
    </html>
  );
}
