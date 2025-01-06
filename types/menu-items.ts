import {LucideIcon} from 'lucide-react'

type Item = {
    icon: LucideIcon;
    label: string;
    href: string;
}

export declare type MenuItems = {
    title: string;
    items: Array<Item>
    
}
