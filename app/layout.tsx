import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Provider } from "./provider";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CardMaster - Find your Game",
  description: "Choose your number of players and we'll find you a game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
          <head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7774265661621647"
          crossorigin="anonymous"></script>
          </head>
          <body className={inter.className}>
            <Provider>
              <Header />
              {children}
            </Provider>
          </body>
    </html>
  );
}
