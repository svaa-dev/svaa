import type { Metadata } from 'next'
import { geistSans, geistMono } from '@/styles/fonts'
import '@/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SidebarLeft } from '@/components/sidebar-left'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { ModeToggle } from '@/components/mode-toggle'

export const metadata: Metadata = {
  title: 'title',
  description: 'description',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={true}>
            <SidebarLeft />
            <div className='mx-auto flex w-5xl flex-col border-r border-l'>
              <div className='flex items-center justify-between p-2'>
                <SidebarTrigger className='cursor-col-resize' />
                <ModeToggle />
              </div>
              <hr />
              <main className='px-3.5 py-2'>{children}</main>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
