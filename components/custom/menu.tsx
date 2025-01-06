
import { MenuItems } from "@/types/menu-items";
import { Home, User, BookOpenText, UserPen, Settings, LogOut, ShieldMinus } from 'lucide-react';
import Link from "next/link";

const menuItems: Array<MenuItems> = [
    {
        title: 'MENU',
        items: [
            {
                icon: Home,
                label: 'Home',
                href: '/'
            },
            {
                icon: ShieldMinus,
                label: 'Admin',
                href: '/admin'
            },
            {
                icon: BookOpenText,
                label: 'Student',
                href: '/student'
            },
            {
                icon: User,
                label: 'Parent',
                href: '/parent'
            },
        ]
    },
    {
        title: 'OTHER',
        items: [
            {
                icon: UserPen,
                label: 'Profile',
                href: '/profile'
            },
            {
                icon: Settings,
                label: 'Settings',
                href: '/settings'
            },
            {
                icon: LogOut,
                label: 'Logout',
                href: '/logout'
            },
        ]
    }

]

const Menu = () => {
    return (
        <div>
            {menuItems.map(menu => (
                <div className="flex flex-col gap-2" key={menu.title}>
                    <span className="hidden lg:block text-gray-200 font-light my-4">{menu.title}</span>
                    {menu.items.map(item => (
                        <Link
                            href={item.href}
                            key={item.label}
                            className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                        >
                            <item.icon/>
                            <span className="hidden lg:block">{item.label}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Menu
