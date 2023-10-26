'use client';

import React from 'react';
import Image from 'next/image';
import { FaCode, FaLink } from 'react-icons/fa6';
import Link from 'next/link';
import { projectsData } from '@/lib/data';

type ProjectProps = typeof projectsData[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
    liveLink,
    repoLink 
    }: ProjectProps) {
  return (
        <section className='flex-col justify-center text-center mt-3 mb-2 mx-2 p-6 bg-slate-100 hover:bg-white hover:border-gray-200 hover:shadow-lg transition w-[24rem] border border-black/5 rounded-lg overflow-hidden dark:text-white dark:bg-white/10 dark:hover:bg-white/15 '>

            {/* project title */}
            <h3 className='text-lg font-semibold'>{title}</h3>

            {/* project description */}
            <p className=' my-2 leading-relaxed text-slate-700 h-[4rem] dark:text-white/70'>{description}</p>

            {/* project links buttons */}
            <div className='flex justify-center mt-4'>
                <Link 
                    href={liveLink}
                    target="_blank"
                    className='bg-gray-900 text-white text-[1.55rem] px-3 py-1 m-2 rounded-full shadow-lg hover:scale-105 hover:bg-gray-950 hover:shadow-sky-200 active:scale-100 transition text-base dark:text-white dark:bg-white/20 dark:hover:shadow-sm dark:hover:shadow-sky-200 dark:transition'
                >
                    <FaLink className='text-2xl'/>
                </Link>

                <Link 
                    href={repoLink}
                    target="_blank"
                    className='bg-gray-900 text-white text-[1.55rem] px-3 py-1 m-2 rounded-full shadow-lg hover:scale-105 hover:bg-gray-950 hover:shadow-sky-200 active:scale-100 transition text-base dark:text-white dark:bg-white/20 dark:hover:shadow-sm dark:hover:shadow-sky-200 dark:transition'
                >
                    <FaCode className='text-2xl'/>
                </Link>
            </div>

            {/* project image */}
            <div className='flex justify-center p-4'>
                <Image
                    src={imageUrl}
                    alt={title}
                    quality={95}
                    className='w-[20rem] rounded-lg shadow-2xl'
                />
            </div>
            
            

            {/* tags list */}
            <ul className='flex flex-wrap justify-center mt-4 gap-2'>
                {tags.map((tag, index) => (
                    <li
                        className='bg-slate-400 px-2 py-1 text-[0.7rem] text-white rounded-lg dark:bg-gray-900 dark:text-white'
                        key={index}>{tag}
                    </li>
                ))}
            </ul>


        </section>
    )
}
