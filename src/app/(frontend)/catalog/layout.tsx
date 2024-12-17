import type { Metadata } from 'next'
// import LocalHead from '@/ui/head-group'

export const metadata: Metadata = {
  title: 'Каталог произведений',
  description: 'Собрание галереи',
}

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode,
  modal: React.ReactNode
}>) {
  return (
    // <LocalHead title={metadata?.title} subtitle={metadata?.description} />
    <>
      {children}
      {modal}
      {/* <div id="modal-root" /> */}
    </>
  )
}
