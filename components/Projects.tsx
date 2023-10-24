import React from 'react';
import SectionHeading from './SectionHeading';
import { projectsData } from '@/lib/data';
import Project from './Project';

export default function Projects() {
    return (
        <section 
            className='mb-20 leading-8 sm:mb-30 scroll-mt-28'
            id='projects'
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

        </section>
    )
}


