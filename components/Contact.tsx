'use client';

import React from 'react'
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import Link from 'next/link';

export default function Contact() {

{/* setting the active section when Contact section is in viewport */}
const { ref } = useSectionInView("Contact", 0.5);

  return (
    <section
        ref={ref}
        id='contact' 
        className='mb-20 max-w-[45rem] text-center leading-8 sm:mb-30 scroll-mt-28' 
    >
        <SectionHeading>Contact</SectionHeading>

        <div className='flex-col gap-8 mt-3 mb-2 mx-2 py-8 px-20 bg-slate-100 rounded-lg border border-black/5 shadow-lg hover:border-gray-200 hover:shadow-lg hover:bg-white transition dark:bg-white/10 dark:hover:bg-white/15 dark:hover:shadow-sm dark:hover:shadow-sky-200 dark:transition'>
            <Link 
                href="mailto:kathleenmerc@gmail.com" 
                target="_blank"
                className='flex items-center gap-3 py-2 px-4 mb-2 text-gray-800 font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-200 hover:text-gray-950 transition dark:text-white/80 dark:hover:shadow-sm dark:hover:shadow-sky-200 dark:hover:text-white dark:transition dark:hover:bg-gray-900 '>
                <FaEnvelope className='text-gray-900 font-bold text-2xl dark:text-white/80 dark:hover:text-white'/>kathleenmerc@gmail.com
            </Link>

            <Link 
                href="https://www.linkedin.com/in/kathleenmercado/"
                target="_blank" 
                className='flex items-center gap-3 py-2 px-4 mb-1 text-gray-800 font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-200 hover:text-gray-950 transition dark:text-white/80 dark:hover:bg-white/15 dark:hover:shadow-sm dark:hover:shadow-sky-200 dark:hover:text-white dark:transition dark:hover:bg-gray-900'>
                <FaLinkedin className='text-gray-900 font-bold text-2xl dark:text-white/80 dark:hover:text-white'/>kathleenmercado
            </Link>

            <Link 
                href="https://github.com/kathleenmerc"
                target="_blank" 
                className='flex items-center gap-3 py-2 px-4 mb-1 text-gray-800 font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-200 hover:text-gray-950 transition dark:text-white/80 dark:hover:shadow-sm dark:hover:shadow-sky-200 dark:hover:text-white dark:transition dark:hover:bg-gray-900'>
                <FaGithub className='text-gray-900 font-bold text-2xl dark:text-white/80 dark:hover:text-white'/>kathleenmerc
            </Link>
            
        </div>
        
        
    </section>
  )
}
