import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Briefcase, LayoutGrid } from 'lucide-react';
import AppLogo from './app-logo';

export function AppSidebar() {
    const { auth } = usePage().props as unknown as { auth: { user: { role: string } | null } };

    // Group nav items by role
    const groupedNavItems: Record<string, NavItem[]> = {
        common: [
            {
                title: 'Dashboard',
                href: '/dashboard',
                icon: LayoutGrid,
            },
        ],
        teacher: [
            {
                title: 'Task',
                href: '/tasks',
                icon: Briefcase,
            },
        ],
        admin: [
            {
                title: 'Courses',
                href: '/course',
                icon: Briefcase,
            },
        ],
    };

    // Combine common items with role-specific items
    const userRole = auth.user?.role;
    const mainNavItems: NavItem[] = [...groupedNavItems.common, ...(userRole && groupedNavItems[userRole] ? groupedNavItems[userRole] : [])];

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
