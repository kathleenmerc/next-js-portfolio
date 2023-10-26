'use client';

import React from 'react';
import Image from 'next/image';
import profilePhotoImg from '@/public/profilePhotoImg.png';
import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare, FaLinkedin, FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc'
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {

    {/* setting the active section when Intro section is in viewport */ }
    const { ref } = useSectionInView("Home", 1);

    return (
        <section
            ref={ref}
            id='home'
            className='mb-20 mt-24 max-w-[50rem] text-center sm:mb-30 sm:mt-0 scroll-mt-[100rem]'
        >
            {/* profile photo  */}
            <div className='flex items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                    <Image
                        src={profilePhotoImg}
                        alt='profile picture'
                        width="192"
                        height="192"
                        quality="95"
                        priority={true}
                        className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white/50 shadow-x1"
                    />
                </motion.div>
            </div>

            {/* intro paragraph */}
            <motion.h1
                className='flex items-center justify-center text-center mb-4 mt-4 text-lg font-medium text-gray-950 sm:text-xl sm:mt-0 sm:mb-0 sm:py-3 dark:text-white/90'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Hello, my name is Kathleen 👋🏽<br />
                I'm a physical therapist turned software engineer 👩🏻‍⚕️👩🏻‍💻<br />
                Let's connect! 🫱🏽‍🫲🏼<br />
            </motion.h1>

            {/* CTA buttons column */}
            <motion.div
                className='flex-col justify-center text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
            >
                {/* social contact buttons row */}
                <div className='flex justify-center items-center'>
                    {/* gmail button */}
                    <a
                        href="mailto:kathleenmerc@gmail.com"
                        target="_blank"
                        className='group bg-white p-3 m-2 flex items-center gap-3 rounded-full shadow-lg hover:scale-105 hover:shadow-sky-200  active:scale-100 transition dark:bg-white/10 dark:text-white/80 dark:hover:text-white dark:hover:shadow-sm dark:hover:shadow-sky-200'
                    >
                        <FcGoogle className='group-hover:scale-105' />


                    </a>

                    {/* linkedin button */}
                    <a
                        href="https://www.linkedin.com/in/kathleenmercado/"
                        target="_blank"
                        className='group bg-white text-[#0072b1] p-3 m-2 flex items-center gap-3 rounded-full shadow-lg hover:scale-105 hover:shadow-sky-200 active:scale-100 transition dark:bg-white/10 dark:text-[#004ab1] dark:hover:shadow-sm dark:hover:shadow-sky-200'
                    >
                        <FaLinkedin className='group-hover:scale-105' />
                    </a>

                    {/* github button */}
                    <a
                        href="https://github.com/kathleenmerc"
                        target="_blank"
                        className='group bg-white text-[#171515] p-3 m-2 flex items-center gap-3 rounded-full shadow-lg hover:scale-105 hover:shadow-sky-200  active:scale-100 transition dark:bg-white/10 dark:hover:shadow-sm dark:hover:shadow-sky-200'
                    >
                        <FaGithub className='group-hover:scale-105' />
                    </a>
                </div>


                {/* resume button */}
                <a
                    href="/Kathleen-Mercado-Resume.pdf"
                    target="_blank"
                    className='group mx-auto bg-white text-base px-7 py-2 mt-2 w-36 flex items-center gap-3 rounded-full shadow-lg hover:scale-105 hover:shadow-sky-200 active:scale-100 transition sm:text-base dark:bg-white/10 dark:text-white/80 dark:hover:text-white dark:hover:shadow-sm dark:hover:shadow-sky-200'
                >
                    Resume <FaArrowUpRightFromSquare className='opacity-50 group-hover:-translate-y-1 transition' />
                </a>
        
            </motion.div>

        </section >
    )
}
