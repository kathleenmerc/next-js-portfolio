'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider';


export default function Header() {
  //const { activeSection, setActiveSection } = useContext(ActiveSectionContext)
  const { activeSection, setActiveSection } = useActiveSectionContext()

  return (
    <header className="z-[999] relative">

      {/* white navbar background */}
        <motion.div 
          className="group fixed top-0 left-1/2 h-[3.5rem] w-full rounded-none border border-white border-opacity-60 bg-gray-200 bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        
          /* Bounce effect */
          initial={{ y: -100, x: "-50%", opacity: 0 }}
          animate={{ y: 0, x: "-50%", opacity: 1 }}
        ></motion.div>

      {/* navbar items */}
        <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-600 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
            {
              links.map(link => (
                <motion.li 
                  className="h-3/4 flex items-center justify-center" 
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link 
                    className={clsx("flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition", 
                              {"text-gray-950": activeSection === link.name,}
                    )}
                    href={link.hash}
                    onClick={() => setActiveSection(link.name)}
                  >
                    {
                      link.name
                    }
                  </Link>
                </motion.li>
              ))
            }
          </ul>
        </nav>

    </header>
  )
}
