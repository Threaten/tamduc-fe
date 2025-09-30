import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopBanner from "./components/TopBanner";
import { ToastProvider, ToastViewport } from "@/app/components/toast";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ClientApolloProvider } from "./ApolloWrapper";
import { getGeneral } from "@/lib/api/queries";

export const metadata: Metadata = {
  title: {
    default: "HealthPlus Clinic — Modern, Minimal Care",
    template: "%s — HealthPlus Clinic",
  },
  description:
    "Minimal, modern clinic providing multi-specialty outpatient care in HCMC.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "HealthPlus Clinic",
    description: "Multi-specialty outpatient clinic in HCMC.",
    url: "https://example.com",
    siteName: "HealthPlus Clinic",
    type: "website",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "HealthPlus Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HealthPlus Clinic",
    description: "Multi-specialty outpatient clinic in HCMC.",
    images: ["/og-default.png"],
  },
};

type GeneralInfo = {
  hotline1?: string | null;
  hotline2?: string | null;
  emergencyHotline?: string | null;
  email?: string | null;
  address?: string | null;
  operatingHours?: string | null;
  socials?: { name: string; url: string }[] | null;
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loadedData = (await getGeneral()) as {
    GeneralInformation: GeneralInfo;
  };
  const general = loadedData?.GeneralInformation;

  return (
    <ClientApolloProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              try {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
                if(theme==='dark'){document.documentElement.classList.add('dark');} else {document.documentElement.classList.remove('dark');}
              } catch {}
            `,
            }}
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ToastProvider>
            <div className="min-h-dvh flex flex-col">
              <TopBanner general={general} />
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer general={general} />
              <ToastViewport />
            </div>
          </ToastProvider>
        </body>
      </html>
    </ClientApolloProvider>
  );
}
