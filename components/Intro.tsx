'use client'

import React from 'react'
import Image from 'next/image'
import profilePhotoImg from '@/public/profilePhotoImg.png'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowRight, FaArrowUpRightFromSquare, FaLinkedin, FaGithub } from 'react-icons/fa6'

export default function Intro() {
  return (
    <section className='mb-28 mt-24 max-w-[50rem] text-center sm:mb-0 sm:mt-0 scroll-mt-[100rem]'>
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

        <motion.p 
            className='flex items-center justify-center text-center mb-4 mt-4 text-lg font-medium text-gray-950 sm:text-xl sm:mt-0 sm:mb-0 sm:py-3'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}    
        >
            Hello, my name is Kathleen 👋<br />
            I'm a physical therapist turned software engineer 👩🏻‍⚕️👩🏻‍💻<br />
            Let's connect! 🤝<br />
        </motion.p>

        <motion.div 
            className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1,
            }}  
        >
            <Link 
                href="#contact" 
                className='bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full'
            >
                Contact <FaArrowRight />
            </Link>

            <a href="resume" target="_blank" className='bg-white px-7 py-3 flex items-center gap-2 rounded-full'>
                Resume <FaArrowUpRightFromSquare />
            </a>

            <a href="link" target="_blank" className='bg-white px-7 py-3 flex items-center gap-2 rounded-full'>
                <FaLinkedin />
            </a>

            <a href="link" target="_blank" className='bg-white px-7 py-3 flex items-center gap-2 rounded-full'>
                <FaGithub />
            </a>

        </motion.div>
    </section>
  )
}
