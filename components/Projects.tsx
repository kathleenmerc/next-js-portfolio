'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import Project from './Project';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {

    {/* setting the active section when Projects section is in viewport */}
    const { ref } = useSectionInView("Projects", 0.25);
    
    return (
        <motion.section
            ref={ref}
            className='mb-20 leading-8 sm:mb-30 scroll-mt-28'
            id='projects'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <SectionHeading>Projects</SectionHeading>

            {/* map through projects */}
            <div className='flex flex-wrap items-evenly justify-center max-w-[60rem]'>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>

        </motion.section>
    )
}


