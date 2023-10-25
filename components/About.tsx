'use client';

import React from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {

  {/* setting the active section when About section is in viewport */}
  const { ref } = useSectionInView("About");

  return (
    <motion.section 
        ref={ref}
        className='mb-20 max-w-[45rem] text-center leading-8 sm:mb-30 scroll-mt-28'
        id='about'
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
    >

        <SectionHeading>About Me</SectionHeading>

        <p className='flex items-center justify-center text-center leading-8 mb-4 sm:text-md sm:mt-0 sm:mb-0 sm:py-3'>
            Hello! I'm Kathleen, a software engineer driven by a passion for improving lives. My background spans both healthcare and technology, with a Bachelor of Science in Rehabilitation Science and a Doctor of Physical Therapy (DPT) degree from Northeastern University. In addition, I've successfully completed a computer software engineering immersive bootcamp, giving me a unique blend of healthcare expertise and technical skills. I aspire to continue improving lives through technology, and I'm looking forward to connecting and exploring new opportunities.
        </p>
    </motion.section>
  )
}
