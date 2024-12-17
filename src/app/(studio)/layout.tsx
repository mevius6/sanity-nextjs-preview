import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Контент-студия",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="ru" dir="ltr">
      <head>
        <link rel="icon" href="https://fav.farm/🌿" />
      </head>
      <body style={{ margin: 0 }} suppressHydrationWarning>{children}</body>
    </html>
  );
}

// FIXME https://nextjs.org/docs/messages/missing-root-layout-tags
// https://github.com/vercel/next.js/discussions/72035
