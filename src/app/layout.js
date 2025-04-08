import { Inter } from "next/font/google";
import "./globals.css";
import icon from "../../public/sahibinden.png";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
//some changes
export const metadata = {
  title: "Sahibinden - Param Güvende Hizmetleri",
  description: "Sahibinden Param Güvende ile hızlı ve güvenli alışveriş yapın.",
  icons: {
    icon: icon,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          #__next-build-watcher { display: none !important; }
          #NextLogo { display: none !important; }
          #nextjs-portal-root { display: none !important; }
          [data-nextjs-dialog-overlay] { display: none !important; }
          [data-nextjs-dialog] { display: none !important; }
        `}</style>
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
