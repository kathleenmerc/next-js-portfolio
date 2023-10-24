import React from 'react'

type SectionHeadingProps = {
    children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className='text-2xl font-semibold capitalize text-center mb-2'>
            {children}
    </h2>
  )
}
