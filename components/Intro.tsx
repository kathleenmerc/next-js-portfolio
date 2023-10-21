'use client'

import React from 'react'
import Image from 'next/image'
import profilePhotoImg from '@/public/profilePhotoImg.png'
import { motion } from 'framer-motion'

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
            className='flex items-center justify-center text-center mb-10 mt-4 text-lg font-medium text-gray-950 sm:text-xl sm:mt-0 sm:py-3'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}    
        >
            Hello, my name is Kathleen 👋<br />
            I'm a physical therapist turned software engineer 👩🏻‍⚕️👩🏻‍💻<br />
            Let's connect! 🤝<br />
        </motion.p>
    </section>
  )
}
