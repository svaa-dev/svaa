import '@/app/globals.css'
import type { Metadata } from 'next'
import { geistSans, geistMono } from '@/app/fonts'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Portafolio',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} mx-auto flex h-screen max-w-5xl flex-col border-r border-l p-12 font-sans antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <header>Breadcrumb</header>
          <main className='flex flex-1 items-center'>{children}</main>
          <footer>Redes</footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
