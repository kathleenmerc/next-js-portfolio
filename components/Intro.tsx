'use client'

import React from 'react'
import Image from 'next/image'
import profilePhotoImg from '@/public/profilePhotoImg.png'
import { motion } from 'framer-motion'

export default function Intro() {
  return (
    <section>
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
                        className="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-x1"
                    />
            </motion.div>
        </div>
    </section>
  )
}
