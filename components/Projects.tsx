'use client';

import React, { useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import Project from './Project';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/ActiveSectionContextProvider';

export default function Projects() {

    {/* setting the active section when Projects section is in viewport */ }
    const { ref, inView } = useInView({
        threshold: 0.25
    })
    const { setActiveSection } = useActiveSectionContext()

    useEffect(() => {
        if (inView) {
            setActiveSection("Projects")
        }
    }, [inView, setActiveSection])

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


