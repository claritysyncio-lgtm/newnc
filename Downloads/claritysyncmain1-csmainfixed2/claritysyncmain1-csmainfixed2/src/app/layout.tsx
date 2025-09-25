import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/theme-context";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClaritySync",
  description: "Tools and templates to bring focus, alignment, and productivity.",
};

import SiteHeader from "./components/site-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${saira.variable} antialiased`}>
        <ThemeProvider>
          <SiteHeader />
          {children}
          {/* Vercel analytics & speed insights - temporarily disabled */}
          {/* <Analytics />
          <SpeedInsights /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
