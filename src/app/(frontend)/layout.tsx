// import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from "next";
import { forma, fern, roslindale } from "@/fonts";
import "../globals.css";

import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

import { SanityLive } from "@/sanity/lib/live";
import { DisableDraftMode } from "@/components/DisableDraftMode";

import SideNav from "@/components/ui/global-nav";
import PageFooter from "@/components/ui/global-info";
import PageBanner from "@/components/ui/global-banner";

export const metadata: Metadata = {
  title: "Виртуальная галерея",
  description: "Художников Владимира и Натальи Игаевых",
};

export const NAV_LINKS = [{
  'id': 1,
  'title': 'Каталог', // 'собрание (галереи / произведений)'
  'path': '/catalog'
}, {
  'id': 2,
  'title': 'Биография', // 'краткая биография: о художнике'
  'path': '/about' // 'background' | 'bio'
}, {
  'id': 3,
  'title': 'Контакты',
  'path': '/contact'
}]

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" dir="ltr" className={
      `${forma.variable} ${fern.variable} ${roslindale.variable}`
    }>
      <body itemScope itemType="https://schema.org/WebPage">
        {(await draftMode()).isEnabled && (
          <DisableDraftMode />
        )}

        <SideNav data={NAV_LINKS} />
        <PageBanner />

        <main className="grid place-items-center gap-10 init-reveal">
          {children}
        </main>

        <PageFooter />

        <SanityLive />
        {(await draftMode()).isEnabled && <VisualEditing />}

        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
