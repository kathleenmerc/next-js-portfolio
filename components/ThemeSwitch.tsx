'use client';

import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from "@/context/ThemeContextProvider";


export default function ThemeSwitch() {

    const { theme, toggleTheme } = useTheme();
    
    return (
        <button
            className='fixed bottom-5 right-5 bg-yellow-500 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white/40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-blue-950'
            onClick={toggleTheme}
        >
            {theme === "light" ? <BsSun className='text-white text-2xl'/> : <BsMoon className='text-white'/>}
            
        </button>
    )
}
