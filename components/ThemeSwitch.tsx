'use client';

import React, { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';


export type Theme = "light" | "dark"


export default function ThemeSwitch() {

    const [theme, setTheme] = useState<Theme>("light")

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        } else {
            setTheme("light")
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        }
    }

    /* set theme according to local storage or according to user's computer preference */
    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null
        
        if(localTheme) {
            setTheme(localTheme)

            if (localTheme === "dark") {
                document.documentElement.classList.add("dark")
            }
        } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
            setTheme("dark")
            document.documentElement.classList.add("dark")
        } 
        
    }, [])

    return (
        <button
            className='fixed bottom-5 right-5 bg-yellow-500 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white/40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-blue-950'
            onClick={toggleTheme}
        >
            {theme === "light" ? <BsSun className='text-white text-2xl'/> : <BsMoon className='text-white'/>}
            
        </button>
    )
}
