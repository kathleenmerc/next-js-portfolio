'use client';

import React from 'react';
import { skillsData } from '@/lib/data';
import SectionHeading from './SectionHeading';
import { useSectionInView } from '@/lib/hooks';
import { animate, motion } from 'framer-motion';

{/* framer motion fade in animation settings for each skill */}
const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };


export default function Skills() {

    {/* setting the active section when Skills section is in viewport */}
    const { ref } = useSectionInView("Skills", 0.5);

    return (
        <section
            ref={ref}
            id='skills' 
            className='mb-20 max-w-[45rem] text-center leading-8 sm:mb-30 scroll-mt-28' 
        >
            <SectionHeading>Skills</SectionHeading>
            
            <ul className='flex flex-wrap justify-center gap-2 text-md text-gray-800'>
                {skillsData.map((skill, index) => (
                        <motion.li 
                            className='bg-slate-300 bg-opacity-40  rounded-lg px-5 py-2 shadow-lg hover:scale-105 hover:cursor-default hover:shadow-sky-200 transition'
                            key={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                        >
                            {skill}
                        </motion.li>
                ))}
            </ul>

        </section>
    )
}