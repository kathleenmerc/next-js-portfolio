import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className='text-xl font-bold capitalize text-center mb-2'>
            {children}
    </h2>
  )
}
