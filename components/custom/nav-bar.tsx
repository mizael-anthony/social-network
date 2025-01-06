import { Search, MessageCircleMore, BellPlus } from 'lucide-react'
import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export const Navbar = () => {
    return (
        <div
            className='flex items-center justify-between p-4'
        >
            <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
                <Search />
                <input type="text" placeholder='Search...' />
            </div>

            <div className='flex items-center gap-6'>
                <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                    <MessageCircleMore />
                </div>
                <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                    <BellPlus />
                </div>
                <div className='flex flex-col'>
                    <span className='text-xs leading-3 font-medium'>Mizael</span>
                    <span className='text-[10px] text-gray-500 text-right'>mizaelanthony07@gmail.com</span>
                </div>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}
 