'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { Home, FolderKanban, Braces, Info } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function SidebarLeft() {
  const pathname = usePathname()
  // console.log(pathname)
  return (
    <Sidebar className='whitespace-nowrap' collapsible='icon'>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === '/'}>
                <Link href={'/'}>
                  <Home /> Inicio
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === '/proyectos'}>
                <Link href={'/proyectos'}>
                  <FolderKanban /> Proyectos
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === '/habilidades'}>
                <Link href={'/habilidades'}>
                  <Braces /> Habilidades
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === '/sobre-mi'}>
                <Link href={'/sobre-mi'}>
                  <Info /> Sobre mi
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
