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
        <section className='flex-col justify-center text-center m-2 p-6 bg-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-lg transition w-[24rem] border border-black/5 rounded-lg overflow-hidden '>

            {/* project title */}
            <h3 className='text-lg font-semibold'>{title}</h3>

            {/* project description */}
            <p className=' my-2 leading-relaxed text-slate-700 h-[4rem]'>{description}</p>

            {/* project links buttons */}
            <div className='flex justify-center mt-4'>
                <Link 
                    href={liveLink}
                    target="_blank"
                    className='bg-gray-900 text-white text-[1.5rem] px-3 py-1 m-2 rounded-full shadow-lg hover:scale-105 hover:bg-gray-950 hover:shadow-sky-200 active:scale-100 transition text-base'
                >
                    <FaLink />
                </Link>

                <Link 
                    href={repoLink}
                    target="_blank"
                    className='bg-gray-900 text-white text-[1.5rem] px-3 py-1 m-2 rounded-full shadow-lg hover:scale-105 hover:bg-gray-950 hover:shadow-sky-200 active:scale-100 transition text-base'
                >
                    <FaCode />
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
                        className='bg-slate-400 px-2 py-1 text-[0.7rem] text-white rounded-lg'
                        key={index}>{tag}
                    </li>
                ))}
            </ul>


        </section>
    )
}
