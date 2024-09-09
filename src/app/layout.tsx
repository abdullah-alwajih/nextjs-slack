import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {ConvexClientProvider} from "@/components/convex-client-provider";
import {ConvexAuthNextjsServerProvider} from "@convex-dev/auth/nextjs/server";
import { Toaster } from 'sonner';

import {Modals} from '@/components/modals';
import {JotaiProvider} from "@/components/jotai-provider";

const lato = localFont({
  src: [
    {
      path: './fonts/lato-black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/lato-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/lato-latin.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/lato-italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/lato-regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Where work happens | Slack",
  description: "Slack is a new way to communicate with your team. It’s faster, better organized, and more secure than email.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexAuthNextjsServerProvider>
      <html lang="en">
      <body className={`${lato.variable} font-lato antialiased`}>
      <ConvexClientProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
           <JotaiProvider>
              <Modals />
              {children}
            </JotaiProvider>
            <Toaster richColors theme="light" position="bottom-center" />
        </ThemeProvider>
      </ConvexClientProvider>
      </body>
      </html>
    </ConvexAuthNextjsServerProvider>
  );
}
