'use client';

import React from 'react';
import Image from 'next/image';
import profilePhotoImg from '@/public/profilePhotoImg.png';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaArrowUpRightFromSquare, FaLinkedin, FaGithub } from 'react-icons/fa6';

export default function Intro() {
  return (
    <section className='mb-28 mt-24 max-w-[50rem] text-center sm:mb-0 sm:mt-0 scroll-mt-[100rem]'>
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
                        className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-x1"
                    />
            </motion.div>
        </div>
        
        {/* intro paragraph */}
        <motion.p 
            className='flex items-center justify-center text-center mb-4 mt-4 text-lg font-medium text-gray-950 sm:text-xl sm:mt-0 sm:mb-0 sm:py-3'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}    
        >
            Hello, my name is Kathleen 👋🏽<br />
            I'm a physical therapist turned software engineer 👩🏻‍⚕️👩🏻‍💻<br />
            Let's connect! 🫱🏽‍🫲🏼<br />
        </motion.p>

        {/* CTA buttons */}
        <motion.div 
            className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1,
            }}  
        >

            {/* contact button */}
            <Link 
                href="#contact" 
                className='group bg-gray-900 text-white text-base px-7 py-2 flex items-center gap-3 rounded-full shadow-lg hover:scale-105 hover:bg-gray-950 hover:shadow-sky-200 active:scale-100 transition sm:text-base'
            >
                Contact <FaArrowRight className='opacity-50 group-hover:translate-x-1 transition'/>
            </Link>

            {/* resume button */}
            <a 
                href="/resume.pdf" 
                target="_blank" 
                className='group bg-white text-base px-7 py-2 flex items-center gap-3 rounded-full shadow-lg hover:scale-105 hover:shadow-sky-200 active:scale-100 transition sm:text-base '
            >
                Resume <FaArrowUpRightFromSquare className='opacity-50 group-hover:-translate-y-1 transition'/>
            </a>

            {/* linkedin button */}
            <a 
                href="https://www.linkedin.com/in/kathleenmercado/"
                target="_blank"
                className='group bg-white text-[#0072b1] p-3 flex items-center gap-3 rounded-full shadow-lg hover:scale-105 hover:shadow-sky-200 active:scale-100 transition'
            >
                <FaLinkedin className='group-hover:scale-105' />
            </a>

            {/* github button */}
            <a 
                href="https://github.com/kathleenmerc"
                target="_blank"
                className='group bg-white text-[#171515] p-3 flex items-center gap-3 rounded-full shadow-lg hover:scale-105 hover:shadow-sky-200  active:scale-100 transition'
            >
                <FaGithub className='group-hover:scale-105'/>
            </a>

        </motion.div>
    </section>
  )
}
