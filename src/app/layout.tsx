import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore the interactive portfolio of Rohit, a Full-Stack Software Engineer specializing in craft-centered web applications, distributed systems, cloud design, and AI models.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Software Engineer",
    "AI Integration",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Rohit" }],
  creator: "Rohit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rohit-portfolio.dev", // Placeholder portfolio domain
    title: "Rohit | Premium Full-Stack Developer & AI Engineer Portfolio",
    description:
      "Interactive professional portfolio showcasing high-performance web applications, clean architectures, and custom PDF resume viewer.",
    siteName: "Rohit Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit | Premium Full-Stack Developer Portfolio",
    description:
      "Interactive professional portfolio showcasing high-performance web applications, clean architectures, and custom PDF resume viewer.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'light' || (!saved && !prefersDark)) {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })()
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
