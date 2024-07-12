import "@/styles/globals.css";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import NextLink from "next/link";
import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx("min-h-screen bg-background font-sans antialiased")}
      >
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "dark",
            children: children,
          }}
        >
          <div className="relative flex flex-col h-screen bg-gray-200 dark:bg-[#07090e]">
            <Navbar />
            <main className="container mx-auto max-w-6xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex flex-col items-center justify-center py-3 dark:bg-[#171D27] bg-[#171D27] sm:px-16 md:px-24 lg:px-56">
              <div className="flex items-center justify-between w-full mt-14 mb-10 bg-[linear-gradient(105.36deg,_#043872_0%,_#0052F4_76.61%,_#0054F5_150.11%)] py-6 px-8 rounded-xl">
                <div className="sm:w-8/12 lg:w-6/12 mr-10">
                  <div className="font-rubik font-extrabold sm:text-lg mb-2 text-white">
                    Let's Connect and Create Something Amazing!
                  </div>
                  <div className="font-rubik text-xs text-white">
                    Interested in my work and wanna work together? Reach out to
                    me for collaborations, inquiries, or just to say hello
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Button
                    as={NextLink}
                    href="/"
                    color="primary"
                    variant="flat"
                    className="font-normal font-rubik rounded-md px-10 bg-gray-200 text-[#363636]"
                  >
                    Reach out
                  </Button>
                </div>
              </div>
              <Divider className="dark: bg-gray-700" />
              <div className="flex flex-row w-full mt-8 mb-5">
                <div className="text-xs font-rubik text-[#818181] w-5/12">
                  Created by{" "}
                  <span className="dark:text-white text-gray-300">
                    @puneetkakkar
                  </span>{" "}
                  &
                  <span className="dark:text-white text-gray-300">
                    {" "}
                    @abgautam
                  </span>
                </div>
                <div className="text-xs font-rubik text-[#818181] w-6/12">
                  &copy; 2024 Puneet Kakkar. All Rights Reserved.
                </div>
                <div className="flex flex-row items-center">
                  <DiscordIcon size={18} className="mx-1 text-gray-300" />
                  <GithubIcon size={18} className="mx-1 text-gray-300" />
                  <InstagramIcon
                    size={16}
                    className="mx-1 dark:fill-white fill-gray-300"
                  />
                  <TwitterIcon
                    size={14}
                    className="mx-1 dark:fill-white fill-gray-300"
                  />
                </div>
              </div>
              {/* <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">&copy;</span>
                <p className="text-primary">Puneet Kakkar</p>
              </Link> */}
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
