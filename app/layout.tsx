import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavMenu from "@/components/navmenu";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "APP EXTRACTOR",
  description: "View AndroidManifest, resources, and assets from APK files",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>



        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        ><NavMenu></NavMenu>
          {children}
          <footer className="bg-gray-800 text-white p-4 text-center">
            <p>
              © 2024 pwnd x bgs
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
